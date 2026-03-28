import { pgTable, serial, text, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const experiencesTable = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  duration: text("duration").notNull(),
  difficulty: text("difficulty"),
  price: text("price").notNull(),
  highlights: jsonb("highlights").$type<string[]>().notNull().default([]),
  included: jsonb("included").$type<string[]>().notNull().default([]),
  destinationId: integer("destination_id"),
});

export const insertExperienceSchema = createInsertSchema(experiencesTable).omit({ id: true });
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = typeof experiencesTable.$inferSelect;
