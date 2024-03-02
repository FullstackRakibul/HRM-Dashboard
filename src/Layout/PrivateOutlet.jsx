import { Navigate, Outlet,Route } from "react-router-dom";

const PrivateLayout=()=>{
    let token=localStorage.getItem("token");
    return token?<Outlet />:<Navigate to="/login" replace />
}
export default PrivateLayout;