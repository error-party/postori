import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL!,
  basePath: "/v1/api/auth",
  trustedOrigins: ["http://localhost:5173"],
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: { enabled: true },
});
