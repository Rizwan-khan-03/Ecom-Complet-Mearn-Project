
import Groceriess from "../Component/maincomponent/Grocery/Groceriess";
import Mobiles from "../Component/maincomponent/Mobiless/Mobiles";
import Product from "../Component/maincomponent/Products/Product";
import Login from "../Pages/Login";

//UserDetails
export const routepath = [
  {
    path: "/",
    Element: Login,
    private: false,
  },
  {
    path: "/product",
    Element: Product,
    private: true,
  },
  {
    path: "/grocery",
    Element: Groceriess,
    private: true,
  },
  {
    path: "/mobiles",
    Element: Mobiles,
    private: true,
  },
];
export const routeLink = [
  {
    link:"grocery",
    name:'Grocery',
    className: 'anvDash_icon'
  },
  {
    link:'mobiles',
    name:'Mobiles',
    className: 'anvComp_icon'
  },
  {
    link:'fashion',
    name:'fashion ',
    className: 'anvMc_icon'
  },
  {
    link:'electronics',
    name:'Electronics',
    className: 'anvUser_icon'
  },
  {
    link:'home',
    name:'Home',
    className: 'anvVt_icon'
  },
 
]

