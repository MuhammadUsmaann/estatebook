import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../../../components/Icons/dashboardIcon";
import PostListingIcon from "../../../components/Icons/postListing";
import PropertManagmentIcon from "../../../components/Icons/propertyManagment";
import ProfileBuilderIcon from "../../../components/Icons/profileBuilder";
import ProfileSettingIcon from "../../../components/Icons/profileSetting";
import AgentIcon from "../../../components/Icons/agent";

const SidebarItem = (props) => {
  const { address, title, isActive, SidebarIcon } = props;
  const Location = useLocation();

  return (
    <>
      <li className="w-100">
        <Link to={`/${address}`} className={`w-100 ${isActive ? 'sidebar-item-active' : ''} sidebar-item`}>
          <SidebarIcon isActive={isActive} /><span className="pl-3">{title}</span></Link>
      </li>
    </>
  )
}

const Sidebar = (props) => {
  const { isOpen } = props;
  return (
      <div className={`app-sidebar justify-content-between align-items-center ${isOpen ? 'd-flex' : 'd-none'}`}>
        <ul className="app-nav">
          <SidebarItem
            address='dashboard'
            title='Dashboard Overview'
            isActive={true}
            SidebarIcon={DashboardIcon}
          />
          <SidebarItem
            address='postlisting'
            title='Post Listing'
            isActive={false}
            SidebarIcon={PostListingIcon}
          />

          <SidebarItem
            address='propertymanagement'
            title='Property Management'
            isActive={false}
            SidebarIcon={PropertManagmentIcon}
          />
          <SidebarItem
            address='profilebuilder'
            title='Custom Profile Builder'
            isActive={false}
            SidebarIcon={ProfileBuilderIcon}
          />
          <SidebarItem
            address='settings'
            title='Profile Settings'
            isActive={false}
            SidebarIcon={ProfileSettingIcon}
          />
          <SidebarItem
            address='agents'
            title='Agents'
            isActive={false}
            SidebarIcon={AgentIcon}
          />
        </ul>
        <Link to={`/`} className={`w-100 sidebar-item app-sidebar-bottom`}>
          Go To Estatebook.com
        </Link>
      </div>
  );
}
export default Sidebar;