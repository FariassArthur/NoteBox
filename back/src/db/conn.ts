import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASS,
  port: 5432,
});

pool
  .connect()
  .then((client) => {
    
  })
  .catch((error) => {
    console.log("Erro ao conectar ao banco:", error);
  });

export default pool;
