import { Router } from "express";
import { getAllRiddles, createriddle,delRiddel,updateRiddel } from '../controllers/riddels.js';

const router = Router();
    console.log('sdfveswfv');

router.get("/getall", getAllRiddles);
router.post("/add", createriddle);
router.delete("/del",delRiddel);
router.put("/updete",updateRiddel);

export default router;
