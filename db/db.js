process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import fetch from "cross-fetch";
globalThis.fetch = fetch;

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
