import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email"),
});

export const songs = sqliteTable("songs", {
  id: integer("id").primaryKey(),
  name: text("name"),
  url: text("url"),
});
