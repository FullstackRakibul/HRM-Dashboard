import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const supportTicketSlice = createApi({
  reducerPath: "supportTicketSlice",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://localhost:7295/",
    prepareHeaders: (headers, { getState }) => {
      let token = localStorage.getItem("token");
      headers.set("Content-Type", "application/json; charset=utf-8");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    // Define your endpoints here
    getIssueBox: builder.query({
      query: (/* add any parameters here */) =>
        "/dashboard/Dashboards/IssueBox",
    }),
    // Add more endpoints as needed
  }),
});
export default supportTicketSlice;

// import { createApi } from "@reduxjs/toolkit/query/react";
// import axiosBaseQuery from "./axiosBaseQuery";

// export const useSupportTicketSliceQuery = createApi({
//   reducerPath: "supportTicketSlice",
//   baseQuery: axiosBaseQuery({
//     baseUrl: "https://localhost:7295/",
//     prepareHeaders: (headers, { getState }) => {
//       let token = localStorage.getItem("token");
//       headers.set("Content-Type", "application/json; charset=utf-8");
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: [],
//   endpoints: (builder) => ({}),
// });
// export default useSupportTicketSliceQuery;

import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://localhost:7295/",
  //baseURL: "https://localhost:44397/",
  //baseURL: "http://45.114.84.19:7500/",
});
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // Set default headers
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
