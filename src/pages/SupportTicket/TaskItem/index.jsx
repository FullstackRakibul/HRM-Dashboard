import React from "react";
import ComponentHeader from "../../../components/ui/ComponentHeader";
import ContentContainer from "../../../components/ui/ContentContainer";
import TaskItemComponent from "../../../components/SupportTicket/TaskItemComponent";

const TaskItem = () => {
  return (
    <>
      <ComponentHeader title={"Create Task and Assign"}></ComponentHeader>
      <ContentContainer>
        <TaskItemComponent />
      </ContentContainer>
    </>
  );
};

export default TaskItem;
