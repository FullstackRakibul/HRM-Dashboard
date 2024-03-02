import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentHeader from '../../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../../components/ui/ContentContainer';
import NewButton from '../../../../../components/ui/Button/New';
import ListsButton from '../../../../../components/ui/Button/Lists';
import UnitDetails from '../../../../../components/HRM/Settings/Unit/Details';

const DetailsPage=()=>{
    const history=useNavigate();
    return(
        <>
            <ComponentHeader>
                <NewButton
                onSubmit={()=>history('/hrm/settings/UnitInfo')}
                />
                <ListsButton
                onSubmit={()=>history('/hrm/settings/UnitInfo/lists')}
                //onClick={handleOnSave}
                />
            </ComponentHeader>
            <ContentContainer>
                <UnitDetails/>
            </ContentContainer>
        </>
    )
}

export default DetailsPage;