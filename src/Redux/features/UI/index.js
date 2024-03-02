import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tags:[],
    isSidebar:true,
    isOpenModule:false,
    isVerticalModule:false,
    classLists:{
        background:"light-bg",
        card:"light-card",
        bodyFont:"light-font-color",
        globalButton:'global-module-button',
        globalNewButton:'global-new-button',
        globalListsButton:'global-lists-button',
        globalResetButton:'global-reset-button',
        globalSaveButton:'global-save-button',
        globalReloadButton:'global-reload-button',
        globalViewButton:'global-view-button',
        globalDeleteButton:'global-delete-button',
        button:'light-button',
        datePicker:'light-date-picker',
        table:"light-table",
        evenTableRow:"light-table-even-row",
        dashboardInnerCardContainer:"dashboard-card-inner-container",
        bodyMediumTitle:"body-medium-header-title",
        bodyLightFont:'global-body-font-light',
        bodyBoldFont:'global-body-font-bold',
        globalModuleHeader:'global-module-header'
    }
}

const uiSlice=createSlice({
    name:'UI',
    initialState,
    reducers:{
        addTags:(state,action)=>{
            state.tags=[...state.tags,action.payload]
        },
        deleteTags:(state,action)=>{
            state.tags=state.tags.filter((tData)=>{
                if(tData.id===action.payload.id){
                    return false;
                }
            })
        },
        handleSidebar:(state,action)=>{
            state.isSidebar=!state.isSidebar;
        },
        updateIsOpenModule:(state,action)=>{
            state.isOpenModule=action.payload
        },
        updateVerticalModule:(state,action)=>{
            state.isVerticalModule=action.payload
        }
    }
});

export const {
    addTags,
    deleteTags,
    handleSidebar,
    updateIsOpenModule,
    updateVerticalModule
}=uiSlice.actions;
export default uiSlice.reducer;