import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import configAxios from '../../../utils/axios/index';

export const getMyLeaveStatus=createAsyncThunk(
    'dasboard/getMyLeaveStatus',
    async(quires)=>{
        //console.log("KK",quires.GetYear)
        configAxios();
        const leaveStatusData=axios.get(`/dashboard/getLeaveStatus?EmpId=`+quires.EmpId+`&GetYear=`+quires.GetYear).then((response)=>{
            if(response.status===200 && response.data.IsSuccess){
                return response.data.data
            }
        }).catch((error)=>{
            console.log("Get Dashboard My Leave Status Error .")
            return []
        })

        return leaveStatusData;
    }
)

export const getUserWeekOffLists=createAsyncThunk(
    'dasboard/getWeekOffLists',
    async(quires)=>{
        //console.log("KK",quires.GetYear)
        configAxios();
        const weekOffData=axios.get(`/dashboard/getWeekOff?EmpId=`+quires.EmpId).then((response)=>{
            if(response.status===200 && response.data.IsSuccess){
                return response.data.data
            }
        }).catch((error)=>{
            console.log("Get User Weekoff Calender Error .")
            return []
        })

        return weekOffData;
    }
)

export const getHolidayLists=createAsyncThunk(
    'dashboard/getHolidayLists',
    async(queries)=>{
        configAxios();
        const {EmpCode}=queries;
        const HolidayLists=axios.get(`dashboard/getHolidayLists?EmpCode=`+EmpCode).then((response)=>{
            if(response.status===200 && response.data.IsSuccess){
                return response.data.data;
            }
        }).catch((error)=>{
            console.log('Get Holiday Lists Error.')
            return []
        })

        return HolidayLists;
    }
)

export const getDailyAttendenceLists=createAsyncThunk(
    'dashboard/getDailyAttendencLists',
    async(queries)=>{
        configAxios();
        const {EmpId,TableName,StartDate,EndDate}=queries;
        const AttendenceLists=axios.get(`dashboard/getDailyAttendence?EmpId=`+EmpId+`&TableName=`+TableName+`&StartDate=`+StartDate+`&EndDate=`+EndDate).then((response)=>{
            if(response.status===200 && response.data.IsSuccess){
                return response.data.data;
            }
        }).catch((error)=>{
            console.log('Get Daily Attendence Error');
            return [];
        })

        return AttendenceLists;
    }
)


export const getDailyMovement=createAsyncThunk(
    'dashboard/getDailyMovement',
    async(queries)=>{
        configAxios();
        const {EmpId,StartDate,EndDate}=queries;
        const DailyMovement=axios.get(`dashboard/getDailyMovement?EmpId=`+EmpId+`&StartDate=`+StartDate+`&EndDate=`+EndDate).then((response)=>{
            if(response.status===200 && response.data.IsSuccess){
                return response.data.data;
            }
        }).catch((error)=>{
            console.log('Get Daily Movement Error.')
            return [];
        })

        return DailyMovement;
    }
)
