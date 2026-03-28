import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { destinationsTable } from "@workspace/db/schema";
import { eq, and, type SQL } from "drizzle-orm";

const router: IRouter = Router();

router.get("/destinations", async (req, res) => {
  try {
    const { region, category, featured } = req.query as Record<string, string | undefined>;

    const conditions: SQL[] = [];
    if (region) conditions.push(eq(destinationsTable.region, region));
    if (category) conditions.push(eq(destinationsTable.category, category));
    if (featured !== undefined) conditions.push(eq(destinationsTable.featured, featured === "true"));

    const rows = await db
      .select()
      .from(destinationsTable)
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(destinationsTable.name);

    const destinations = rows.map((d) => ({
      ...d,
      coordinates: d.lat && d.lng ? { lat: d.lat, lng: d.lng } : undefined,
    }));

    res.json(destinations);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch destinations");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/destinations/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid ID" });
      return;
    }

    const [destination] = await db
      .select()
      .from(destinationsTable)
      .where(eq(destinationsTable.id, id));

    if (!destination) {
      res.status(404).json({ error: "Destination not found" });
      return;
    }

    res.json({
      ...destination,
      coordinates: destination.lat && destination.lng ? { lat: destination.lat, lng: destination.lng } : undefined,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to fetch destination");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
