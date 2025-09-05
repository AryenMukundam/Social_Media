import User from "../models/user.model.js"

export const getCurrentUser = async ( req , res) => {
    const userId = req.userId

    try {
        const user = await User.findById(userId).select('-password')

        if(!user){
            res.status(404).json({message: 'User not found'})
        }

        res.status(200).json({user})

    } catch (error) {
        res.status(404).json({message: 'Server Error'})
        
    }

}