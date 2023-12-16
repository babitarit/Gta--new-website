/* imports */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const httpServer = http.createServer(app);
const port = process.env.PORT || 9000;

/* ROUTES */

/* MONGOOSE SETUP */

async function startServer() {
    app.use(cors(), express.json(), bodyParser.json(),  bodyParser.urlencoded({ extended: false }));
    mongoose
      .connect(process.env.MONGO_URL)
      .then(async () => {
        await new Promise((resolve) =>
          httpServer.listen({ port }, resolve)
        );
        console.log(`🚀 Server is ready at : http://localhost:${port}`);
        console.log("Connected to DB");
      })
      .catch((err) => console.log(err));
  }

startServer();
