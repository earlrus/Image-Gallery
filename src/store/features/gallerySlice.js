import {createSlice} from '@reduxjs/toolkit'

const initialState={
    items:[]
}
const gallerySlice=createSlice({
    name:'gallery',
    initialState,
    reducers:{

        addGallery:(state,action)=>{
            const newItem=action.payload;
            state.items.push(newItem);
        },

        removeGallery:(state,action)=>{
            const Id=action.payload;

          state.items=state.items.filter((item)=>{
                return item.id!==Id
           })
        }

    }
})

export const {addGallery,removeGallery}=gallerySlice.actions;
export default gallerySlice.reducer;