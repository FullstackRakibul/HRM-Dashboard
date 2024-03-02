import eTenderSlice from "../../../apis/eTenderSlice";
import { 
    getTenderLists,
    getGradeLists
} from "./tenderSlice";

export const eTenderApi = eTenderSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTenderLists:builder.query({
            query: ({UserId,Take,Skip}) =>({
                url:`/getTenderLists?UserId=${UserId}&Take=${Take}&Skip=${Skip}`,
                method:'get'
            }),
            async onQueryStarted(arg,{queryFulfilled,getState,dispatch}){
              const result=await queryFulfilled;
    
              const listsData=result?.data?.data?.lists;
              const count=result?.data?.data.count;

              if(listsData && count){
                dispatch(getTenderLists({lists:listsData,count}))
              }
              //console.log("Dataaa",result)

            //   if(data.length){
            //     //dispatch(getProducts(data));
            //   }
            },
            providesTags:['getTenderLists']
        }),
        getTenderGradeLists:builder.query({
            query: () =>({
                url:`/getTenderGradeLists`,
                method:'get'
            }),
            async onQueryStarted(arg,{queryFulfilled,getState,dispatch}){
              const result=await queryFulfilled;
    
              const listsData=result?.data?.data?.lists;
              

              if(listsData){
                dispatch(getGradeLists(listsData))
              }
              //console.log("Dataaa",result)

            //   if(data.length){
            //     //dispatch(getProducts(data));
            //   }
            },
            providesTags:['getTenderGradeLists']
        }),
        createUpdateTender:builder.mutation({
            query:({data})=>({
                url:`/createNewTender`,
                method:'post',
                data
            }),
            invalidatesTags: (result, error, arg) => [
                "getTenderLists",
                "getTenderListsForPublish"
            ]
        }),
    })
})

export const{
    useGetTenderListsQuery,
    useCreateUpdateTenderMutation,
    useGetTenderGradeListsQuery
}=eTenderApi