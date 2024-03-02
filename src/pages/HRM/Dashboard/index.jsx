import React from 'react';
import {
    Row,
    Col,
    Button
} from 'antd';
import {
    SaveOutlined,
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
    ClearOutlined,
    FundViewOutlined,
    DownloadOutlined,
    PlusOutlined
} from '@ant-design/icons'
import { useSelector } from 'react-redux';
// import Dashboard from '../../components/Dashboard';
import HrmDashboardComponent from '../../../components/HRM/Dashboard';
import ComponentHeader from '../../../components/ui/ComponentHeader';
import ContentContainer from '../../../components/ui/ContentContainer';
import NewButton from '../../../components/ui/Button/New';
import SaveButton from '../../../components/ui/Button/Save';
import ResetButton from '../../../components/ui/Button/Reset';
import ReloadButton from '../../../components/ui/Button/Reload';
import DeleteButton from '../../../components/ui/Button/Delete';
import ViewButton from '../../../components/ui/Button/View';


const HrmDashboard=()=>{
    const {classLists}=useSelector((state)=>state.ui);
    return(
        <>
            <ComponentHeader>
                <NewButton
                onSubmit={()=>{}}
                >
                    New
                </NewButton>
                <SaveButton
                onSubmit={()=>{console.log("I'm Save Button.")}}
                >
                    Save
                </SaveButton>
                
                <DeleteButton
                onSubmit={()=>{}}
                >
                    Delete
                </DeleteButton>
                <ResetButton
                onSubmit={()=>{}}
                >
                    Reset
                </ResetButton>
                
                <ViewButton onSubmit={()=>{console.log("I'm View Button.")}}>
                    View
                </ViewButton>
                <ReloadButton onSubmit={()=>console.log("I'm Reload Button")}>
                    Reload
                </ReloadButton>
            </ComponentHeader>
            <ContentContainer>
                <HrmDashboardComponent/>
            </ContentContainer>
        </>
    )
}
export default HrmDashboard;