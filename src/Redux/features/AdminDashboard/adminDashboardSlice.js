import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { 
    getCompanyTree,
    getAdminInfo,
    getAdminUnit
 } from "./adminDashboardAPI";


const initialState={
    tree:[],
    isTreeLoading:false,
    isTreeError:false,
    isTreeErrorMsg:'',
    infos:{},
    isInfoLoading:false,
    isInfoError:false,
    isInfoErroMsg:'',
    adminUnit:{},
    isAdminUnitLoading:false,
    isAdminUnitError:false,
    isAdminUnitErrorMsg:''
}


export const companyTree=createAsyncThunk(
    'getCompanyTree',
    async({UserId,UserLevelId})=>{
        const treeLists=await getCompanyTree({UserId,UserLevelId});

        return treeLists;
    }
)
export const getAdminInfos=createAsyncThunk(
    'getAdminInfos',
    async({EmpCode})=>{
        const infos=await getAdminInfo({EmpCode});

        return infos;
    }
)

export const getAdminUnits=createAsyncThunk(
    'getAdminUnits',
    async({EmpCode})=>{
        const infos=await getAdminUnit({EmpCode});

        return infos;
    }
)

const adminDashboardSlice=createSlice({
    name:'adminDashboard',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(companyTree.pending,(state,action)=>{
            state.isTreeLoading=true;
            state.isTreeError=false;
            state.isTreeErrorMsg='';
            state.tree=[];
        })
        .addCase(companyTree.fulfilled,(state,action)=>{
            state.isTreeErrorMsg='';
            state.isTreeLoading=false;
            state.isTreeError=false;
            state.tree=action.payload;
        })
        .addCase(companyTree.rejected,(state,action)=>{
            state.isTreeErrorMsg='Get Company Tree Error';
            state.isTreeLoading=false;
            state.isTreeError=true;
            state.tree=[];
        });

        builder.addCase(getAdminInfos.pending,(state,action)=>{
            state.isInfoLoading=true;
            state.isInfoError=false;
            state.isInfoErroMsg='';
            state.infos=[];
        })
        .addCase(getAdminInfos.fulfilled,(state,action)=>{
            state.isInfoLoading=false;
            state.isInfoError=false;
            state.isInfoErroMsg='';
            state.infos=action.payload;
        })
        .addCase(getAdminInfos.rejected,(state,action)=>{
            state.isInfoLoading=false;
            state.isInfoError=true;
            state.isInfoErroMsg='Get Admin Info Error';
            state.infos=[];
        })

        builder.addCase(getAdminUnits.pending,(state,action)=>{
            state.isAdminUnitLoading=true;
            state.isAdminUnitError=false;
            state.isAdminUnitErrorMsg='';
            state.adminUnit=[];
        })
        .addCase(getAdminUnits.fulfilled,(state,action)=>{
            state.isAdminUnitLoading=false;
            state.isAdminUnitError=false;
            state.isAdminUnitErrorMsg='';
            state.adminUnit=action.payload;
        })
        .addCase(getAdminUnits.rejected,(state,action)=>{
            state.isAdminUnitLoading=false;
            state.isAdminUnitError=true;
            state.isAdminUnitErrorMsg='Get Admin Unit Error';
            state.adminUnit=[];
        })
    }
})

export default adminDashboardSlice.reducer;