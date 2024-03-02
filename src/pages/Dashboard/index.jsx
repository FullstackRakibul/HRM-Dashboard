import { 
  Outlet,
  Navigate,
  useLocation 
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  Row,
  Col,
  Card,
  Button
} from 'antd';
import ModuleContainer from '../../components/ui/ModuleContainer';


const DashboardIndex = () => {
  const loaction=useLocation();
  const {
    pathname
  }=loaction;
  const {
    classLists
  }=useSelector((state)=>state.ui)
  return (
    <div>
      {pathname==="/dashboard"?<Navigate replace to="/dashboard/user" />:""}
      <ModuleContainer>
        <Outlet/>
      </ModuleContainer>
    </div>
  );
}

export default DashboardIndex;