
import Appliances from "../Component/maincomponent/Apliances/Appliances";
import Beauty from "../Component/maincomponent/Beauty/Beauty";
import Groceriess from "../Component/maincomponent/Grocery/Groceriess";
import Mobiles from "../Component/maincomponent/Mobiless/Mobiles";
import Product from "../Component/maincomponent/Products/Product";
import Login from "../Pages/Login";
import applinces from './img/applinces.jpg'
import electronics from './img/elec.jpg'
import fashion from './img/fashion.jpg'
import furniture from './img/furniture.jpg'
import groce from './img/Groceriess.jpg'
import moblies from './img/moblies.jpg'
import beauty from './img/beauty.jpg'
import home from './img/home.jpg'


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
  {
    path: "/applances",
    Element: Appliances,
    private: true,
  },
  {
    path: "/beauty",
    Element: Beauty,
    private: true,
  },
];
export const routeLink = [
  {
    link:"grocery",
    name:'Grocery',
    img: groce,
  },
  {
    link:'mobiles',
    name:'Mobiles',
    img: moblies
  },
  {
    link:'fashion',
    name:'fashion ',
    img: fashion
  },
  {
    link:'electronics',
    name:'Electronics',
    img: electronics
  },
  {
    link:'home',
    name:'Home',
    img: home
  },
  {
    link:'applances',
    name:'Applances',
    img: furniture
  },
  {
    link:'beauty',
    name:'Beauty',
    img: beauty
  },
 
]

