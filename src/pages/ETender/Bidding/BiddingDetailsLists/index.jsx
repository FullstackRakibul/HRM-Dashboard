import React from 'react';
import ComponentHeader from '../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../components/ui/ContentContainer';
import ResetButton from '../../../../components/ui/Button/Reset';
import BiddingDetailsLists from '../../../../components/ETender/Bidding/BiddingDetailsLists';

const BiddingDetailsListsPage=()=>{
    return(
        <>
            <ComponentHeader
            title={"Details Lists"}
            description={"You can see all bidding and details lists with short info."}
            >
                <ResetButton
                onSubmit={()=>{
                    
                }}
                >
                    Reset
                </ResetButton>
            </ComponentHeader>
            <ContentContainer>
                <BiddingDetailsLists/>
            </ContentContainer>
        </>
    )
}
export default BiddingDetailsListsPage;