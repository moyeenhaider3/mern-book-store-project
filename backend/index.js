import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { PORT, mongodbURL } from "./config.js";
import bookRoutes from "./routes/bookRoutes.js";

const app=express();

//middleware to parse json
app.use(express.json());

//middleware for CORS error

//allow all types of requests cors(*) 
app.use(cors());

// app.use(cors({
//     methods:["GET","PUT","POST","DELETE"],
//     origin: [FRONTEND_URL],
//     credentials:true,
//     allowedHeaders:["Content-Type"]
// }));

//middleware to route to books
app.use("/books",bookRoutes);
app.get("/",(req,res)=>res.status(200).send("Welcome Home"));




mongoose.connect(mongodbURL).then(()=>{
    console.log("DB connected");
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((e)=>{
    console.log(`Error connecting to DB`+e);
})

