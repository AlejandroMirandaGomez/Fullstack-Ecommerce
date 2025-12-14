import { useState } from "react";

import ProductGrid from "../../components/ui/products/ProductGrid";
import ProductFilters from "./ProductFilters";
import { LuSettings2 as Settings } from "react-icons/lu";

import { useLocation } from "react-router-dom";

import { products } from "../../data/products";
import { sidebarNavigationData } from "../../data/sidebar-navigation";

function Shop() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // Controls mobile filter visibility without unmounting the component
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const category = query.get("category")?.toLowerCase();
  const subcategory = query.get("subcategory")?.toLowerCase();

  const subMenu =
    sidebarNavigationData.find((item) =>
      item.url.includes(`category=${category}`)
    )?.submenu ?? [];

  // Determine which subcategory should appear as checked by default
  const defaultSubcategories =
    subcategory && Array.isArray(subMenu)
      ? subMenu.reduce((acc, sub) => {
          const subUrlSubcategory = new URLSearchParams(
            sub.url.split("?")[1]
          ).get("subcategory");

          const decoded = subUrlSubcategory
            ? decodeURIComponent(subUrlSubcategory).toLowerCase()
            : "";

          if (decoded === subcategory) {
            acc[sub.url] = true;
          }

          return acc;
        }, {})
      : {};

  // Filters all products based on current category & subcategory in the URL
  const filteredProducts = products.filter((product) => {
    const pCategory = product.category?.toLowerCase();
    const pSub = product.subcategory?.toLowerCase();

    if (!category) return true;
    if (!subcategory) return pCategory === category;

    return pCategory === category && pSub === subcategory;
  });

  return (
    <section className="relative px-4 xl:px-40 lg:px-20 md:px-10 gap-6 w-full">
      {/* Header with category + settings button */}
      <div className="bg-sky-400 text-white font-bold text-4xl p-5 rounded-xl my-4 flex items-center justify-between">
        <h2 className="capitalize">
          {category
            ? subcategory
              ? `${category} / ${subcategory}`
              : category
            : "Shop"}
        </h2>

        {/* Settings button only for mobile/tablet */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setShowMobileFilters(true)}
        >
          <Settings className="cursor-pointer size-9" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* 
          Single instance of ProductFilters (never unmounted)
          Behavior:
          - Mobile: behaves like an overlay panel
          - Desktop: behaves like a static sidebar
        */}
        <div
          className={`
            z-40 
            ${
              showMobileFilters
                ? "fixed inset-0 bg-black/40 lg:static lg:bg-transparent"
                : "hidden lg:block"
            }
            flex items-start justify-center
          `}
          onClick={() => {
            if (!showMobileFilters) return;
            setShowMobileFilters(false); // clicking outside closes the overlay
          }}
        >
          <div
            className={`
              w-full max-w-md 
              mt-24 lg:mt-0 
              lg:w-72 lg:shrink-0
              ${showMobileFilters ? "opacity-100" : "opacity-0 lg:opacity-100"}
              transition-opacity duration-200
            `}
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
          >
            <ProductFilters
              subCategories={subMenu}
              defaultSubcategories={defaultSubcategories}
              className="rounded-xl bg-white lg:bg-transparent shadow-xl lg:shadow-none"
            />
          </div>
        </div>

        {/* Product grid */}
        <ProductGrid
          products={filteredProducts}
          className="lg:flex-1 lg:order-1"
        />
      </div>
    </section>
  );
}

export default Shop;
