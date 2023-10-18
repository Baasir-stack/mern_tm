
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = async(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{
        expiresIn:"3d"
    })
}

//@desc Register new user
//@route POST /api/users
const registerUser = async(req, res)=>{

    const {name, email, password} =req.body

    try{
        
        const user =await User.register(name, email, password, res)

        const token = await createToken(user._id)

        res.status(201).json({user,token})

    }catch(error){
        res.status(400).json({error:error.message})
        
    }

}


//@desc Authenticate a user
//@route POST /api/users
const loginUser = async(req, res)=>{

    const {email, password} = req.body

    try{
        const user = await User.login(email, password, res)

        const token = await createToken(user._id)

        res.status(200).json({user,token})

    }catch(error){
        res.status(400).json({error:error.message})
    }

}


//@desc Get user data
//@route GET /api/users
const getMe = async(req, res)=>{

    const _id = req.user.id    

    const user = await User.findById({_id}).select("name email")

    res.json(user)
}

module.exports ={
    registerUser,
    loginUser,
    getMe
}