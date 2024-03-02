/*
* Author: Asib Al Hasan
* Title: Get Module
* Description: Get Module By UserID
* Date: 07-09-2023
*/

import axios from "axios";
import configureAxios from "../axios";



export const getModuleLists=async(UserId)=>{
    let ModuleLists=[];
    configureAxios();

    //let UserId=localStorage.getItem("UserId");

    ModuleLists=axios.get('/getMenuAll?&UserId='+JSON.stringify(UserId))
    .then((response)=>{
        console.log(response)
        if(response.status===200 && response.data.IsSuccess){
            //ModuleLists=response.data.ModuleLists;
            return response.data.MenuLists;
            //sessionStorage.setItem("ModuleLists",JSON.stringify(ModuleLists));
        }
    }).catch((error)=>{
        console.log("Get All Module Menu & Submenu Error.")
        return [];
    })
    return ModuleLists;
}

export default getModuleLists;
