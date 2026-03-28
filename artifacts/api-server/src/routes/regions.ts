import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { regionsTable } from "@workspace/db/schema";

const router: IRouter = Router();

router.get("/regions", async (_req, res) => {
  try {
    const rows = await db
      .select()
      .from(regionsTable)
      .orderBy(regionsTable.name);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
