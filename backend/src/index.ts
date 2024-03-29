import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION as string).then(() => console.log("Conneced to MongoDB database!"));
const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) =>{
    res.json({ message: "Hello!"});
});

app.listen(7000, ()=>{
    console.log("Server started at port : 7000")
})