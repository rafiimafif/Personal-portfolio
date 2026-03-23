export const config = {
  // Only run middleware on the main html pages, not on images/css/js
  matcher: ['/((?!api|_next/static|_next/image|assets|.*\\.png$|.*\\.jpg$|.*\\.ico$).*)'],
};

export default function middleware(request) {
  // Always allow access - previously restricted to specific hours
  return;
}

