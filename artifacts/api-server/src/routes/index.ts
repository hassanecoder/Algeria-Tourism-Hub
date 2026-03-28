import { Router, type IRouter } from "express";
import healthRouter from "./health";
import destinationsRouter from "./destinations";
import experiencesRouter from "./experiences";
import regionsRouter from "./regions";
import inquiriesRouter from "./inquiries";

const router: IRouter = Router();

router.use(healthRouter);
router.use(destinationsRouter);
router.use(experiencesRouter);
router.use(regionsRouter);
router.use(inquiriesRouter);

export default router;
