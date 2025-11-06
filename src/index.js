// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import {DB_NAME} from './constants'
// import express from 'express'
import connectDB from "./db/index.js";
import {app} from './app.js'


dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 80000, () => {
            console.log(`server is running on PORT ${process.env.PORT}`)

        })
        app.on("error", (error) => {
            console.log("error:", error)
            throw error
        })
    })
    .catch((err) => {
        console.log("MONOGO db error--->", err)
    })



/* direct approch
const app=express();

;( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("error:",error)
            throw error 
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("error:", error)
        throw error
    }
})()
    */