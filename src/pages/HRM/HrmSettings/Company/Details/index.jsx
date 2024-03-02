import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentHeader from '../../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../../components/ui/Container/ContentContainer';
import CompanyDetails from '../../../../../components/HRM/Settings/Company/Details';
import NewButton from '../../../../../components/ui/Button/New';
import ListsButton from '../../../../../components/ui/Button/Lists';

const DetailsPage=()=>{
    const history=useNavigate();
    return(
        <>
            <ComponentHeader>
                <NewButton
                handleOnClick={()=>history('/hrm/settings/CompanyInfo')}
                />
                <ListsButton
                handleOnClick={()=>history('/hrm/settings/CompanyInfo/lists')}
                //onClick={handleOnSave}
                />
            </ComponentHeader>
            <ContentContainer>
                <CompanyDetails/>
            </ContentContainer>
        </>
    )
}

export default DetailsPage;