import { Navigate, Outlet, Route } from "react-router-dom";

const PrivateLayout = () => {
  //let token=localStorage.getItem("token");
  let token = true;
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateLayout;
