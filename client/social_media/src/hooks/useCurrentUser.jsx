import React, { useEffect } from 'react'
import { getCurrentUser } from '../apiCalls/authCalls'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

export default function useCurrentUser() {

    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchuser = async()=>{
            try {
                 const user = await getCurrentUser()
                 dispatch(setUserData(user))

                
            } catch (error) {
                console.log(error)
                
            }
           
        }

        fetchuser()
    },[])
  
}
