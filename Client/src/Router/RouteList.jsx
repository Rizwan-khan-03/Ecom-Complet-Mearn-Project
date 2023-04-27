
import Login from "../Pages/Login";
import Dashboard from "../components/Maincomponent/Dashboard/Dashboard";
import Layout from "../components/Common/Layout/Layout";
import Company from "../components/Maincomponent/Company/Company";
import MaterialCategory from "../components/Maincomponent/MaterialCategory/MaterialCategory";
import Users from "../components/Maincomponent/Users/Users";
import VehicleType from "../components/Maincomponent/VehicleType/VehicleType";
import NoteFound from "../components/Common/Layout/NoteFound";
import UserDetails from "../components/Maincomponent/Users/UserDetails";
import Banner from "../components/Maincomponent/Banner/Banner";
//UserDetails
export const routepath = [
  {
    path: "/",
    Element: Login,
    private: false,
  },
  // {
  //   path: "/dashboard",
  //   Element: Dashboard,
  //   private: true,
  // },
  // {
  //   path: "/company",
  //   Element: Company,
  //   private: true,
  // },
  // {
  //   path: "/materialCategory",
  //   Element: MaterialCategory,
  //   private: true,
  // },
  // {
  //   path: "/users",
  //   Element: Users,
  //   private: true,
  // },
  // {
  //   path: "/users/:id",
  //   Element: UserDetails,
  //   private: true,
  // },
  // {
  //   path: "/vehicleType",
  //   Element: VehicleType,
  //   private: true,
  // },
  // {
  //   path: "/banner",
  //   Element: Banner,
  //   private: true,
  // },
 

];
export const routeLink = [
  {
    link:"dashboard",
    name:'Dashboard',
    className: 'anvDash_icon'
  },
  {
    link:'company',
    name:'Company',
    className: 'anvComp_icon'
  },
  {
    link:'materialCategory',
    name:'Material Category',
    className: 'anvMc_icon'
  },
  {
    link:'users',
    name:'Users',
    className: 'anvUser_icon'
  },
  {
    link:'VehicleType',
    name:'Vehicle Type',
    className: 'anvVt_icon'
  },
  {
    link:'banner',
    name:'Banner',
    className: 'anvVt_icon'
  },
]

