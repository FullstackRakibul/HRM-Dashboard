import React from "react";
import ComponentHeader from "../../../../../components/ui/ComponentHeader";
import ContentContainer from "../../../../../components/ui/ContentContainer";
import ComingSoon from "../../../../../components/SupportTicket/Global/ComingSoon";

const ForceWeekOff = () => {
  return (
    <>
      <ComponentHeader title={"Forcely weekoff setup"}></ComponentHeader>
      <ContentContainer>
        <ComingSoon />
      </ContentContainer>
    </>
  );
};

export default ForceWeekOff;
