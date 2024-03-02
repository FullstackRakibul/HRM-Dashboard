import React from 'react';
import {
    Row,
    Col,
    Card,
    Divider
} from 'antd'
import { 
    useDispatch,
    useSelector
} from 'react-redux';
import { 
    addNewModuleName,
    getAllModuleMenu
} from '../../../Redux/features/menus';
import { 
    updateIsOpenModule 
} from '../../../Redux/features/UI';
import NormalCard from '../../../components/ui/Card/NormalCard';
import { 
    list2,
    lists1,
    tenderLists
} from '../TopBar/data';
import ModuleMainLogo from '../../../assets/images/erp-module-main-logo.png'
import DownIcons from '../../../assets/images/module_menu.png'
import CustomerImage from '../../../assets/images/Customerservice.png'
import HCM from '../../../assets/images/Hired.png'
import './index.less';

// const gridStyle = {
//     width: '30%',
//     margin:'2% 1.5%',
//     textAlign: 'center',
// };
const gridStyle = {
    width: '50px !important',
    margin:'0% .5%',
    textAlign: 'center',
};

const ModuleMain=()=>{
    const dispatch=useDispatch();
    const {
        isOpenModule,
        isVerticalModule
    }=useSelector((state)=>state.ui)
    const handleOnModuleChange=(id)=>{
        if(id==1){
            // dispatch(addNewModuleName("Employee Self Service"))
            // dispatch(getAllModuleMenu(lists1));
            dispatch(addNewModuleName("E-Tender Management"))
            dispatch(getAllModuleMenu(tenderLists));
            sessionStorage.setItem('MenuLists',JSON.stringify(tenderLists));
        }else if(id==2){
            dispatch(addNewModuleName("Human Capital Management"))
            dispatch(getAllModuleMenu(lists1));
            sessionStorage.setItem('MenuLists',JSON.stringify(lists1));
        }else if(id==3){
            dispatch(getAllModuleMenu([]));
            dispatch(addNewModuleName("Support Desk"))
        }else if(id==4){
            dispatch(getAllModuleMenu([]));
            dispatch(addNewModuleName("Industrial Engineering"))
        }else if(id==5){
            dispatch(getAllModuleMenu([]));
            dispatch(addNewModuleName("Production Planning & Control"))
        }
        setTimeout(()=>{
            dispatch(updateIsOpenModule(false))
        },100)
    }
    return(
        <>
            <NormalCard
            className={`${isVerticalModule && isOpenModule?
                'vertical-module-container-open module-container-modal':
                !isVerticalModule && isOpenModule?
                'horizontal-module-container-open module-container-modal':
                isVerticalModule && !isOpenModule?
                'vertical-module-container-close module-container-modal':
                'horizontal-module-container-close module-container-modal'
            }`}
            >
                <Card.Grid 
                style={gridStyle}
                onClick={()=>{
                    handleOnModuleChange(1)
                }}
                >
                    <img 
                    src={CustomerImage}
                    className="module-image"
                    />
                    <Divider className='separator'/>
                    <span className="module-description">E-Tender</span>
                </Card.Grid>
               
            </NormalCard>
        </>
    )
}
export default ModuleMain;