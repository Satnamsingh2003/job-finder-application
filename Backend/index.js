import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors"
import connectDb from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config({})


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
    origion: 'http//localhost:5173',
    credentials: true
}

app.use(cors(corsOptions))

const PORT = process.env.PORT || 3000;

app.listen(PORT , (req , res) => {
    connectDb()
    console.log(`Server is running at the port of ${PORT}`)
} )