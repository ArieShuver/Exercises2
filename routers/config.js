import  router  from "../routers/roter.js";

export async function config(app) {
     app.use("/", router)
}