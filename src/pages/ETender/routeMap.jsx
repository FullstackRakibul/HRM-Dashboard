import loadable from "@loadable/component";

const NewTenderPage=loadable(()=>import('./Tender/NewTender/index'));
const TenderListsMain=loadable(()=>import('./Tender/TenderLists'));
const NewTenderPublishPage=loadable(()=>import('./Published/NewTenderPublish'));
const TenderPublishedListsPage=loadable(()=>import('./Published/TenderPublishLists'));
const BiddingListsPage=loadable(()=>import('./Bidding/BiddingLists/lists/index'));
const BiddingListsDetailsPage=loadable(()=>import('./Bidding/BiddingLists/Details/index'));
const BiddingDetailsListsPage=loadable(()=>import('./Bidding/BiddingDetailsLists/index'));




export default[
    {
        path:"/tender/tender/newTender",
        component:<NewTenderPage/>
    },
    {
        path:"/tender/tender/tenderLists",
        component:<TenderListsMain/>
    },
    {
        path:"/tender/publish/newTender",
        component:<NewTenderPublishPage/>
    },
    {
        path:"/tender/publish/tenderLists",
        component:<TenderPublishedListsPage/>
    },
    {
        path:"/tender/bidding/lists",
        component:<BiddingListsPage/>
    },
    {
        path:"/tender/bidding/lists/:TenderNo",
        component:<BiddingListsDetailsPage/>
    },
    {
        path:"/tender/bidding/detailsLists",
        component:<BiddingDetailsListsPage/>
    },
]
