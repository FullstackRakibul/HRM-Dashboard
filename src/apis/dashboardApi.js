import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import axiosBaseQuery from "./axiosBaseQuery";

export const dashboardApiSlice=createApi({
    reducerPath:'dashboardApi',
    baseQuery:axiosBaseQuery({
      //baseUrl:'http://localhost:5084/api',
      baseUrl:'http://202.22.203.92:3100/api',
      prepareHeaders:(headers,{getState})=>{
        let token = localStorage.getItem("token");
        headers.set("Content-Type", "application/json; charset=utf-8");
        if(token){
          headers.set('Authorization', `Bearer ${token}`) 
        }
        return headers;
      },
    }),
    tagTypes: [
      "getCuponLists",
    ],
    endpoints:(builder)=>({
      getCuponLists:builder.query({
        query:()=>({url:`/Coupon`,method:'get'}),
        //keepUnusedDataFor: 10,
        async onQueryStarted(arg,{queryFulfilled,getState,dispatch}){
            const result=await queryFulfilled;
  
            //console.log(result)
        },
        providesTags:["getCuponLists"]
      }),
    })
});

export const {
    useGetCuponListsQuery,
}=dashboardApiSlice;