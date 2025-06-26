import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;
import cors from "cors";
import morgan from "morgan";
//DB connections
import { dbConnect } from "./config/dbConfig.js";

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// server status
app.get("/", (req, res) => {
  res.json({
    message: "Server is live!",
  });
});

dbConnect()
  .then(() => {
    app.listen(PORT, (error) =>
      error
        ? console.log(error)
        : console.log(`server is running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(error));
