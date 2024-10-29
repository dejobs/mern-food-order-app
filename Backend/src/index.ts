import express, {Request, Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import "dotenv/config";
import userRouter from "./routes/user.route";

mongoose
  .connect(process.env.MONGO as string)
  .then(() => console.log("connceted live to mongodb sever😃"))
  .catch((err) => console.log(err.message));

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/api/user", userRouter);

app.listen(7500, () => {
  console.log("app is listenng at port 7500!!!");
});
