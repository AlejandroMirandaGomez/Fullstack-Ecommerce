import ProductGrid from "../../components/ui/products/ProductGrid";
import ProductFilters from "./ProductFilters";

import { useLocation } from "react-router-dom";

import { products } from "../../data/products";
import { sidebarNavigationData } from "../../data/sidebar-navigation";

function Shop() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const category = query.get("category")?.toLowerCase();
  const subcategory = query.get("subcategory")?.toLowerCase();

  const subMenu =
    sidebarNavigationData.find((item) =>
      item.url.includes(`category=${category}`)
    )?.submenu ?? [];

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
            acc[sub.url] = true; // 👈 key = sub.url (igual que en ProductFilters)
          }

          return acc;
        }, {})
      : {};

  const filteredProducts = products.filter((product) => {
    const pCategory = product.category?.toLowerCase();
    const pSub = product.subcategory?.toLowerCase();

    // Si no hay categoría en la URL → mostrar todo
    if (!category) return true;

    // Caso 1: Solo category (sin subcategory)
    if (!subcategory) {
      return pCategory === category;
    }

    // Caso 2: category + subcategory
    return pCategory === category && pSub === subcategory;
  });

  return (
    <section className="px-4 xl:px-40 lg:px-20 md:px-10 gap-6 w-full">
      <div className="bg-sky-400 text-white font-bold text-4xl p-5 rounded-xl my-4">
        <h2 className="capitalize">
          {category
            ? subcategory
              ? category + " / " + subcategory
              : category
            : "Shop"}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <ProductGrid products={filteredProducts} className="lg:order-1" />
        <ProductFilters
          subCategories={subMenu}
          defaultSubcategories={defaultSubcategories}
        />
      </div>
    </section>
  );
}

export default Shop;
