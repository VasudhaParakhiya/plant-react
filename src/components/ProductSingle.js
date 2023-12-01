import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";

function ProductSingle() {
  const { product } = useProductContext();
  const { id } = useParams();

  const result = product.find((item) => item.productId == id);
  console.log(result);

  return <div>{id}</div>;
}

export default ProductSingle;
