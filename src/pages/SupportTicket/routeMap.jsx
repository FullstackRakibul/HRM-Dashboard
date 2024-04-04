import loadable from "@loadable/component";
import FormTest from "../TESTPAGES/FormTest";
//import ListMailTicket from "./ListMailTicket";

const SupportTicketDashboard = loadable(() => import("./Dashboard/index"));
const CreateTicket = loadable(() => import("./CreateTicket/index"));
const ListTickets = loadable(() => import("./ListTicket/index"));
const CreateTicketType = loadable(() => import("./CreateTicketType/index"));
const MyTicketList = loadable(() => import("./ListTicket/MyTicketList"));
const ListMailTicket = loadable(() => import("./ListMailTicket"));

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
    path: "/ticket/myticket",
    component: <MyTicketList />,
  },
];
