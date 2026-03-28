import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { experiencesTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/experiences", async (req, res) => {
  try {
    const { category } = req.query as { category?: string };

    const rows = await db
      .select()
      .from(experiencesTable)
      .where(category ? eq(experiencesTable.category, category) : undefined)
      .orderBy(experiencesTable.title);

    res.json(rows);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch experiences");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
