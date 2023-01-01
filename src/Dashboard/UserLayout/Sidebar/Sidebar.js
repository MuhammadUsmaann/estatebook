import React from "react";
import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import DashboardIcon from "../../../components/Icons/dashboardIcon";
import PostListingIcon from "../../../components/Icons/postListing";
import PropertManagmentIcon from "../../../components/Icons/propertyManagment";
import ProfileBuilderIcon from "../../../components/Icons/profileBuilder";
import ProfileSettingIcon from "../../../components/Icons/profileSetting";
import AgentIcon from "../../../components/Icons/agent";
=======
import { useEffect } from "react";
import SideBarRoutes from "./SideBarRoutes";
import GotoIcon from "../../../components/Icons/gotoIcon";
>>>>>>> 88f8cc0d40017c303ce4027450e35a4e93696a93

const SidebarItem = (props) => {
  const { address, title, isActive, SidebarIcon } = props;
  const Location = useLocation();

  return (
    <>
<<<<<<< HEAD
      <li className="w-100">
        <Link to={`/${address}`} className={`w-100 ${isActive ? 'sidebar-item-active' : ''} sidebar-item`}>
          <SidebarIcon isActive={isActive} /><span className="pl-3">{title}</span></Link>
      </li>
=======
      <div className="app-sidebar">
        <div className="w-100 mb-5 side-links">
          {
            sidebar.map((item, index) => {
              if (item.visiblity === true) {
                return <Link key={index} to={`${item.link.toLowerCase()}`} className={`w-100  ${item.link.toLowerCase() === Location.pathname ? 'sidebar-item-active' : ''} sidebar-item`}>
                  {item.icon} <span className="pl-3"> {item.name} </span>
                </Link>;
              }
            })
          }
        </div>
        <div className="app-sidebar-bottom w-100">
          <GotoIcon /> <span className="pl-2 font-18 font-weight-400">Go To Estatebook.com</span>
        </div>
      </div>

>>>>>>> 88f8cc0d40017c303ce4027450e35a4e93696a93
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