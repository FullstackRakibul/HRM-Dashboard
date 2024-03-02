import { apiSlice } from "../../api/apiSlice";
import configureAxios from "../../../utils/axios";
import axios from "axios";

export const hrmApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCompanyGrid: builder.query({
            query: ({skip,take,filter,orderBy}) =>({
                url:`/hrm/getCompnay?skip=${skip}&take=${take}&filter='${filter}'&orderBy='${orderBy}'`,
                method:'get'
            }),
            providesTags:['getCompanyGrid']
        }),
        getCompanyLists: builder.query({
            query: () =>({
                url:`/common/getAllCompany`,
                method:'get'
            }),
            providesTags:['getCompanyLists']
        }),
        getCompanyById:builder.query({
            query:(CompanyId)=>({
                url:`/hrm/getCompanyById?CompanyId=${CompanyId}`,
                method:'get',
                providesTags: (result, error, arg) => [
                    { type: "CompanyWithId", id: arg},
                ],
            })
        }),
        getZoneLists:builder.query({
            query:()=>({
                url:`/common/getAllZone`,
                method:'get'
            }),
            providesTags:["getAllZone"]
        }),
        createUpdateCompany:builder.mutation({
            query:({data})=>({
                url:`/hrm/createUpdateCompany`,
                method:'post',
                data
            }),
            invalidatesTags: (result, error, arg) => [
                "getCompanyGrid",
                "getCompanyLists",
                { type: "CompanyWithId", id: arg.CompanyId }
            ]
        }),
        deleteCompany:builder.mutation({
            query:({data})=>({
                url:`/hrm/deleteCompany`,
                method:'post',
                data
            }),
            invalidatesTags:['getCompanyGrid']
        }),
        getUnitDataGrid:builder.query({
            query:({skip,take,filter,orderBy})=>({
                url:`/hrm/getUnitGrid?skip=${skip}&take=${take}&filter='${filter}'&orderBy='${orderBy}'`,
                method:'get',
                providesTags:['getUnitDataGrid']
            })
        })
    }),
});

export const getUserLists=({UserId,SearchKey})=>{
    configureAxios();
    const userLists=axios.get(`/common/getUserLists?UserId=${UserId}&SearchKey=${SearchKey}`).then((response)=>{
        if(response.status===200 && response.data.IsSuccess){
            return response.data.data;
        }
    }).catch((error)=>{
        console.log("Get User List Error.");
        return [];
    })

    return userLists;
}

export const{
    useGetCompanyGridQuery,
    useGetCompanyListsQuery,
    useGetCompanyByIdQuery,
    useGetZoneListsQuery,
    useCreateUpdateCompanyMutation,
    useDeleteCompanyMutation,
    useGetUnitDataGridQuery
}=hrmApi