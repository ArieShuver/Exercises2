import { getall } from "../dal.js";

export async function geta(req,res){
    const respons = await getall();
    res.status(200).json(respons);
}

