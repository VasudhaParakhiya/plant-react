function FormatPrice({ price }) {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    //maximumFractionDigits: 2, //. pachi 00 1.00
  }).format(price / 100);
}

export default FormatPrice;
