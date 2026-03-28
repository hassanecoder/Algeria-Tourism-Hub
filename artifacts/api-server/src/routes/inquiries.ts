import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { inquiriesTable } from "@workspace/db/schema";

const router: IRouter = Router();

router.post("/inquiries", async (req, res) => {
  try {
    const { name, email, phone, destination, travelDate, groupSize, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ error: "name, email, and message are required" });
      return;
    }

    const [inquiry] = await db
      .insert(inquiriesTable)
      .values({
        name,
        email,
        phone: phone ?? null,
        destination: destination ?? null,
        travelDate: travelDate ?? null,
        groupSize: groupSize ? parseInt(groupSize) : null,
        message,
      })
      .returning();

    res.status(201).json({
      ...inquiry,
      createdAt: inquiry.createdAt.toISOString(),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to create inquiry");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
