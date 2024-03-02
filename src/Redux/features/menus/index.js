import { createSlice } from "@reduxjs/toolkit";

const initialState={
    all:[],
    menus:[],
    moduleName:""
}

const MenuSlice=createSlice({
    name:'MenuSlice',
    initialState,
    reducers:{
        getAllModuleMenu:(state,action)=>{
            state.all=action.payload
        },
        getMenuWithModuleId:(state,action)=>{
            state.menus=action.payload
        },
        addNewModuleName:(state,action)=>{
            state.moduleName=action.payload
        }
    }
})


export const {
    getAllModuleMenu,
    getMenuWithModuleId,
    addNewModuleName
}=MenuSlice.actions;

export default MenuSlice.reducer;