import { Router } from "express";
import { getall ,getall,deletUser, addUser} from "../dal.js";
const router = Router() 

router.get("/",getall);
router.post("/",addUser);
router.delete("/",deletUser);


export default router;