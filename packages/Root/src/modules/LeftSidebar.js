import React, { useEffect, } from "react";
import { mount } from "leftSideBar/leftSideBar";
import "./LeftSidebar.css";

const LeftSidebarModule = () =>
{
  useEffect(() =>
  {
    mount();
  }, []);

  return <div className="left-sidebar-module">asas</div>;
};

export default LeftSidebarModule;