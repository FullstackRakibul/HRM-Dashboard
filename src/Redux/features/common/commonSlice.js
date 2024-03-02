import { createSlice } from "@reduxjs/toolkit";

const initialState={
    companyTree:[]
}

const commonSlice=createSlice({
    name:'commonSlice',
    initialState,
    reducers:{
        getUserTree:(state,action)=>{
            state.companyTree=action.payload
        }
    }
})

export const {
    getUserTree
}=commonSlice.actions;
export default commonSlice.reducer;