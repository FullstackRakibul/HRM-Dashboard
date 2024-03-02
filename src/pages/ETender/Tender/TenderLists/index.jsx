import { Row, Col, Button } from "antd";
import { useSelector } from "react-redux";
import ComponentHeader from "../../../../components/ui/ComponentHeader";
import ContentContainer from "../../../../components/ui/ContentContainer";
import TenderListMain from "../../../../components/ETender/Tender/TenderLists";
import { useEffect } from "react";

const TenderListsMain = () => {
  const { classLists } = useSelector((state) => state.ui);

  useEffect(() => {
    return () => {
      console.log("I'm Unmount...");
    };
  }, []);

  return (
    <>
      <ComponentHeader
        title={"Tender Lists"}
        description={"Here is tender lists."}
      >
        <Button
          size="small"
          className={`${
            classLists.globalResetButton ? classLists.globalResetButton : ""
          }`}
          icon={<i className="fas fa-window-restore"></i>}
        >
          Reset
        </Button>
      </ComponentHeader>
      <ContentContainer>
        <TenderListMain />
      </ContentContainer>
    </>
  );
};
export default TenderListsMain;
