import express from 'express'
import { logout, signIn, signUp } from '../controllers/auth.controller.js'
import isAuth from '../middlewares/isAuth.js'


const authRouter = express.Router()

authRouter.post('/signup' , signUp)
authRouter.post('/signin' , signIn)
authRouter.post('/logout' , isAuth , logout)

export default authRouter