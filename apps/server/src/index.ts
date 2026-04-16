import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { db } from "./db";
import { emails } from "./db/schema";
import email from "./routes/email";
import type { HonoEnv } from "./types/api";
import { auth } from "./utils/auth";

// main app
const app = new Hono<HonoEnv>();

// middlewares
app.use(logger());

app.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    allowMethods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

const routes = app
  .basePath("/")
  .get("/", async (c) => {
    const allEmails = await db.select().from(emails);
    console.log("Getting all allEmails from the database: ", allEmails);
    return c.json(allEmails);
  })
  .on(["POST", "GET"], "/api/auth/*", (c) => {
    return auth.handler(c.req.raw);
  })
  .route("/email", email)
  .get("/notfound", (c) => c.notFound());

export type AppType = typeof routes;
export default app;
