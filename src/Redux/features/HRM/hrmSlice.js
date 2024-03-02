import { 
    createSlice,
    createAsyncThunk 
} from "@reduxjs/toolkit";
import { getUserLists } from "./hrmAPI";

const initialState={
    userLists:[],
    userListsError:false,
    userListsLoading:false
}

export const getUserListsData=createAsyncThunk(
    'hrm/getUserLists',
    async({UserId,SearchKey})=>{
        console.log(SearchKey)
        const lists=getUserLists({UserId,SearchKey});

        return lists;
    }
)

const hrmSlice=createSlice({
    name:'hrm',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getUserListsData.pending,(state,action)=>{
            state.userListsLoading=true;
            state.userListsError=false;
            state.userLists=[]
        })
        .addCase(getUserListsData.fulfilled,(state,action)=>{
            state.userListsLoading=false;
            state.userLists=action.payload;
            state.userListsError=false;
        })
        .addCase(getUserListsData.rejected,(state,action)=>{
            state.userListsError=true;
            state.userListsLoading=false;
            state.getUserLists=[]
        })
    }
})

export default hrmSlice.reducer;