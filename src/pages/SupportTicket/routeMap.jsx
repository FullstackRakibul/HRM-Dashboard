import loadable from "@loadable/component";

const SupportTicketDashboard = loadable(() => import("./Dashboard/index"));
const CreateTicket = loadable(() => import("./CreateTicket/index"));

export default [
  {
    path: "/ticket/dashboard",
    component: <SupportTicketDashboard />,
  },
  {
    path: "/ticket/create",
    component: <CreateTicket />,
  },
];
