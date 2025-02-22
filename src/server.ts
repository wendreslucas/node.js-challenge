import express, { Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
import routes from "./routes/router";
import connectToDataBase from "./database";
import router from "./routes/router";

connectToDataBase();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Backend started at http://localhost:${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
