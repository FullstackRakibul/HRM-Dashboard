import { 
    createSlice 
} from "@reduxjs/toolkit";

const initialState={
    biddingLists:[],
    biddingListsCount:0,
    biddingDetailsLists:[],
    biddingDetailsListsCount:0
}


const biddingSlice=createSlice({
    name:'tenderBiddingSlice',
    initialState,
    reducers:{
        getBiddingLists:(state,action)=>{
            state.biddingLists=action.payload;
        },
        getBiddingDetailsLists:(state,action)=>{
            const {lists,count}=action.payload;
            state.biddingDetailsLists=lists;
            state.biddingDetailsListsCount=count;
        }
    }
});

export const {
    getBiddingLists,
    getBiddingDetailsLists
}=biddingSlice.actions;

export default biddingSlice.reducer;