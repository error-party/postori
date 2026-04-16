import type { Context, Next } from "hono";
import { auth } from "../utils/auth";

async function authMiddleware(c: Context, next: Next) {
  // console.log("Header->>>: ", c.req.raw.headers);
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  // console.log("SESSION: ", session);
  if (!session) {
    c.set("session", null);
    return c.text("unauthorized try logging in...");
  }

  c.set("user", session.user);
  c.set("session", session.session);
  await next();
}

export { authMiddleware };
