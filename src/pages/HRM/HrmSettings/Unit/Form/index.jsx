import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import ComponentHeader from '../../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../../components/ui/ContentContainer';
import UnitForm from '../../../../../components/HRM/Settings/Unit/Form';
import NewButton from '../../../../../components/ui/Button/New';
import ListsButton from '../../../../../components/ui/Button/Lists';

const FormPage=()=>{
    const history=useNavigate();
    const location = useLocation();
    const IsUpdate=location.state?.IsUpdate?location.state.IsUpdate:false
    const UnitId=location.state?.UnitId?location.state.UnitId:false


    return(
        <>
            <ComponentHeader>
                <NewButton
                onSubmit={()=>history('/hrm/settings/UnitInfo')}
                IsDisable={location.pathname==="/hrm/settings/UnitInfo"?true:false}
                />
                <ListsButton
                onSubmit={()=>history('/hrm/settings/UnitInfo/lists')}
                IsDisable={false}
                //onClick={handleOnSave}
                />
            </ComponentHeader>
            <ContentContainer>
                <UnitForm IsUpdate={IsUpdate} UnitId={UnitId}/>
            </ContentContainer>
        </>
    )
}
export default FormPage;