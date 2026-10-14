# Public pitch deck

The pitch deck is publicly accessible without signing in or requesting access.

- `/` opens the landing page with a View Pitch Deck button.
- `/presentation` redirects to `/presentation/1`.
- Every numbered slide and research page is public.
- Legacy `/sign-in` and `/sign-up` links redirect to the first slide.

Clerk middleware, the Clerk provider, the user dashboard, and waitlist notification and webhook endpoints have been removed. Clerk and waitlist email environment variables are no longer required. PDF exports run without a saved authentication session; see [the export guide](../scripts/EXPORT_PDF.md).
