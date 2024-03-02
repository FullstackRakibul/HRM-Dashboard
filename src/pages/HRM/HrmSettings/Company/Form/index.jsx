import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import ComponentHeader from '../../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../../components/ui/ContentContainer';
import CompanyForm from '../../../../../components/HRM/Settings/Company/Form';
import NewButton from '../../../../../components/ui/Button/New';
import ListsButton from '../../../../../components/ui/Button/Lists';

const FormPage=()=>{
    const history=useNavigate();
    const location = useLocation();
    const IsUpdate=location.state?.IsUpdate?location.state.IsUpdate:false
    const CompanyId=location.state?.CompanyId?location.state.CompanyId:false


    return(
        <>
            <ComponentHeader>
                <NewButton
                onSubmit={()=>history('/hrm/settings/CompanyInfo')}
                IsDisable={location.pathname==="/hrm/settings/CompanyInfo"?true:false}
                />
                <ListsButton
                onSubmit={()=>history('/hrm/settings/CompanyInfo/lists')}
                IsDisable={false}
                //onClick={handleOnSave}
                />
            </ComponentHeader>
            <ContentContainer>
                <CompanyForm IsUpdate={IsUpdate} CompanyId={CompanyId}/>
            </ContentContainer>
        </>
    )
}
export default FormPage;