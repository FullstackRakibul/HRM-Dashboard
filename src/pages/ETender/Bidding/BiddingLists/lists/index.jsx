import React from 'react';
import ComponentHeader from '../../../../../components/ui/ComponentHeader';
import ContentContainer from '../../../../../components/ui/ContentContainer';
import ResetButton from '../../../../../components/ui/Button/Reset';
import BiddingLists from '../../../../../components/ETender/Bidding/BiddingLists/lists';

const BiddingListsPage=()=>{
    return(
        <>
            <ComponentHeader
            title={"Bidding Lists"}
            description={"You can see all bidding lists with short info."}
            >
                <ResetButton
                onSubmit={()=>{
                    
                }}
                >
                    Reset
                </ResetButton>
            </ComponentHeader>
            <ContentContainer>
                <BiddingLists/>
            </ContentContainer>
        </>
    )
}
export default BiddingListsPage;