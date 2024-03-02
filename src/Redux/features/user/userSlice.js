import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { 
    getTenderUserDetails
 } from "./userAPI";

export const getUserInfoWithId=createAsyncThunk(
    'user/getUserInfo',
    async({userId})=>{
        const infos=await getUserInfo(userId);

        return infos.data;
    }
)

const initialState={
    isLoading:false,
    isError:false,
    error:'',
    info:{}
}


const userInfoSlice=createSlice({
    name:'userInfo',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getUserInfoWithId.pending,(state,action)=>{
            state.isLoading=true;
            state.isError=false;
            state.info={}
        })
        .addCase(getUserInfoWithId.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.error='';
            state.info=action.payload
        })
        .addCase(getUserInfoWithId.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.error='Get User Info Error';
            state.info={}
        })
    }
})

export default userInfoSlice.reducer;
