import { where } from "sequelize";
import Riddle from "./modle/modelRiddels.js";

export async function getRiddles(){
    return await Riddle.findAll();   
}

export async function create(data){
    return await Riddle.create(data);
}

export async function del(id){
    return await Riddle.destroy({where:{id}});
}

export async function uptedt(data, id) {
    return await Riddle.update(data, { where: { id } });
}