import { relations } from "drizzle-orm/relations";
import { account, session, user } from "./auth-schema";
import { emails, folders } from "./schema";

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const userRelations = relations(user, ({ many }) => ({
  accounts: many(account),
  sessions: many(session),
  emails: many(emails),
  folders: many(folders),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const emailsRelations = relations(emails, ({ one }) => ({
  user: one(user, {
    fields: [emails.userId],
    references: [user.id],
  }),
  folder: one(folders, {
    fields: [emails.customFolderName],
    references: [folders.name],
  }),
}));

export const foldersRelations = relations(folders, ({ one, many }) => ({
  emails: many(emails),
  user: one(user, {
    fields: [folders.userId],
    references: [user.id],
  }),
}));
