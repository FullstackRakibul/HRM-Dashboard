import { 
    createSlice 
} from "@reduxjs/toolkit";

const initialState={
    items:[
        {
            MenuPermissionId: '79494',
            key: 83,
            MenuName: 'Home',
            MenuPath: 'dashboard/user',
            SortOrder: 10,
            ModuleId: 3
        }
    ]
}


const tabsSlice=createSlice({
    name:'tabSlice',
    initialState,
    reducers:{
        addItems:(state,action)=>{
            let isInsert=false;
            let data=action.payload;
            if(state.items.length){
                state.items.map((d)=>{
                    if(d.MenuPath==data.MenuPath){
                        isInsert=true;
                        return;
                    }
                })
            }
            if(!isInsert){
                state.items=[...state.items,action.payload]
            }
        },
        removeItems:(state,action)=>{
            state.items=action.payload
        }
    }
});

export const {
    addItems,
    removeItems
}=tabsSlice.actions;

export default tabsSlice.reducer;