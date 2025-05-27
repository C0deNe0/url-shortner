import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";

//if the env file is in the root folder itself then we keep the config empty
dotenv.config();
//connecting to database
connectDB();

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: "",
    credentials:true,

}))

app.use("/api/",shortUrl);


app.get("/",(req,res)=>{
    res.send("hello from get api");
})


app.listen(port,()=>{
    console.log(`The server started at ${port}`);
})


