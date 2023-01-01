// @ts-nocheck
import AgentsIcon from '../../../components/Icons/agentsIcon';
import CustomProfileIcon from '../../../components/Icons/customProfileIcon';
import DashboardIcon from '../../../components/Icons/dashboardIcon';
import NavProfileIcon from '../../../components/Icons/navprofileIcon';
import PostlistingIcon from '../../../components/Icons/postlistingIcon';
import ProfileSettingIcon from '../../../components/Icons/profilesettingIcon';
import PropertyManagementIcon from '../../../components/Icons/propertymanagementIcon';

const SideBarRoutes = () => {
  // const { IsUserLoggedIn, AgentRole, SuperAdmin, UserDetails } = Hooks();
  // const { id } = useParams();

  const Routes = [
    {
      name: "Dashboard Overview ",
      link: "/Dashboard",
      visiblity: true,
      icon: <NavProfileIcon />
    },
    {
      name: "Post Listing",
      link: "/dashboard/postlisting",
      icon: <PostlistingIcon />,
      visiblity: true,
    },
    {
      name: "Property Management",
      link: "/dashboard/propertymanagement",
      icon: <PropertyManagementIcon />,
      visiblity: true,
    },
    {
      name: "Custom Profile Builder",
      link: "/dashboard/customprofilebuilder",
      icon: <CustomProfileIcon />,
      visiblity: true,
    },
    {
      name: "Profile Settings",
      link: "/dashboard/profilesettings",
      icon: <ProfileSettingIcon />,
      visiblity: true,
    },
    {
      name: "Agents",
      link: "/dashboard/agents",
      icon: <AgentsIcon />,
      visiblity: true,
    }

  ];
  return Routes;
};

export default SideBarRoutes;
