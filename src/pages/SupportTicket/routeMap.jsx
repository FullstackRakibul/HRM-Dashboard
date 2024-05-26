import loadable from "@loadable/component";
import FormTest from "../TESTPAGES/FormTest";
import RaiseIssueViaMail from "./Mail/ComposeIssueMail";
//import ListMailTicket from "./ListMailTicket";

const SupportTicketDashboard = loadable(() =>
  import("./Ticket/Dashboard/index")
);
const CreateTicket = loadable(() => import("./Ticket/CreateTicket/index"));
const ListTickets = loadable(() => import("./Ticket/ListTicket/index"));
const CreateTicketType = loadable(() =>
  import("./Ticket/CreateTicketType/index")
);
const UserTicketAssignedList = loadable(() =>
  import("./Profile/UserTicketAssignedList/index")
);
const UserTicketRaisedList = loadable(() =>
  import("../../pages/SupportTicket/Profile/UserTicketRaisedList/index")
);
const ListMailTicket = loadable(() => import("./Mail/ListMailTicket"));
const UserDashboard = loadable(() => import("./Profile/UserDashboard/index"));
const ComposeIssueMail = loadable(() =>
  import("./Mail/ComposeIssueMail/index")
);
const UserDevAssets = loadable(() => import("./Profile/UserDevAssets/index"));

// apparel loadable
const ForceGeneralDuty = loadable(() =>
  import("./QuickSupport/Apparel/ForceGeneralDuty/index")
);
const ForceWeekOff = loadable(() =>
  import("./QuickSupport/Apparel/ForceWeekOff/index")
);
const SupportMonitoring = loadable(() =>
  import("./Ticket/SupportMonitoring/index")
);

// HRM roadable

const FinalSettlement = loadable(() =>
  import("./QuickSupport/HRM/FinalSettlement/index")
);

export default [
  {
    path: "/ticket/dashboard",
    component: <SupportTicketDashboard />,
  },
  {
    path: "/ticket/create",
    component: <CreateTicket />,
  },
  {
    path: "/ticket/type/create",
    component: <CreateTicketType />,
  },
  {
    path: "/ticket/listTicket",
    component: <ListTickets />,
  },
  {
    path: "/ticket/mail/listTicket",
    component: <ListMailTicket />,
  },
  {
    path: "/ticket/form/UploadFile",
    component: <FormTest />,
  },
  {
    path: "/ticket/assigned-ticket",
    component: <UserTicketAssignedList />,
  },
  {
    path: "/ticket/raised-ticket",
    component: <UserTicketRaisedList />,
  },
  {
    path: "/ticket/user-dashboard",
    component: <UserDashboard />,
  },
  {
    path: "/ticket/compose-issue-mail",
    component: <ComposeIssueMail />,
  },
  {
    path: "/ticket/dev-assets",
    component: <UserDevAssets />,
  },
  {
    path: "/ticket/supportMonitoring",
    component: <SupportMonitoring />,
  },
  {
    path: "/ticket/quickSupport/apparel/forceGeneralDuty",
    component: <ForceGeneralDuty />,
  },
  {
    path: "/ticket/quickSupport/apparel/forceWeekOff",
    component: <ForceWeekOff />,
  },
  {
    path: "/ticket/quickSupport/hrm/finalSettlement",
    component: <FinalSettlement />,
  },
];
