import loadable from "@loadable/component";
const Dashboard = loadable(() => import("./Dashboard/index"));
export default [
  {
    path: "/ticket/dashboard",
    component: <Dashboard />,
  },
];
