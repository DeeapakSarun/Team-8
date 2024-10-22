import React, { useState } from "react";
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
  const [collapsed, setCollapsed] = useState(false); // Set default to true

  const toggleSidebar = () => {
    setCollapsed(!collapsed); // Corrected toggle function
  };

  return (
    <div
      className={`sidebar-main ${collapsed ? "collapsed" : ""}`}
      style={{ width: collapsed ? "100px" : "50px" }}
    >
      <CDBSidebar className="sidebar-color fixed-sidebar">
        <CDBSidebarHeader
          className="sidebar-color"
          prefix={
            <i
              className="fa fa-bars"
              onClick={toggleSidebar}
              style={{ cursor: "pointer" }}
            />
          }
        >
          {!collapsed && <span>Contents</span>}
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-color">
          <CDBSidebarMenu>
            <Link to="/">
              <CDBSidebarMenuItem icon="fas fa-home">Home</CDBSidebarMenuItem>
            </Link>
            <Link to="/Content">
              <CDBSidebarMenuItem icon="sticky-note">Content</CDBSidebarMenuItem>
            </Link>
            <Link to="/Taxonomy">
              <CDBSidebarMenuItem icon="sitemap">Taxonomy</CDBSidebarMenuItem>
            </Link>
            <Link to="/Team">
              <CDBSidebarMenuItem icon="users">Contributions</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter
          className="sidebar-color"
          style={{ textAlign: "center" }}
        >
          <div className="sidebar-btn-wrapper" style={{ padding: "10px 5px" }}>
            Team 8
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
