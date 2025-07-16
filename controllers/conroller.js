import { getall ,addUser} from "../dal.js";

export async function getall(req, res) {
    const respons = await getall();
    res.status(200).json(respons);
}

export async function addUser(req, res) {
    const respons = await addUser()

}
