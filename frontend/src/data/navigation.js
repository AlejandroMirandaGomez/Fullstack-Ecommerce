import { sidebarNavigationData } from "./sidebar-navigation";

const navigationData = [
  {
    name: "HOME",
    url: "/",
    icon: null,
    submenu: {},
  },

  {
    name: "SHOP",
    url: "/shop?category=meats",
    icon: null,
    submenu: {},
  },
  {
    name: "BLOG",
    url: "/blog",
    icon: null,
    submenu: {},
  },

  {
    name: "CONTACT",
    url: "/contact",
    icon: null,
    submenu: {},
  },
];

navigationData.splice(2, 0, ...sidebarNavigationData.slice(0, 3));

export {navigationData};