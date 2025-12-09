import { useLocation } from "react-router-dom";
import ProductGrid from "../../components/ui/products/ProductGrid";
import { products } from "../../data/products";

function Shop() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const category = query.get("category")?.toLowerCase();
  const subcategory = query.get("subcategory")?.toLowerCase();

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
      <ProductGrid products={filteredProducts} />
    </section>
  );
}

export default Shop;
