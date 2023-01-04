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
      link: "/dashboard",
      visiblity: true,
      icon: <NavProfileIcon />
    },
    {
      name: "Post Listing",
      link: "/postlisting",
      icon: <PostlistingIcon />,
      visiblity: true,
    },
    {
      name: "Property Management",
      link: "/propertymanagement",
      icon: <PropertyManagementIcon />,
      visiblity: true,
    },
    {
      name: "Custom Profile Builder",
      link: "/customprofilebuilder",
      icon: <CustomProfileIcon />,
      visiblity: true,
    },
    {
      name: "Profile Settings",
      link: "/profilesettings",
      icon: <ProfileSettingIcon />,
      visiblity: true,
    },
    {
      name: "Agents",
      link: "/agents",
      icon: <AgentsIcon />,
      visiblity: true,
    }

  ];
  return Routes;
};

export default SideBarRoutes;
