const formatPrice = (num) =>
  new Intl.NumberFormat("en-US", { useGrouping: true })
    .format(num)
    .replace(/,/g, " ");

export default formatPrice