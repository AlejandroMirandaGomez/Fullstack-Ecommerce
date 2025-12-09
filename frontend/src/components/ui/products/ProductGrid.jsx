import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  return (
    <section aria-label="Product Grid" className="w-full">
      <ul className="gap-0 flex flex-wrap items-center justify-center">
        {products.map((product) => (
          <li key={product.id} className="">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductGrid;
