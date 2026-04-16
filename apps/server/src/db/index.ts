import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

if (!process.env.DATABASE_URL) {
  console.warn("set database url through DATABASE_URL env variable");
  throw new Error("Database URL missing");
}
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
export const db = drizzle({ client: pool });
