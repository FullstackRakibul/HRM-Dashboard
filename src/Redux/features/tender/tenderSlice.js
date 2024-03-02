import { 
    createSlice 
} from "@reduxjs/toolkit";

const initialState={
    tenderId:"",
    tenderLists:[],
    tenderListCount:0,
    gradeLists:[],
    tenderNo:"",
    tenderTitle:"",
    tenderAttach:[{}],
    tenderAttachment:"",
    tenderMinimumBid:0,
    tenderTotalAmount:0,
    tenderDescription:"",
    tenderTotalQuantity:0,
    prevItemLists:[],
    children:[
        {
            Itemid:0,
            ItemName:"",
            ItemNameError:false,
            ItemDetails:"",
            ItemRemarks:'',
            ItemRemarksError:false,
            ItemGrade:{},
            ItemGradeError:false,
            UnitOfMeasurement:"",
            UnitOfMeasurementError:false,
            BasePrice:0,
            TargetPrice:0,
            TargetPriceError:false,
            BasePriceError:0,
            MinimumBidPrice:0,
            ItemQuantity:0,
            ItemQuantityError:false,
            ItemTotal:0,
            ItemTotalError:false,
            LastBidDate:""
        }
    ]
}


const tenderSlice=createSlice({
    name:'tenderSlice',
    initialState,
    reducers:{
        getTenderLists:(state,action)=>{
            state.tenderLists=action.payload.lists;
            state.tenderListCount=action.payload.count
        },
        getGradeLists:(state,action)=>{
            state.gradeLists=action.payload
        },
        setChildrenLists:(state,action)=>{
            state.children=action.payload;
        },
        updateChildren:(state,action)=>{
            //console.log("Pay :",action.payload)
            state.children=action.payload
        },
        updateTotalAmount:(state,action)=>{
            state.tenderTotalAmount=action.payload
        },
        updateTotalQuantity:(state,action)=>{
            state.tenderTotalQuantity=action.payload
        },
        updateTender:(state,action)=>{
            const {name,values}=action.payload;
            state[name]=values;
        },
        updateTenderAll:(state,action)=>{
            const {topInfo,children}=action.payload;
            //alert('Called')
            state.tenderId=topInfo.TenderId;
            state.tenderNo=topInfo.TenderNo;
            state.tenderTitle=topInfo.TenderTitle;
            state.tenderDescription=topInfo.TenderDescription;
            state.tenderMinimumBid=topInfo.TenderMinimumBid;
            state.tenderTotalQuantity=topInfo.TenderTotalQuantity;
            state.tenderTotalAmount=topInfo.TenderTotalAmount;
            state.tenderAttachment=topInfo.TenderAttachment;
            state.children=children;
        },
        updatePrevItemLists:(state,action)=>{
            state.prevItemLists=action.payload
        },
        updateValueWithOnChange:(state,action)=>{
            const {name,index,values,type}=action.payload;
            const myLists=[...state.children];
            if(type=="auto_complete"){
                myLists[index][name]=values;
            }
            else if(type=="number"){
                myLists[index][name]=values
                if(name=="TargetPrice"){
                    let checkquantity=myLists[index].ItemQuantity;
                    if(values>0 && checkquantity>0){
                        myLists[index].ItemTotal=parseFloat((parseFloat(values)*parseInt(checkquantity))).toFixed(2);
                        myLists[index].ItemTotalError=false;
                        myLists[index].TargetPriceError=false;
                    }
                }
                if(name=="ItemQuantity"){
                    let BasePrice=myLists[index].TargetPrice;
                    const totalQuantity=myLists.reduce((accum,current)=>{return accum+current.ItemQuantity},0)
                    state.tenderTotalQuantity=totalQuantity;
                    if(values>0 && BasePrice>0){
                        myLists[index].ItemTotal=parseFloat((parseFloat(values)*parseInt(BasePrice))).toFixed(2);
                        myLists[index].ItemTotalError=false;
                        myLists[index].ItemQuantityError=false;
                    }
                }
            }else if(type=="select"){
                myLists[index][name]=values
                myLists[index].ItemGradeError=false;
            }else{
                myLists[index][name]=values
                if(name=="ItemRemarks"){
                    myLists[index].ItemRemarksError=false;
                }
            }

            if(myLists[index].ItemName==""){
                myLists[index].ItemNameError=true;
            }else{
                myLists[index].ItemNameError=false;
            }
            if(myLists[index].ItemRemarks==""){
                myLists[index].ItemRemarksError=true;
            }else{
                myLists[index].ItemRemarksError=false;
            }
            if(myLists[index].ItemGrade.values==""){
                myLists[index].ItemGradeError=true;
            }else{
                myLists[index].ItemGradeError=false;
            }
            if(myLists[index].UnitOfMeasurement==""){
                myLists[index].UnitOfMeasurementError=true;
            }else{
                myLists[index].UnitOfMeasurementError=false;
            }
            // if(myLists[index].BasePrice==""){
            //     myLists[index].BasePriceError=true;
            // }else{
            //     myLists[index].BasePriceError=false;
            // }
            if(myLists[index].TargetPrice==""){
                myLists[index].TargetPriceError=true;
            }else{
                myLists[index].TargetPriceError=false;
            }
            if(myLists[index].ItemQuantity==""){
                myLists[index].ItemQuantityError=true;
            }else{
                myLists[index].ItemQuantityError=false;
            }
            if(myLists[index].ItemTotal==""){
                myLists[index].ItemTotalError=true;
            }else{
                myLists[index].ItemTotalError=false;
            }

            try{
                const totalAmount=myLists.reduce((accum,current)=>{return accum+(current.ItemQuantity*current.TargetPrice)},0);

                state.tenderTotalAmount=totalAmount;
                state.tenderMinimumBid=totalAmount;
            }catch{}
        },
        updateChildrenWithItemSelect:(state,action)=>{
            const {lists,index}=action.payload;
          
            const newLists=[...state.children]
            if(lists?.length){
                newLists[index].BasePrice=lists[0].BidPrice;
                newLists[index].BasePriceError=false;
                newLists[index].LastBidDate=lists[0].CreatedAt;
                state.children=newLists;
            }
        },
        addNewItems:(state,action)=>{
            let newLists=[...state.children];
            const Obj={
                Itemid:0,
                ItemName:"",
                ItemNameError:false,
                ItemDetails:"",
                ItemDetailsError:false,
                ItemGrade:{},
                ItemGradeError:false,
                UnitOfMeasurement:"",
                UnitOfMeasurementError:false,
                BasePrice:0,
                TargetPrice:0,
                TargetPriceError:false,
                BasePriceError:0,
                MinimumBidPrice:0,
                ItemQuantity:0,
                ItemQuantityError:false,
                ItemTotal:0,
                ItemTotalError:false,
                LastBidDate:""
            }
            newLists=[...newLists,Obj];

            state.children=newLists;
        },
        removeTenderItem:(state,action)=>{
            let myLists=[...state.children];
            const {index}=action.payload;
            if(myLists.length && myLists.length>1){
                myLists.splice(index,1);
                state.children=myLists;
                //dispatch(updateChildren(myLists))
                try{
                    const totalQuantity=myLists.reduce((accum,current)=>{return accum+current.ItemQuantity},0)
                    const totalAmount=myLists.reduce((accum,current)=>{return accum+(current.ItemQuantity*current.TargetPrice)},0)
                    state.tenderTotalAmount=totalAmount;
                    state.tenderMinimumBid=totalAmount;
                    state.tenderTotalQuantity=totalQuantity;
                }catch{}
            }
        },
        resetTender:(state,action)=>{
            state.tenderNo=""
            state.tenderTitle=""
            state.tenderAttach=""
            state.tenderMinimumBid=0
            state.tenderTotalAmount=0
            state.tenderDescription=""
            state.tenderTotalQuantity=0
            state.children=[{
                Itemid:0,
                ItemName:"",
                ItemDetails:"",
                ItemGrade:{},
                UnitOfMeasurement:"",
                BasePrice:0,
                TargetPrice:0,
                TargetPriceError:false,
                MinimumBidPrice:0,
                ItemQuantity:0,
                ItemTotal:0,
                LastBidDate:""
            }]
        }
    }
});

export const {
    getTenderLists,
    getGradeLists,
    setChildrenLists,
    updateTotalAmount,
    updatePrevItemLists,
    updateChildren,
    updateTotalQuantity,
    updateValueWithOnChange,
    resetTender,
    addNewItems,
    updateTender,
    updateTenderAll,
    updateChildrenWithItemSelect,
    removeTenderItem
}=tenderSlice.actions;

export default tenderSlice.reducer;