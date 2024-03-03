//require('dotenv).config({path: './env})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()






/*
import express from "express";
const app  = express()

;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error", (error){
          // If the database is working, but the app is not working properly 
        console.log("Application not able to talk with database ", error);
        throw error  
        })

    }catch(error){
        console.log("ERROR: ", error)
        throw err
    }
})()

*/