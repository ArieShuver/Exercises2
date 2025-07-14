import router from "./router.js";
import express from 'express';

function config(app) {
    app.use("/riddels", router);    
}

export default config;