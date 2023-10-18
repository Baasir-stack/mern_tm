const express = require('express')

const router = express.Router()

const {registerUser,
       loginUser,
       getMe
} = require('../controllers/userControllers')

const requireAuth = require('../middleware/requireAuth')



router.post('/',registerUser)

router.post('/login',loginUser)


router.get('/me',requireAuth,getMe)


module.exports = router