import eTenderSlice from "../../../apis/eTenderSlice";
import { 
    getListsForPublish,
    getPublishLists 
} from "./tenderPublishSlice";

export const tenderPublishApi = eTenderSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTenderListsForPublish:builder.query({
            query: ({UserId}) =>({
                url:`/getTenderListsForPublish?UserId=${UserId}`,
                method:'get'
            }),
            async onQueryStarted(arg,{queryFulfilled,getState,dispatch}){
                const result=await queryFulfilled;
    
                const lists=result?.data?.data?.lists;
                if(lists.length){
                    dispatch(getListsForPublish(lists))
                }
            },
            providesTags:['getTenderListsForPublish']
        }),
        createUpdatePublishTender:builder.mutation({
            query:({data})=>({
                url:`/addNewTenderPublish`,
                method:'post',
                data
            }),
            invalidatesTags: (result, error, arg) => [
                "getPublishLists",
                "getTenderListsForPublish",
                "getTenderLists"
            ]
        }),
        getPublishLists:builder.query({
            query: ({UserId,Take,Skip}) =>({
                url:`/publishTenderLists?UserId=${UserId}&Take=${Take}&Skip=${Skip}`,
                method:'get'
            }),
            async onQueryStarted(arg,{queryFulfilled,getState,dispatch}){
                const result=await queryFulfilled;
    
                const lists=result?.data?.data?.lists;
                const count=result?.data?.data.count
                if(lists.length){
                    dispatch(getPublishLists({
                        lists:lists,
                        count:count
                    }))
                }
            },
            providesTags:['getPublishLists']
        }),
    })
})

export const{
    useGetTenderListsForPublishQuery,
    useCreateUpdatePublishTenderMutation,
    useGetPublishListsQuery
}=tenderPublishApi