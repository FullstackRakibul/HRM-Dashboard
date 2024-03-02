import axios from "axios";
import { 
    createAsyncThunk 
} from "@reduxjs/toolkit";
import ConfigureAxios from '../../../utils/axios';


export const getTenderUserDetails=createAsyncThunk(
    'approval/getChallanLists',
    async(quires)=>{
        const {
            CompanyEmail,
            TenderUserId
        }=quires;

        const myObj={
            CompanyEmail:CompanyEmail,
            TenderUserId:TenderUserId
        }
        //console.log("Objj",myObj)
        ConfigureAxios();
        const datas=await axios.post(`/getTenderUserDetails`,myObj).then((response)=>{
            //console.log("Res",response.data)
            const info=response.data?.data[0]?.length?response.data?.data[0]:{};
            return info;
        }).catch((error)=>{
            console.log("get user details error.")
            return {};
        })
        return datas;
    }
)