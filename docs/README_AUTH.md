# Authentication System Documentation

## Overview
This application uses Clerk's built-in waitlist feature combined with Resend for email notifications to create an approval-based authentication system.

## Why Webhooks?
Webhooks are used to automatically notify admins when new users join the waitlist. When someone requests access:
1. They submit the waitlist form
2. Clerk creates a new user in "waitlist" mode
3. Webhook catches the `user.created` event
4. Admin gets an email notification instantly
5. No polling or manual checking required

## Setup Instructions

### 1. Configure Clerk
1. Sign up at [clerk.com](https://clerk.com)
2. Create a new application
3. Enable Waitlist mode: Dashboard → Waitlist → Enable waitlist
4. Copy your API keys from Dashboard → API Keys
5. Set up webhook endpoint:
   - Go to Dashboard → Webhooks
   - Add endpoint: `https://your-domain.com/api/webhooks/clerk`
   - Subscribe to events: `user.created`, `user.updated`
   - Copy the webhook secret

### 2. Configure Resend
1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain
3. Copy your API key from Dashboard

### 3. Environment Variables
Copy `.env.local.example` to `.env.local` and fill in:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
CLERK_WEBHOOK_SECRET=whsec_xxx
RESEND_API_KEY=re_xxx
ADMIN_EMAIL=your-email@example.com
ADMIN_CLERK_USER_ID=user_xxx (optional, for admin access)
```

### 4. Set Admin User
Option 1: Use Clerk Dashboard to set user metadata:
- Find user in Dashboard → Users
- Edit → Public Metadata → Add `{ "role": "admin" }`

Option 2: Set `ADMIN_CLERK_USER_ID` in env with your Clerk user ID

## User Flow

1. **Visitor** → Lands on homepage → Clicks "Request Access"
2. **Waitlist Form** → User submits email and details
3. **Admin Notification** → Email sent to admin via webhook
4. **Admin Review** → Admin logs in to `/admin/approvals`
5. **Approval/Rejection** → Admin clicks approve/reject
6. **User Notification** → User receives email with result
7. **Access** → Approved users can sign in and view presentation

## Testing Locally

1. Install dependencies:
```bash
bun install
```

2. Run development server:
```bash
bun dev
```

3. For webhook testing, use ngrok or similar:
```bash
ngrok http 3000
```
Then update Clerk webhook URL to ngrok URL

## Directory Structure

```
src/app/
├── (auth)/               # Authentication pages
│   ├── sign-in/         # Clerk sign-in
│   ├── sign-up/         # Clerk sign-up
│   └── waitlist/        # Waitlist request form
├── (protected)/         # Protected routes
│   └── presentation/    # Main pitch deck
├── admin/               # Admin routes
│   └── approvals/       # Approval dashboard
└── api/
    ├── webhooks/clerk/  # Webhook handler
    └── notifications/   # Email sender
```

## Security Notes

- Middleware protects `/presentation` and `/admin` routes
- Admin routes have additional role checking
- Webhook signatures are verified using Svix
- All sensitive keys are in environment variables
- CSRF protection built into Next.js

## Customization

### Email Templates
Edit `/src/app/api/notifications/route.ts` to customize email templates

### Waitlist Form
Customize the Clerk Waitlist component appearance in `/src/app/(auth)/waitlist/page.tsx`

### Admin Dashboard
Extend `/src/app/admin/approvals/page.tsx` for additional features like:
- Bulk approvals
- Search/filter
- Export to CSV
- Integration with CRM

## Production Deployment

1. Set production environment variables in Vercel/hosting platform
2. Update Clerk webhook URL to production domain
3. Configure Resend with production domain
4. Enable Clerk production mode
5. Test the full flow before launch