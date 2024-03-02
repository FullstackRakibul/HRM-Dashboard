import { createSlice } from "@reduxjs/toolkit";
import { 
    getMyLeaveStatus,
    getUserWeekOffLists,
    getDailyAttendenceLists,
    getDailyMovement,
    getHolidayLists
} from "./Async";


const initialState={
    leaveStatus:[],
    leaveStatusLoading:true,
    leaveStatusError:'',
    weekOffLists:[],
    weekOffLoading:true,
    weekOffError:'',
    dailyAttendence:[],
    dailyAttendenceLoading:true,
    dailyAttendenceError:'',
    holidayLists:[],
    holidayLoading:true,
    holidayError:'',
    dailyMovement:[],
    dailyMovementLoading:true,
    dailyMovementError:''
}

const DashboardSlice=createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        // For Get Leave Status
        builder.addCase(getMyLeaveStatus.pending,(state,action)=>{
            state.leaveStatusLoading=true;
            state.leaveStatusError='';
        });
        builder.addCase(getMyLeaveStatus.fulfilled,(state,action)=>{
            state.leaveStatus=action.payload;
            state.leaveStatusLoading=false;
            state.leaveStatusError='';
        });
        builder.addCase(getMyLeaveStatus.rejected,(state,action)=>{
            state.leaveStatusLoading=false;
            state.leaveStatus=[];
            state.leaveStatusError='Get My Leave Status Error.';
        });


        // For Get User Week Off Lists
        builder.addCase(getUserWeekOffLists.pending,(state,action)=>{
            state.weekOffLoading=true;
            state.weekOffError='';
        });
        builder.addCase(getUserWeekOffLists.fulfilled,(state,action)=>{
            state.weekOffLoading=false;
            state.weekOffLists=action.payload;
            state.weekOffError='';
        });
        builder.addCase(getUserWeekOffLists.rejected,(state,action)=>{
            state.weekOffLoading=false;
            state.weekOffLists=[];
            state.weekOffError='Get User WeekOff Lists Error.';
        });


        // For Get Daily Attendence Lists
        builder.addCase(getDailyAttendenceLists.pending,(state,action)=>{
            state.dailyAttendenceLoading=true;
            state.dailyAttendenceError='';
        });
        builder.addCase(getDailyAttendenceLists.fulfilled,(state,action)=>{
            state.dailyAttendenceLoading=false;
            state.dailyAttendence=action.payload;
            state.dailyAttendenceError='';
        });
        builder.addCase(getDailyAttendenceLists.rejected,(state,action)=>{
            state.dailyAttendenceLoading=false;
            state.dailyAttendence=[];
            state.dailyAttendenceError='Get User Daily Attendence Lists Error.';
        });


        // For Get User Daily Movement
        builder.addCase(getDailyMovement.pending,(state,action)=>{
            state.dailyMovementLoading=true;
            state.dailyMovementError='';
        });
        builder.addCase(getDailyMovement.fulfilled,(state,action)=>{
            state.dailyMovementLoading=false;
            state.dailyMovement=action.payload;
            state.dailyMovementError='';
        });
        builder.addCase(getDailyMovement.rejected,(state,action)=>{
            state.dailyMovementLoading=false;
            state.dailyMovement=[];
            state.dailyMovementError='Get User Daily Movement Error.';
        });

        // For Get Holiday Lists 
        builder.addCase(getHolidayLists.pending,(state,action)=>{
            state.holidayLoading=true;
            state.holidayError='';
        });
        builder.addCase(getHolidayLists.fulfilled,(state,action)=>{
            state.holidayLoading=false;
            state.holidayLists=action.payload;
            state.holidayError=''
        });
        builder.addCase(getHolidayLists.rejected,(state,action)=>{
            state.holidayError=false;
            state.holidayLists=[];
            state.holidayError='Get Holiday Lists Error.';
        });


    }
})

export default DashboardSlice.reducer;

