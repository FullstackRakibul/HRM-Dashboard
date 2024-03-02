import { 
    createSlice 
} from "@reduxjs/toolkit";

const initialState={
    listsForPublish:[],
    publishLists:[],
    publishCount:0
}


const tenderPublishSlice=createSlice({
    name:'tenderPublishSlice',
    initialState,
    reducers:{
        getListsForPublish:(state,action)=>{
            state.listsForPublish=action.payload;
        },
        getPublishLists:(state,action)=>{
            state.publishLists=action.payload.lists;
            state.publishCount=action.payload.count
        }
    }
});

export const {
    getListsForPublish,
    getPublishLists
}=tenderPublishSlice.actions;

export default tenderPublishSlice.reducer;