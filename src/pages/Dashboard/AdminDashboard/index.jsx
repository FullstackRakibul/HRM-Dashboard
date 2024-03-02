import {
    Button,
    Row,
    Col
} from 'antd';
import { useSelector } from 'react-redux';
import AdminDashboard from "../../../components/Dashboard/AdminDashboard";
import ComponentHeader from '../../../components/ui/ComponentHeader';
import InnerContainer from '../../../components/ui/shared/innerContainer';

const AdminDashboardPage=()=>{
    const {classLists}=useSelector((state)=>state.ui);
    return(
        <>
            <ComponentHeader>
                <Button
                size='small'
                className={`${classLists.globalResetButton?classLists.globalResetButton:''}`}
                icon={<i className="fas fa-window-restore"></i>}
                >
                    Reset
                </Button>
            </ComponentHeader>
            <InnerContainer>
                <AdminDashboard/>
            </InnerContainer>
        </>
    )
}
export default AdminDashboardPage;