import express from "express"
import { protect } from "../middlewares/auth.js"
import { getUserData, loginUser, registerUser } from "../controllers/userController.js"

const userRouter = express.Router()


userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/data",protect,getUserData)

export default userRouter