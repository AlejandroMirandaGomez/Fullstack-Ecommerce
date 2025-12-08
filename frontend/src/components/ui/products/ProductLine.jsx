import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import ArrowButton from "../util/ArrowButton";

function ProductLine({ products }) {
  const listRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    function checkOverflow() {
      const el = listRef.current;
      if (!el) return;
      setHasOverflow(el.scrollWidth > el.clientWidth);
    }

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [products]);

  function handleScroll(direction) {
    const el = listRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.8;

    el.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <section aria-label="Product Line" className="w-full">
      <div className="relative w-full px-6">
        {hasOverflow && (
          <ArrowButton direction="left" handleScroll={handleScroll} />
        )}

        <ul
          ref={listRef}
          className="flex flex-nowrap gap-0 overflow-hidden w-full"
        >
          {products.map((product) => (
            <li key={product.id} className="shrink-0">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        {hasOverflow && (
          <ArrowButton direction="right" handleScroll={handleScroll} />
        )}
      </div>
    </section>
  );
}

export default ProductLine;

