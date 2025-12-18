import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";

import ProductCard from "./ProductCard";
import { CgChevronRight as RightArrow } from "react-icons/cg";
import { CgChevronLeft as LeftArrow } from "react-icons/cg";

function ArrowButton({ direction, disabled, onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center
        absolute top-1/2 -translate-y-1/2 z-10
        size-10 rounded-full bg-white/80 shadow-md border border-neutral-200
        hover:bg-white hover:shadow-xl
        ${isLeft ? "left-1" : "right-1"}
        ${
          disabled
            ? "opacity-40 cursor-not-allowed pointer-events-none"
            : "opacity-100"
        }
      `}
      aria-label={isLeft ? "Previous products" : "Next products"}
    >
      {isLeft ? (
        <LeftArrow className="size-7" />
      ) : (
        <RightArrow className="size-7" />
      )}
    </button>
  );
}

function ProductLineSwiper({ products }) {
  const swiperRef = useRef(null);

  const [nav, setNav] = useState({
    isBeginning: true,
    isEnd: false,
    isLocked: false, // true when there isn't overflow (no sliding needed)
  });

  const syncNav = useCallback((swiper) => {
    if (!swiper) return;

    setNav({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
      isLocked: swiper.isLocked,
    });
  }, []);

  const slidePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  const slideNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };

  if (!products || products.length === 0) return null;

  return (
    <section className="w-full">
      <div className="relative">
        <Swiper
          modules={[A11y]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncNav(swiper);
          }}
          onSlideChange={(swiper) => syncNav(swiper)}
          onResize={(swiper) => syncNav(swiper)}
          grabCursor 
          simulateTouch
          touchStartPreventDefault={false}
          slidesPerView="auto"
          spaceBetween={0}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="w-auto!">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows only if there is overflow */}
        {!nav.isLocked && (
          <>
            <ArrowButton
              direction="left"
              disabled={nav.isBeginning}
              onClick={slidePrev}
            />
            <ArrowButton
              direction="right"
              disabled={nav.isEnd}
              onClick={slideNext}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default ProductLineSwiper;
