import {configureStore} from '@reduxjs/toolkit'
import galleryReducer from '../store/features/gallerySlice'


export const store=configureStore({
    reducer:{
       gallery:galleryReducer 
    }
})

export default store;

//Added Redux toolkit