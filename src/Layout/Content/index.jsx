import React, { createRef } from "react";
import { Button, Layout, Menu, theme, BackTop } from "antd";
import { useSelector } from "react-redux";
import { UpOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import routeMap from "../../config/routeMap";
import DashboardIndex from "../../pages/Dashboard";
import DashboardRoutMap from "../../pages/Dashboard/routMap";
import AttendenceIndex from "../../pages/Attendence";
import AttendenceRouteMap from "../../pages/Attendence/routeMap";
import ETenderIndex from "../../pages/ETender";
import ETenderRouteMap from "../../pages/ETender/routeMap";
import TicketIndex from "../../pages/SupportTicket";
import TicketRouteMap from "../../pages/SupportTicket/routeMap";

import NotFound from "../../pages/404";
import "./index.less";

const { Content } = Layout;

const ContentMain = ({ colorBgContainer, collapsed }) => {
  const location = useLocation();
  const { isSidebar } = useSelector((state) => state.ui);
  const roles = localStorage.getItem("role");
  //const filterRoute=routeMap.filter((route)=>route.roles.includes(roles))
  return (
    <>
      {/* <SwitchTransition>
                <CSSTransition
                key={location.pathname}
                // nodeRef={nodeRef}
                timeout={300}
                classNames="page"
                //unmountOnExit
                > */}
      <Content
        className={`${
          isSidebar
            ? collapsed
              ? "collapsed-content fixed-content"
              : "expand-content fixed-content"
            : "hide-content fixed-content"
        }`}
        style={{
          margin: "127px 0px 0px 0px",
          // overflow:'hidden',
          // position:'absolute',
          minHeight: 280,
          padding: "0px 0px 0px 0px",
          zIndex: "2",
        }}
      >
        <Routes>
          <Route path="/dashboard" element={<DashboardIndex />}>
            {DashboardRoutMap.map((data, i) => {
              return (
                <Route
                  key={data.path}
                  path={data.path}
                  element={data.component}
                />
              );
            })}
          </Route>

          <Route path="/attendence" element={<AttendenceIndex />}>
            {AttendenceRouteMap.map((data, i) => {
              return (
                <Route
                  key={data.path}
                  path={data.path}
                  element={data.component}
                />
              );
            })}
          </Route>

          <Route path="/tender" element={<ETenderIndex />}>
            {ETenderRouteMap.map((data, i) => {
              return (
                <Route
                  key={data.path}
                  path={data.path}
                  element={data.component}
                />
              );
            })}
          </Route>
          <Route path="/ticket" element={<TicketIndex />}>
            {TicketRouteMap.map((data, i) => {
              return (
                <Route
                  key={data.path}
                  path={data.path}
                  element={data.component}
                />
              );
            })}
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Content>
      {/* </CSSTransition>
            </SwitchTransition> */}
    </>
  );
};
export default ContentMain;
