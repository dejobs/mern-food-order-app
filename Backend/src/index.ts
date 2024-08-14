import express, {Request, Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import "dotenv/config";

mongoose
  .connect(process.env.MONGO as string)
  .then(() => console.log("connceted live to mongodb sever😃"))
  .catch((err) => console.log(err.message));

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({message: "hello there"});
});

app.listen(7500, () => {
  console.log("app is listenng at port 7500!!!");
});
