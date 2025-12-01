import { TbMeat as Meat } from "react-icons/tb";
import { LuCakeSlice as Bakery } from "react-icons/lu";
import { FiCoffee as Drinks } from "react-icons/fi";

export const navigationData = [
  {
    name: "HOME",
    url: "/",
    icon: null,
    submenu: {},
  },

  {
    name: "SHOP",
    url: "/shop",
    icon: null,
    submenu: {},
  },

  {
    name: "MEATS",
    url: "/shop-meats",
    icon: Meat,
    submenu: [
      {
        name: "Beef",
        url: "shop?category=meats&subcategory=beef",
      },
      {
        name: "Pork",
        url: "shop?category=meats&subcategory=pork",
      },
      {
        name: "Poultry",
        url: "shop?category=meats&subcategory=poultry",
      },
      {
        name: "Lamb",
        url: "shop?category=meats&subcategory=lamb",
      },
    ],
  },

  {
    name: "BAKERY",
    url: "/shop-bakery",
    icon: Bakery,
    submenu: [
      {
        name: "Breads",
        url: "shop?category=bakery&subcategory=breads",
      },
      {
        name: "Pastries",
        url: "shop?category=bakery&subcategory=pastries",
      },
      {
        name: "Cakes",
        url: "shop?category=bakery&subcategory=cakes",
      },
      {
        name: "Cookies",
        url: "shop?category=bakery&subcategory=cookies",
      },
    ],
  },

  {
    name: "DRINKS",
    url: "/shop-drinks",
    icon: Drinks,
    submenu: [
      {
        name: "Soft Drinks",
        url: "shop?category=drinks&subcategory=soft%20drinks",
      },
      {
        name: "Juices",
        url: "shop?category=drinks&subcategory=juices",
      },
      {
        name: "Alcoholic Beverages",
        url: "shop?category=drinks&subcategory=alcoholic%20beverages",
      },
      {
        name: "Hot Beverages",
        url: "shop?category=drinks&subcategory=hot%20beverages",
      },
    ],
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
