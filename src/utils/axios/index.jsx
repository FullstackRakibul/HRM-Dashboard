import axios from "axios";
import { Navigate, useNavigate, Outlet } from "react-router-dom";

const ConfigureAxios = () => {
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.baseURL = "https://localhost:7295/";
  //axios.defaults.baseURL = "http://202.22.203.92:3100/tms/api/v1";

  let token = localStorage.getItem("token");

  if (token) {
    setAuthToken(token);
  } else {
    localStorage.clear();
    return <Navigate to="/" replace />;
  }
};

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const setAuthToken = (token) => {
  // if (token) {
  //   axios.defaults.headers.common["Authorization"] =
  //     "Bearer " + JSON.parse(token);
  // } else {
  //   axios.defaults.headers.common["Authorization"] = "";
  // }
};

// login baseurl : http://45.114.84.19:8033/
// API baseurl : https://localhost:7295/
export const AxiosInstance = axios.create({
  baseURL: "https://localhost:7295/",
  //baseURL: "http://45.114.84.19:7500/",
});

export default ConfigureAxios;
