import {configureStore} from "@reduxjs/toolkit"
import userSlicereducer from './userSlice'
import postSlicereducer from './postSlice'
import storySlicereducer from './storySlice'
 

const store = configureStore({
    reducer: {
        user : userSlicereducer,
        post : postSlicereducer,
         story: storySlicereducer,
    }
})

export default store;