import userSlice from '../features/user/userSlice';
import commonSlice from '../features/common/commonSlice';
import uiSlice from '../features/UI'
import searchSlice from '../features/search/searchSlice';
import MenuSlice from '../features/menus';
import DashboardSlice from '../features/Dashboard'
import adminDashboardSlice from '../features/AdminDashboard/adminDashboardSlice';
import hrmSlice from '../features/HRM/hrmSlice';
import tabsSlice from '../features/tabs/tabsSlice';
import tenderSlice from '../features/tender/tenderSlice';
import tenderPublishSlice from '../features/publishTender/tenderPublishSlice';
import biddingSlice from '../features/bidding/biddingSlice';

const reducers={
    common:commonSlice,
    user:userSlice,
    tab:tabsSlice,
    ui:uiSlice,
    search:searchSlice,
    menu:MenuSlice,
    dashboard:DashboardSlice,
    admin:adminDashboardSlice,
    hrm:hrmSlice,
    tender:tenderSlice,
    publish:tenderPublishSlice,
    bidding:biddingSlice
}

export default reducers;