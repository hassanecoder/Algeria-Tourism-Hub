import { pgTable, serial, text, boolean, real, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const destinationsTable = pgTable("destinations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  region: text("region").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  shortDescription: text("short_description").notNull(),
  imageUrl: text("image_url").notNull(),
  highlights: jsonb("highlights").$type<string[]>().notNull().default([]),
  bestTimeToVisit: text("best_time_to_visit").notNull(),
  difficulty: text("difficulty"),
  duration: text("duration"),
  featured: boolean("featured").notNull().default(false),
  rating: real("rating").notNull().default(4.5),
  reviewCount: integer("review_count").notNull().default(0),
  lat: real("lat"),
  lng: real("lng"),
});

export const insertDestinationSchema = createInsertSchema(destinationsTable).omit({ id: true });
export type InsertDestination = z.infer<typeof insertDestinationSchema>;
export type Destination = typeof destinationsTable.$inferSelect;
