import express from 'express'
import "dotenv/config"
import cors from 'cors'
import connectDB from './configs/mongoDB.js'
import userRouter from './routes/userRouter.js'
import ownerRouter from './routes/ownerRoutes.js'

//Initialize Express App
const app = express()

//Connect Data base
await connectDB()

//Middlewares
app.use(cors())
app.use(express.json())

app.get("/",(req,res) => {
    res.send("Server Setup")
})

app.use("/carRental/user",userRouter)
app.use("/carRental/owner",ownerRouter)

const PORT  = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Server Is Running On http://localhost:${PORT}`)
})