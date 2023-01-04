import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SideBarRoutes from "./SideBarRoutes";
import GotoIcon from "../../../components/Icons/gotoIcon";

const Sidebar = (props) => {
  const { isOpen } = props;
  const sidebar = SideBarRoutes()
  const Location = useLocation();

  return (
    <>

        <div className="app-sidebar d-md-flex d-none">
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
      
      {
        isOpen &&
        <div className="app-sidebar d-md-none d-flex">
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

      }

    </>
  );
}
export default Sidebar;