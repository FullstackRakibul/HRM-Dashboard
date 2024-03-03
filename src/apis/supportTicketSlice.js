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
  endpoints: (builder) => ({}),
});
export default supportTicketSlice;
