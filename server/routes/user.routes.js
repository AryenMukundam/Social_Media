import express from 'express'
import isAuth from '../middlewares/isAuth.js'
import { getCurrentUser, SuggestedUsers } from '../controllers/user.controller.js'
import { getProfile } from '../controllers/user.controller.js'
import { editProfile } from '../controllers/user.controller.js'
import { upload } from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.get('/current' , isAuth , getCurrentUser) // validating user
userRouter.get('/getprofile/:userName' , getProfile)
userRouter.post('/editprofile', isAuth , upload.single('profileImage') , editProfile)  
userRouter.get('/suggested' , isAuth , SuggestedUsers)

export default userRouter