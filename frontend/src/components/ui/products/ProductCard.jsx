import formatPrice from "../../../util/FormatPrice";

function ProductCard({ product }) {
  const hasDiscount = product.discount > 0;
  const discountedPrice =
    product.price - product.price * (product.discount / 100);
  
  return (
    <article className="border border-neutral-200 py-2 px-4 flex flex-col gap-1 select-none">
      {/* Imagen del producto */}
      <figure className="h-52 w-60 flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          draggable={false}
          className="max-h-full max-w-full object-contain"
        />
      </figure>

      {/* Nombre */}
      <h2 className="font-bold text-md my-2 swiper-no-swiping cursor-text select-text">
        {product.name}
      </h2>

      {/* Estado de inventario */}
      <p
        className={
          "uppercase select-none font-semibold text-xs " +
          (product.inStock ? "text-green-700" : "text-red-700")
        }
      >
        {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
      </p>

      {/* Precio */}
      <div className="mt-1 flex items-center gap-2 swiper-no-swiping cursor-text select-text">
        {hasDiscount ? (
          <>
            <span className="text-neutral-400 line-through text-sm">
              ₡{formatPrice(product.price.toFixed(2))}
            </span>
            <span className="font-semibold">
              ₡{formatPrice(discountedPrice.toFixed(2))}
            </span>
          </>
        ) : (
          <span className="font-semibold">
            ₡{formatPrice(product.price.toFixed(2))}
          </span>
        )}
      </div>

      {/* Botón */}
      <div className="flex items-center justify-center my-2">
        <button
          type="button"
          className="cursor-pointer border-2 border-sky-400 py-2 w-full rounded-3xl hover:bg-sky-50"
        >
          <span className="text-sky-400 font-semibold transition-transform duration-200">
            Add to cart
          </span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
