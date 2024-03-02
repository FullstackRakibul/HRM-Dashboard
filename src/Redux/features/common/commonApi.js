import { apiSlice } from "../../api/apiSlice";
import { getUserTree } from "./commonSlice";

export const commonApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getCompanyTree:builder.query({
            query:({UserId,UserLevelId})=>({
              url:`/common/getCompanyTrere?UserId=${UserId}&UserLevelId=${UserLevelId}`,
              method:'get'
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                const result=await queryFulfilled;

                if(result?.data){
                    dispatch(getUserTree(result.data))
                }
            },
            providesTags:["commonCompanyTree"]
        }),
        getAllEmployeeStatus:builder.query({
            query:()=>({
                url:`/common/getAllEmployeeStatus`,
                method:`get`
            }),
            providesTags:["getAllEmpoloyeeStatus"]
        }),
        getAllEmployeeType:builder.query({
            query:()=>({
                url:`/common/getAllEmployeeType`,
                method:`get`
            }),
            providesTags:["getAllEmployeeType"]
        })
    })
})

export const {
    useGetCompanyTreeQuery,
    useGetAllEmployeeStatusQuery,
    useGetAllEmployeeTypeQuery
}=commonApi;