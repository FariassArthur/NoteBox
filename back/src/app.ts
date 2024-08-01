//config
require("dotenv").config();

import express from "express";
import cors from "cors";
import {conn} from "./db/conn"

const app = express();
const port = process.env.PORT;

//config JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

//routes
import userRoutes from "./routes/UserRoutes"

//system routes
app.use("/users", userRoutes)

app.listen(port, () => {
  conn()
  console.log(`App rodando na porta: ${port}`);
});
