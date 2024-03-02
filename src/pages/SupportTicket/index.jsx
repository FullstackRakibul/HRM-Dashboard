import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, Card, Button } from "antd";
import ModuleContainer from "../../components/ui/ModuleContainer";

const TicketIndex = () => {
  const loaction = useLocation();
  const { pathname } = loaction;
  const { classLists } = useSelector((state) => state.ui);
  return (
    <div>
      {pathname === "/ticket" ? (
        <Navigate replace to="/ticket/dashboard" />
      ) : (
        ""
      )}
      <ModuleContainer>
        <Outlet />
      </ModuleContainer>
    </div>
  );
};

export default TicketIndex;
