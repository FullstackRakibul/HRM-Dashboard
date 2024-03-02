export const initialState={
    TenderNo:"",
    TenderDescription:"",
    TenderTitle:"",
    TenderTotalAmount:0,
    TenderBidAmount:0,
    TenderAttachment:null,
    children:[]
}

export const newTenderReducer=(state,action)=>{
    switch(action.type){
        case "INIT_BIND":
            const {
                TenderNo,
                TenderTitle,
                TenderDescription,
                TenderTotalAmount,
                TenderBidAmount,
                TenderAttachment,
                children
            }=action.data;
            return{
                ...state,
                TenderNo:TenderNo?TenderNo:'',
                TenderTitle:TenderTitle?TenderTitle:'',
                TenderDescription:TenderDescription?TenderDescription:'',
                TenderBidAmount:TenderBidAmount?TenderBidAmount:'',
                TenderTotalAmount:TenderTotalAmount?TenderTotalAmount:'',
                TenderAttachment:TenderAttachment?TenderAttachment:'',
                children:children.length?children:[]
            }
        case "ADD_NEW_CHILDREN":
            return{
                ...state,
                children:action.data
            }
        case "UPDATE_STATE":
            return{
                ...state
            }
        default:
            return state;
    }
}