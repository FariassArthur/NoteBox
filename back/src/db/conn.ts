import { Pool } from "pg";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as any,
  }
);

const conn = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso");
  } catch (error) {
    console.error("Conexão com servidor falhour", error);
  }
};

export {sequelize, conn};
