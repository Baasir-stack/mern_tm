import axios from 'axios'
import { response } from 'express'

const API_URL = '/api/users'

// Register user

const register = async (userData)=>{
    const repsonse = await axios.post(API_URL,userData)

    //Store data in localStorage if response is OK
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService