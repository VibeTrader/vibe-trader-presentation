import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { PRESENTATION_CONFIG } from "@/config/presentation";

const isProtectedRoute = createRouteMatcher([
  "/presentation(.*)",
  "/admin(.*)",
]);

const isPublicFaqRoute = createRouteMatcher(
  PRESENTATION_CONFIG.faqSlides.map((slide) => `/presentation/${slide}`),
);

const isAdminRoute = createRouteMatcher([
  "/admin(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();
  
  // Protect routes that require authentication
  if (isProtectedRoute(req) && !isPublicFaqRoute(req)) {
    await auth.protect();
  }

  // Additional check for admin routes
  if (isAdminRoute(req)) {
    const metadata = sessionClaims?.metadata as { role?: string } | undefined;
    const isAdmin = metadata?.role === "admin" || 
                    userId === process.env.ADMIN_CLERK_USER_ID;
    
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};