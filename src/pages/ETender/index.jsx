import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, Card, Button } from "antd";
import ModuleContainer from "../../components/ui/ModuleContainer";
import "./index.less";

const ETenderIndex = () => {
  const loaction = useLocation();
  const { pathname } = loaction;
  const { classLists } = useSelector((state) => state.ui);
  return (
    <div>
      {pathname === "/tender" ? (
        <Navigate replace to="/tender/tender/newTender" />
      ) : (
        ""
      )}
      <ModuleContainer>
        <Outlet />
      </ModuleContainer>
    </div>
  );
};

export default ETenderIndex;
