const mongoose  = require('mongoose')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    email:{
        type:String,
        required:[true,'Please add an email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add a password']
    }
})

//static register method
userSchema.statics.register = async function(name, email, password,res){

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields")
    }

    const exists = await this.findOne({email})

    if(exists){
        res.status(400)
        throw new Error("User already exists")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user =await this.create({
        name,
        email,
        password:hash
    })

    return user


}


//static login method
userSchema.statics.login = async function(email, password,res){

    if(!email || !password){
        res.status(400)
        throw new Error("Please fill all fields")
    }

    const user = await this.findOne({email})

    if(!user){
        res.status(400)
        throw new Error("Incorrect email")
    }

    const match = bcrypt.compare(password,user.password)

    if(!match){
        res.status(400)
        throw new Error("Incorrect password")
    }


    return user


}



module.exports = mongoose.model('User',userSchema)
