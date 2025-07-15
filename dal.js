import { supabase } from "./db/db.js";

export async function getall(){
    const {data ,error} = await supabase.from('test').select("*")
    if (error) return console.log(error)    
    return data;
    }
