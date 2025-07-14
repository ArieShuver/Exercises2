import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
    "riddles",
    "root",
    "",
    {
        dialect: 'mysql',
        logging: false,
    }
);
sequelize.authenticate().then(() => {
    console.log("Connect to DB");
}).catch(err => {
    console.log("ERR connect to db: ", err);
})

export default sequelize;
