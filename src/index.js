// require('dotenv').config({path : "./env"})

import connectingDb from "./db/index.js";
import dotenv from 'dotenv'
dotenv.config({
    path: "./env"
})



connectingDb()




/*
import express from "express"

const app = express()
(
    async() => {
        try{
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("err",(err) => {
                console.log(("Error:",err));
                throw err
            });

            app.listen(process.env.PORT,() => {
                console.log("The app is listening on:",process.env.PORT)
            })

        }catch(error){
            console.error("Error :",error);
            throw error
        }
    }
)()
*/