import {
  boolean,
  foreignKey,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const folderType = pgEnum("folder_type", [
  "inbox",
  "sent",
  "draft",
  "starred",
  "spam",
  "custom",
]);

export const emails = pgTable(
  "emails",
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    msgId: text("msg_id").notNull(),
    userId: text("user_id").notNull(),
    folderName: folderType("folder_name").notNull(),
    customFolderName: text("custom_folder_name"),
    customFolderUserId: text("custom_folder_user_id"),
    subject: text().notNull(),
    html: text().notNull(),
    text: text().notNull(),
    attachments: text().array(),
    unread: boolean().default(true).notNull(),
    fromAddress: text("from_address").notNull(),
    toAddresses: text("to_addresses").array().notNull(),
    ccAddresses: text("cc_addresses").array(),
    bccAddresses: text("bcc_addresses").array(),
    createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "emails_user_id_fkey",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.customFolderName, table.customFolderUserId],
      foreignColumns: [folders.name, folders.userId],
      name: "emails_custom_folder_fkey",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ],
);

export const folders = pgTable(
  "folders",
  {
    name: text().notNull(),
    userId: text("user_id").notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "folders_user_id_fkey",
    }).onDelete("cascade"),
    primaryKey({ columns: [table.name, table.userId], name: "folders_pkey" }),
  ],
);
