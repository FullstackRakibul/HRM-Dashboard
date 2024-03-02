import loadable from "@loadable/component";

const AttendenceProcessPage=loadable(()=>import('./Attendence/AttendenceProcess/index'));

export default[
    {
        path:"attendence/attendenceProcess",
        component:<AttendenceProcessPage/>
    }
]