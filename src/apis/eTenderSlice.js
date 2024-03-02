import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const eTenderSlice = createApi({
  reducerPath: "eTenderSlice",
  baseQuery: axiosBaseQuery({
    //baseUrl:'http://192.168.61.40:3000/tms/api/v1',
    baseUrl: "http://202.22.203.92:3100/tms/api/v1",
    prepareHeaders: (headers, { getState }) => {
      let token = localStorage.getItem("token");
      headers.set("Content-Type", "application/json; charset=utf-8");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "getTenderLists",
    "getTenderListsForPublish",
    "getPublishLists",
    "getBiddingLists",
    "getBiddingDetailsLists",
    "getTenderGradeLists",
  ],
  endpoints: (builder) => ({}),
});
export default eTenderSlice;
