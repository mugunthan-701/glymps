import { auth } from "./lib/auth";

export default auth((req) => {
  if (
    req.nextUrl.pathname === "/signin" ||
    (req.nextUrl.pathname === "/signup" && req.auth)
  ) {
    let url = new URL("/", req.nextUrl.origin);
    return Response.redirect(url);
  } else if (req.nextUrl.pathname === "/output" && !req.auth) {
    return Response.redirect(new URL("/signin", req.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
