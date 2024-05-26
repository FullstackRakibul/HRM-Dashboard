import React from "react";
import ContentContainer from "../../../ui/ContentContainer";
import ComponentHeader from "../../../ui/ComponentHeader";

const ComingSoon = () => {
  return (
    <>
      <ComponentHeader></ComponentHeader>
      <ContentContainer>
        <div className="flex items-center justify-center bg-gray-100">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Coming Soon
            </h1>
            <p className="text-lg text-gray-600">
              We're working hard to bring you something amazing. Stay tuned!
            </p>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default ComingSoon;
