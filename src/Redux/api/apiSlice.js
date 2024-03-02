import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";


const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }


export const apiSlice=createApi({
    reducerPath:'api',
    baseQuery:axiosBaseQuery({
      baseUrl:'http://localhost:4026/hrm/api/v1',
      prepareHeaders:(headers,{getState})=>{
        let token = localStorage.getItem("token");
        headers.set("Content-Type", "application/json; charset=utf-8");
        // console.log(token)

        if(token){
          headers.set('Authorization', `Bearer ${token}`)
            
        }

        return headers;
      },
    }),
    tagTypes: [
      "commonCompanyTree",
      "getAllEmpoloyeeStatus",
      "getAllEmployeeType",
      "userLists",
      "getCompanyGrid",
      "getCompanyLists",
      "getAllZone",
      "getUnitDataGrid"
    ],
    endpoints:(builder)=>({
      getUserLists:builder.query({
        query:({UserId,SearchKey})=>({url:`/common/getUserLists?UserId=${UserId}&SearchKey=${SearchKey}`,method:'get'}),
        keepUnusedDataFor: 10,
        providesTags:["userLists"]
      }),
      // getCompanyTree:builder.query({
      //   query:({UserId,UserLevelId})=>({
      //     url:`/adminDashboard/getTree?UserId=${UserId}&UserLevelId=${UserLevelId}`,
      //     method:'get'
      //   }),
      //   providesTags:["companyTree"]
      // }),
      addUpdateUserMode:builder.mutation({
        query:({data})=>({
          url:`/hrm/createUpdateMode`,
          method:'post',
          data
        }),
        invalidatesTags: ["userLists"],
      })
    })
});

export const {
  useGetUserListsQuery,
  //useGetCompanyTreeQuery,
  useAddUpdateUserModeMutation
}=apiSlice;