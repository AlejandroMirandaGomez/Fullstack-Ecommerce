import BannerSlider from "./BannerSlider";
import ProductSection from "../../components/ui/products/ProductSection";
import ProductAdvertisement from "../../components/ui/products/ProductAdvertisement";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { products } from "../../data/products";

function Home() {
  const navigate = useNavigate();
  const [orientation, setOrientation] = useState("horizontal");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      setOrientation(mediaQuery.matches ? "vertical" : "horizontal");
    };

    // Set initial value
    handleChange();

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const BestSellers = products.slice(0, 8);

  return (
    <>
      <section aria-label="Promotional Banners">
        <BannerSlider />
      </section>
      <section className="xl:px-40 lg:px-20 md:px-10 gap-6 w-full">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <ProductSection
            data={{
              title: "Best Sellers",
              description:
                "Do not miss the current offers until the end of March.",
              products: BestSellers,
            }}
            className="lg:order-1 flex-1 min-w-0"
          />
          <ProductAdvertisement
            data={{
              imageUrl: "/ads/Ketchup.png",
              title: "Pantry essentials",
              message:
                "Buy oils, flours, spices and seasonings to complete each recipe",
              url: "/shop?category=pantry",
            }}
            orientation={orientation}
            onClick={() => {
              navigate("/shop?category=pantry");
            }}
            className="bg-amber-400 shrink-0"
          />
        </div>
      </section>
      <footer className="h-52"></footer>
    </>
  );
}

export default Home;
