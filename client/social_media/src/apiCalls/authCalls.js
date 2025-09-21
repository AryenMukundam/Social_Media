import axios from "axios"
import { API_BASE_URL } from "./config.js"


const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, //it will send cookies/credentials
});

// Register User/ Sign Up

export const signUp = async (userData) => {
    try{
        const response = await api.post("/api/auth/signup" , userData)
        return response.data
    }
    catch(err){
        throw err.response.data

    }
}

export const signIn = async (userData) => {
    try{
        const response = await api.post("/api/auth/signin" , userData)
        return response.data
    }
    catch(err){
        throw err.response.data

    }
}

export const getCurrentUser = async () => {
    try{
        const response = await api.get("/api/user/current")
        return response.data
    }
    catch(err){
        throw err.response.data

    }
}



