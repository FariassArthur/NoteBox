import mongoose from "mongoose";

const DB_PASS = process.env.DB_PASS
const DB_USER = process.env.DB_USER


const conn = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.618snce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Conexão com o banco estabelecida")
  } catch (error) {
    console.error("Erro na conexão com o banco de dados", error)
  }
}


export {conn};
