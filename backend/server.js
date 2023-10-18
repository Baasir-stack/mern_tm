const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const colors= require('colors')
const {errorHandler} = require('./middleware/errorHandler')
const connectDB = require('./config/db')

//import routes
const goalRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/api/goals',goalRoutes)
app.use('/api/users',userRoutes)

app.use(errorHandler)

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server started on port ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})
    


// app.listen(port, ()=>{
//     console.log(`Server started on port ${port}`)
// })