
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

const asyncHandler = require('express-async-handler')


//Get goals   
//Route: /api/goals
const getGoals =async (req, res)=>{

    const goal = await Goal.find()

    
    res.status(200).json(goal)

}

//Create goals   
//Route: /api/goals
const setGoals =asyncHandler(async(req, res)=>{
    
    if(!req.body.text){
        res.status(400)
        throw new Error("please add text field")


    }else{
        const goal = await Goal.create({
            user:req.user.id,
            text:req.body.text
        })
    
        res.status(200).json(goal)
    }    
    
    

}
)
//Update goals   
//Route: /api/goals
const updateGoals =asyncHandler(async (req, res)=>{

    const {id} = req.params

    const goal = await Goal.findById(id)

    if(!goal){
        throw new Error("goal not found")
    }

    const user = await User.findById(req.user.id)

    //check user 
    if(!user){
        res.status(401)
        throw new Error("User not found")
    }


    if(goal.user.toString()!==user.id){
        res.status(401)
        throw new Error("Not authorized")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,
        {
            new:true
        }
        )

    res.status(200).json(updatedGoal)
})

//Delete goals   
//Route: /api/goals
const deleteGoals =asyncHandler(async (req, res)=>{

    const {id} = req.params
    const goal = await Goal.findById(id)

    if(!goal){
        throw new Error("goal not found")
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error("User not found")
    }

    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error("Not authorized")
    }
    
       
    
       

    await goal.remove()

  

    res.status(200).json(goal)


})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNkOTA3MWFlZjYyN2I5Y2MxYTBmZjYiLCJpYXQiOjE2NjUwODE5ODAsImV4cCI6MTY2NTM0MTE4MH0.ZZZp8eLRiXKNltY75oa5lABbgAmKK1xufJSQsWhLCDo