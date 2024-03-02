import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducers from "./rootReducer";
import { apiSlice } from "./api/apiSlice";
import { 
    dashboardApiSlice 
} from "../apis/dashboardApi";
import eTenderSlice from "../apis/eTenderSlice";

const Store=configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        [dashboardApiSlice.reducerPath]:dashboardApiSlice.reducer,
        [eTenderSlice.reducerPath]:eTenderSlice.reducer,
        ...reducers,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(logger,apiSlice.middleware)
        .concat(dashboardApiSlice.middleware)
        .concat(eTenderSlice.middleware)
    }
})

export default Store;