import express, { urlencoded } from "express";
import dotenv from "dotenv";
import router from "./routes/articleRoute.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//

app.use(logger);
app.use(errorHandler);
//

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/articles", router);

app.listen(PORT, () => {
  console.log(`Server running from PORT: ${PORT}`);
});
