import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as auth from "./auth-schema";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  console.warn("set database url through DATABASE_URL env variable");
  throw new Error("Database URL missing");
}
const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  ssl: true,
});

export const db = drizzle({ client: pool, schema: { ...auth, ...schema } });
