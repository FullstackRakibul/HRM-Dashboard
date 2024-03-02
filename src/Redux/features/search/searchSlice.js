import { createSlice } from "@reduxjs/toolkit";


const initialState={
    commonSearch:{
        status:{},
        searchKey:"",
        selected:false,
        type:{},
        section:false,
        wing:false,
        team:false,
        sideTree:[]
    },
    userLists:[]
}

const searchSlice=createSlice({
    name:"searchSlice",
    initialState,
    reducers:{
        handleCommonSearchChange:(state,action)=>{
            const {name,value}=action.payload;

            state.commonSearch[name]=value;
        },
        resetCommonSearchChange:(state,action)=>{
            state.commonSearch={
                status:{},
                searchKey:"",
                selected:"",
                type:{},
                section:"",
                wing:"",
                team:"",
                sideTree:[]
            }
        },
        getUserLists:(state,action)=>{
            state.userLists=action.payload
        }
    }
});

export const {
    handleCommonSearchChange,
    resetCommonSearchChange,
    getUserLists
}=searchSlice.actions;

export default searchSlice.reducer;