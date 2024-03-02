import React from 'react';
import {
    Card
} from 'antd';
import { 
    useNavigate,
    useLocation
} from 'react-router-dom';
import ComponentHeader from '../../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../../components/ui/ContentContainer';
import CompanyDataGrid from '../../../../../components/HRM/Settings/Company/DataGrid';
import NewButton from '../../../../../components/ui/Button/New';
import ListsButton from '../../../../../components/ui/Button/Lists';
import './index.less'


const DataGridPage=()=>{
    const history=useNavigate();
    const {pathname}=useLocation();
    return(
        <>
            <ComponentHeader>
                <NewButton
                onSubmit={()=>history('/hrm/settings/CompanyInfo')}
                IsDisable={false}
                />
                <ListsButton
                IsDisable={pathname==="/hrm/settings/CompanyInfo/lists"?true:false}
                onSubmit={()=>history('/hrm/settings/CompanyInfo/lists')}
                //onClick={handleOnSave}
                />
            </ComponentHeader>
            <ContentContainer>
                <CompanyDataGrid/>
            </ContentContainer>
        </>
    )
}

export default DataGridPage;