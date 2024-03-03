import loadable from "@loadable/component";

const SupportTicketDashboard = loadable(() => import("./Dashboard/index"));
const CreateTicket = loadable(() => import("./CreateTicket/index"));
const ListTickets = loadable(() => import("./ListTicket/index"));

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
    path: "/ticket/listTicket",
    component: <ListTickets />,
  },
];
