import {configureStore} from "@reduxjs/toolkit"
import userSlicereducer from './userSlice'

const store = configureStore({
    reducer: {
        user : userSlicereducer
    }
})

export default store;