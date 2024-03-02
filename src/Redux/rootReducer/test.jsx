import { combineSlices } from '@reduxjs/toolkit'
import adminDashboardSlice from '../features/AdminDashboard/adminDashboardSlice';
import hrmSlice from '../features/HRM/hrmSlice';


const testReducers={
    admin:adminDashboardSlice,
    hrm:hrmSlice
}

export default testReducers;