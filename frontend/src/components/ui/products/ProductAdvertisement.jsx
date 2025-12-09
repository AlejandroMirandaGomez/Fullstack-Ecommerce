import { Link } from "react-router-dom";

function ProductAdvertisement({
  data,
  orientation = "vertical",
  onClick,
  className = "",
}) {
  const isHorizontal = orientation === "horizontal";

  return (
    <article
      onClick={onClick}
      role={onClick ? "button" : undefined}
      className={`
        group cursor-pointer rounded-xl border border-neutral-200
        shadow-md hover:shadow-lg hover:-translate-y-0.5 transition 
        flex ${isHorizontal ? "flex-row" : "flex-col w-72 h-[462px] justify-center gap-8"}
        overflow-hidden
        ${className}
      `}
    >
      {/* Imagen */}
      <figure
        className={`
          overflow-hidden
          ${
            isHorizontal
              ? "w-40 sm:w-52 shrink-0 h-full"
              : "w-full h-40 sm:h-48"
          }
        `}
      >
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-full h-full object-contain transition-transform group-hover:scale-105"
        />
      </figure>

      {/* Texto */}
      <div className="p-4 flex flex-col gap-2 justify-center">
        <h2 className="text-lg font-semibold text-neutral-900 line-clamp-2">
          {data.title}
        </h2>

        <p className="text-sm text-neutral-600 line-clamp-3">{data.message}</p>

        {/* Link opcional al final */}
        {data.url && (
          <span
            // Evita que el click en el link dispare el onClick del article
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              to={data.url}
              className="mt-2 inline-flex items-center text-sm font-medium text-blue-800"
            >
              Ver más
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </Link>
          </span>
        )}
      </div>
    </article>
  );
}

export default ProductAdvertisement;
