import express from "express";
import companyProfileRouter from "./companyProfileRouter.js"
import companyRouter from "./companyRouter.js"

const router = express.Router();

router.use(companyProfileRouter)
router.use(companyRouter)

export default router