import eTenderSlice from "../../../apis/eTenderSlice";
import { 
    getBiddingLists,
    getBiddingDetailsLists
} from "./biddingSlice";

export const tenderBiddingApi = eTenderSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBiddingLists:builder.query({
            query: ({UserId,Take,Skip}) =>({
                url:`/getBiddingLists?UserId=${UserId}&Take=${Take}&Skip=${Skip}`,
                method:'get'
            }),
            async onQueryStarted(arg,{queryFulfilled,getState,dispatch}){
                const result=await queryFulfilled;
    
                const lists=result?.data?.data?.lists;
                if(lists.length){
                    dispatch(getBiddingLists(lists))
                }
            },
            providesTags:['getBiddingLists']
        }),
        getBiddingDetailsLists:builder.query({
            query: ({UserId,Take,Skip}) =>({
                url:`/getBiddingDetailsLists?UserId=${UserId}&Take=${Take}&Skip=${Skip}`,
                method:'get'
            }),
            async onQueryStarted(arg,{queryFulfilled,getState,dispatch}){
                const result=await queryFulfilled;
    
                const lists=result?.data?.data?.lists;
                const count=result?.data?.data?.count;
                if(lists.length){
                    dispatch(getBiddingDetailsLists({lists:lists,count:count}))
                }
            },
            providesTags:['getBiddingDetailsLists']
        })
    })
})

export const{
    useGetBiddingListsQuery,
    useGetBiddingDetailsListsQuery
}=tenderBiddingApi