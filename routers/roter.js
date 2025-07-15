import { Router } from "express";
import { geta } from "../controllers/conroller.js";
const router = Router() 

router.get("/",geta)

export default router;