import configureAxios from "../../../utils/axios";
import axios from "axios";

export const getCompanyTree=async({UserId,UserLevelId})=>{
    configureAxios();
    const getTreeLists=await axios.get(`/adminDashboard/getTree?UserId=${UserId}&UserLevelId=${UserLevelId}`);

    return getTreeLists.data.data;
}

export const getAdminInfo=async({EmpCode})=>{
    configureAxios();
    const infos=await axios.get(`/adminDashboard/getAdminInfo?EmpCode=${EmpCode}`);

    return infos.data.data;
}

export const getAdminUnit=async({EmpCode})=>{
    configureAxios();
    const infos=await axios.get(`/adminDashboard/getAdminUnit?EmpCode=${EmpCode}`);

    return infos.data.data;
}