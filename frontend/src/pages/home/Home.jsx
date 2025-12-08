import BannerSlider from "./BannerSlider";
import ProductSection from "../../components/ui/products/ProductSection";

import { products } from "../../data/products";

function Home() {
  const BestSellers = products.slice(0, 5);

  return (
    <>
      <section aria-label="Promotional Banners">
        <BannerSlider />
      </section>
      <section className="xl:px-40 lg:px-20 md:px-10 gap-6">
        <ProductSection
          data={{
            title: "Best Sellers",
            description:
              "Do not miss the current offers until the end of March.",
            products: BestSellers,
          }}
        />
      </section>
      <footer className="h-52"></footer>
    </>
  );
}

export default Home;
