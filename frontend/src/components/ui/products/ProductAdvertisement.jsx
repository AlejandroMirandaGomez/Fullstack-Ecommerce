function ProductAdvertisement({data}) {
  return (
    <article>
      <figure>
        <img src={data.img_src} alt={data.title} />
      </figure>
      <h2>{data.title}</h2>
      <p>{data.message}</p>
      <a href={data.url}></a>
    </article>
  )
}

export default ProductAdvertisement