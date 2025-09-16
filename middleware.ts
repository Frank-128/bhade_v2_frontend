import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJwt } from "jose";

export async function middleware(req: NextRequest) {
 
   const allCookies = req.cookies.getAll();


 
    const access = req.cookies.get("access")?.value;
  const refresh = req.cookies.get("refresh")?.value;


  if (access) {
    try {
      const payload = decodeJwt(access);
      const now = Math.floor(Date.now() / 1000);

      if (payload.exp && payload.exp > now) {
      
        const res = NextResponse.next();
        res.headers.set("Authorization", `Bearer ${access}`);
        return res;
      }
      
    } catch (e) {
      console.log("[middleware] Access invalid, refreshing...");
    }
  }

  if (refresh) {
    try {
      const res = await fetch(
        `${process.env.BACKEND_URL}/api/token/refresh/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh }),
        }
      );

      if (res.ok) {
        const { access: newAccess } = await res.json();

        const response = NextResponse.next();
        response.cookies.set("access", newAccess, {
          httpOnly: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
          path: "/",
          maxAge: 60 * 15,
        });

        response.headers.set("Authorization", `Bearer ${newAccess}`);
        return response;
      }
    } catch (e) {
      console.error("[middleware] Refresh request failed", e);
    }
  }

  // fallback → not authenticated
  return NextResponse.redirect(new URL("/signin", req.url));
}

export const config = {
  matcher: [
    "/",
    "/blocks",
    "/electricity",
    "/payments",
    "/reports",
    "/property",
    "/tenants",
    "/water",
  ],
};
