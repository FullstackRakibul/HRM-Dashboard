import axios from "axios";
import configureAxios from "../axios";



export const getMenuLists=async(ModuleId)=>{
    let menuLists=[];
    configureAxios();

    let UserId=localStorage.getItem("UserId");

    menuLists=axios.get('/getMenuLists?&UserId='+JSON.stringify(UserId)+'&ModuleId='+ModuleId)
    .then((response)=>{
        //console.log(response)
        if(response.status===200 && response.data.IsSuccess){
            return response.data.MenuLists;
            //sessionStorage.setItem("MenuLists",JSON.stringify(menuLists));
        }
    }).catch((error)=>{
        return []
    })
    return menuLists;
}

// export default menuLists;
