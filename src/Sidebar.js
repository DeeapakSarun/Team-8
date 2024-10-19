import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import "./Sidebar.css";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <CDBSidebar className="sidebar-color">
        <CDBSidebarHeader
          className="sidebar-color"
          prefix={<i className="fa fa-bars" />}
        >
          Contents
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-color">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Home</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Content</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sitemap" iconType="solid">
            <Link to="/Taxonomy">Taxonomy</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="users" iconType="users">
            <Link to="/Team">Contributions</Link>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter
          className="sidebar-color"
          style={{ textAlign: "center" }}
        >
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            Team 8
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
