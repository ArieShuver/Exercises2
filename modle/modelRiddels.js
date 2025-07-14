import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";    


const Riddle = sequelize.define('Riddle', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  correctAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'riddles',
  timestamps: false,    
});
Riddle.sync();
export default Riddle;
