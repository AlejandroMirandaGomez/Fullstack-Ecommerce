import { TbMeat as Meat } from "react-icons/tb";
import { LuCakeSlice as Bakery } from "react-icons/lu";
import { FiCoffee as Drinks } from "react-icons/fi";
import { LuEggFried as Dairy_and_eggs } from "react-icons/lu";
import { LuApple as Fruits_and_vegetables } from "react-icons/lu";
import { LuSnowflake as Frozen_foods } from "react-icons/lu";
import { TbCandy as Snacks } from "react-icons/tb";
import { FaBowlRice as Pantry } from "react-icons/fa6";

export const sidebarNavigationData = [
  // 1. MEATS
  {
    name: "MEATS",
    url: "/shop?category=meats",
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

  // 2. BAKERY
  {
    name: "BAKERY",
    url: "/shop?category=bakery",
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

  // 3. DRINKS
  {
    name: "DRINKS",
    url: "/shop?category=drinks",
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

  // 4. FRUITS & VEGETABLES
  {
    name: "FRUITS & VEGETABLES",
    url: "/shop?category=fruits-vegetables",
    icon: Fruits_and_vegetables,
    submenu: [
      {
        name: "Fresh Fruits",
        url: "shop?category=fruits-vegetables&subcategory=fresh%20fruits",
      },
      {
        name: "Fresh Vegetables",
        url: "shop?category=fruits-vegetables&subcategory=fresh%20vegetables",
      },
      {
        name: "Organic Produce",
        url: "shop?category=fruits-vegetables&subcategory=organic%20produce",
      },
      {
        name: "Herbs & Spices",
        url: "shop?category=fruits-vegetables&subcategory=herbs%20and%20spices",
      },
    ],
  },

  // 5. FROZEN FOODS
  {
    name: "FROZEN FOODS",
    url: "/shop?category=frozen-foods",
    icon: Frozen_foods,
    submenu: [
      {
        name: "Frozen Meals",
        url: "shop?category=frozen-foods&subcategory=frozen%20meals",
      },
      {
        name: "Frozen Vegetables",
        url: "shop?category=frozen-foods&subcategory=frozen%20vegetables",
      },
      {
        name: "Frozen Desserts",
        url: "shop?category=frozen-foods&subcategory=frozen%20desserts",
      },
      {
        name: "Ice Cream",
        url: "shop?category=frozen-foods&subcategory=ice%20cream",
      },
    ],
  },

  // 6. DAIRY & EGGS
  {
    name: "DAIRY & EGGS",
    url: "/shop?category=dairy-eggs",
    icon: Dairy_and_eggs,
    submenu: [
      {
        name: "Milk",
        url: "shop?category=dairy-eggs&subcategory=milk",
      },
      {
        name: "Cheese",
        url: "shop?category=dairy-eggs&subcategory=cheese",
      },
      {
        name: "Yogurt",
        url: "shop?category=dairy-eggs&subcategory=yogurt",
      },
      {
        name: "Eggs & Butter",
        url: "shop?category=dairy-eggs&subcategory=eggs%20and%20butter",
      },
    ],
  },

  // 7. SNACKS
  {
    name: "SNACKS",
    url: "/shop?category=snacks",
    icon: Snacks,
    submenu: [
      {
        name: "Chips",
        url: "shop?category=snacks&subcategory=chips",
      },
      {
        name: "Candy & Chocolate",
        url: "shop?category=snacks&subcategory=candy%20and%20chocolate",
      },
      {
        name: "Nuts & Seeds",
        url: "shop?category=snacks&subcategory=nuts%20and%20seeds",
      },
      {
        name: "Crackers",
        url: "shop?category=snacks&subcategory=crackers",
      },
    ],
  },

  // 8. PANTRY
  {
    name: "PANTRY",
    url: "/shop?category=pantry",
    icon: Pantry,
    submenu: [
      {
        name: "Rice & Grains",
        url: "shop?category=pantry&subcategory=rice%20and%20grains",
      },
      {
        name: "Pasta & Noodles",
        url: "shop?category=pantry&subcategory=pasta%20and%20noodles",
      },
      {
        name: "Canned Goods",
        url: "shop?category=pantry&subcategory=canned%20goods",
      },
      {
        name: "Sauces & Condiments",
        url: "shop?category=pantry&subcategory=sauces%20and%20condiments",
      },
    ],
  },
];
