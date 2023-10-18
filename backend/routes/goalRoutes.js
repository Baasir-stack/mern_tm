const express = require('express')

const router = express.Router()
const requireAuth = require('../middleware/requireAuth')
const {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
} = require('../controllers/goalControllers')


router.route('/').get(requireAuth,getGoals).post(requireAuth,setGoals)


router.route('/:id').put(requireAuth,updateGoals).delete(requireAuth,deleteGoals)




module.exports = router