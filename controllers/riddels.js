import { getRiddles, create, del, uptedt } from "../dal.js";

export async function getAllRiddles(req, res) {

    try {
        const riddles = await getRiddles();
        res.status(200).json(riddles);
    } catch (error) {
        console.error("Error fetching riddles:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export async function createriddle(req, res) {
    try {
        await create(req.body);
        res.status(200).json("creatad")
    }
    catch (error) {
        console.log('error', error.message);
        res.status(500)
        res.send("error")
    }
}

export async function delRiddel(req, res) {
    try {
        await del(req.body);
        res.status(200).json("delet riddel", req.body)
    }
    catch {
        res.status(500).json("error delete")
    }
}

export async function updateRiddel(req, res) {
    try {
        await uptedt(req.body,req.body.id)
        res.status(200).json("uptedt")
    }
    catch {
        res.status(500).json("error update")
    }
}
