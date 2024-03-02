import { 
  Outlet,
  Navigate,
  useLocation 
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ModuleContainer from '../../components/ui/ModuleContainer';
  
  
  const AttendenceIndex = () => {
    const loaction=useLocation();
    const {pathname}=loaction;
    const {classLists}=useSelector((state)=>state.ui)
    return (
      <div>
        {pathname==="/attendence"?<Navigate replace to="/attendence/dashboard" />:""}
        <ModuleContainer>
          <Outlet/>
        </ModuleContainer>
      </div>
    );
  }
  
  export default AttendenceIndex;