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
import NewButton from '../../../../../components/ui/Button/New';
import ListsButton from '../../../../../components/ui/Button/Lists';
import UnitDataGrid from '../../../../../components/HRM/Settings/Unit/DataGrid';

const DataGridPage=()=>{
    const history=useNavigate();
    const {pathname}=useLocation();
    return(
        <>
            <ComponentHeader>
                <NewButton
                onSubmit={()=>history('/hrm/settings/UnitInfo')}
                IsDisable={false}
                />
                <ListsButton
                IsDisable={pathname==="/hrm/settings/UnitInfo/lists"?true:false}
                onSubmit={()=>history('/hrm/settings/UnitInfo/lists')}
                //onClick={handleOnSave}
                />
            </ComponentHeader>
            <ContentContainer>
                <UnitDataGrid/>
            </ContentContainer>
        </>
    )
}

export default DataGridPage;