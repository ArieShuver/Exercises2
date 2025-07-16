import { supabase } from "./db/db.js";

export async function getall() {
  const { data, error } = await supabase.
  from('test').
  select("*")
  if (error) return console.log(error)
  return data;
}

export async function addUser(username, password) {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{ username, password }]);
  }
catch(error) {
  console.log('error db',error.message);
  
    }
    if (error) {
      console.error("Error inserting user:", error.message);
      return null;
    }

    return data;
  }

export async function deletUser(username) {
    const { data, error } = await supabase
    .from('user')
    .delete(username)

  }
