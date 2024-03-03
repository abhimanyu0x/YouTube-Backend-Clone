import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"



const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limits:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("Public"))
app.use(cookieParser())

//routes

import userRoutes from './routes/user.routes.js'
// routes declaration 

//app.use("/users",userRoutes)
//http://localhost:8000/users/register
app.use("/api/v1/users",userRoutes)
//http://localhost:8000/api/v1/users/register

export {app}