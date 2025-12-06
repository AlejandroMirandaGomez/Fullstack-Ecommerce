import Slider from "react-slick";

function Arrow(props) {
  const {
    className,
    style,
    onClick,
    direction = "right",
    arrow = true,
  } = props;

  // Si arrow es false, nunca mostramos la flecha
  if (!arrow) return null;

  const isRight = direction === "right";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} hidden! md:flex! ${
        isRight ? "right-3!" : "left-3!"
      } z-10! bg-neutral-400/60! size-10! rounded-full p-1! hover:bg-neutral-400/90!`}
      style={{ ...style }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        strokeWidth="2"
      >
        {isRight ? (
          // Flecha →
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        ) : (
          // Flecha ←
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        )}
      </svg>
    </button>
  );
}

function BannerSlider() {
  const banners = [
    {
      id: 1,
      title: "Fresh meats every day",
      subtitle: "Quality cuts delivered to your door.",
      cta: "Shop Meats",
      href: "/shop?category=meats",
      bg: "bg-gradient-to-r from-red-700 via-red-600 to-amber-500",
    },
    {
      id: 2,
      title: "Bakery & desserts",
      subtitle: "Cakes, breads and pastries made daily.",
      cta: "Visit Bakery",
      href: "/shop?category=bakery",
      bg: "bg-gradient-to-r from-amber-700 via-amber-500 to-yellow-400",
    },
    {
      id: 3,
      title: "Drinks for every occasion",
      subtitle: "Soft drinks, juices and more.",
      cta: "Browse Drinks",
      href: "/shop?category=drinks",
      bg: "bg-gradient-to-r from-sky-700 via-sky-500 to-teal-400",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Flechas personalizadas (una sola, con direction y arrow)
    nextArrow: <Arrow direction="right" arrow={true} />,
    prevArrow: <Arrow direction="left" arrow={true} />,
    // Ajustes responsive
    responsive: [
      {
        breakpoint: 768, // < md
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full">
      <div className="w-full max-w-6xl mx-auto pb-6">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id}>
              <div
                className={`relative h-52 sm:h-64 md:h-80 lg:h-96 ${banner.bg} text-white flex items-center`}
              >
                {/* Contenido */}
                <div className="px-6 sm:px-20 md:px-20 lg:px-20 max-w-xl space-y-3 md:space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow">
                    {banner.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg opacity-90">
                    {banner.subtitle}
                  </p>
                  <a
                    href={banner.href}
                    className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-black/70 hover:bg-black transition text-sm md:text-base font-medium shadow"
                  >
                    {banner.cta}
                  </a>
                </div>

                {/* Decoración / overlay */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default BannerSlider;
