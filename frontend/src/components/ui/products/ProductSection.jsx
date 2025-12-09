import ProductLine from "./ProductLine";

function ProductSection({ data, className = "" }) {
  return (
    <section className={"flex flex-col " + className}>
      <h2 className="font-bold uppercase text-xl">{data.title}</h2>
      <p className="text-neutral-700">{data.description}</p>
      <div className="pt-6">
        <ProductLine products={data.products} />
      </div>
    </section>
  );
}

export default ProductSection;
