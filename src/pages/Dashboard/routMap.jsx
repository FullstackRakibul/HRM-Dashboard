import loadable from "@loadable/component";

const MyDashboard=loadable(()=>import('./UserDashboard/index'));
const AdminDashboard=loadable(()=>import('./AdminDashboard/index'));
// const SetupStuck=loadable(()=>import('./Stuck/Form'));
// const StuckLists=loadable(()=>import('./Stuck/DataLists'));
// const AddNewBook=loadable(()=>import('./AddNewBook/Form'));
// const BookLists=loadable(()=>import('./AddNewBook/DataLists'));

export default[
    {
        path:'user',
        component:<MyDashboard/>
    },
    {
        path:'admin',
        component:<AdminDashboard/>
    },
    // {
    //     path:"setupStack",
    //     component:<SetupStuck/>
    // },
    // {
    //     path:"setupStack/lists",
    //     component:<StuckLists/>
    // },
    // {
    //     path:"addNewBook",
    //     component:<AddNewBook/>
    // },
    // {
    //     path:"addNewBook/lists",
    //     component:<BookLists/>
    // }
]
