import { useProductContext } from "../context/productContext";

import { NavLink } from "react-router-dom";
import HomeIcon from "./HomeIcon";

function HomeProduct() {
  const { homeProduct } = useProductContext();
  // const [curProduct, setCurProduct] = useState(8);

  console.log(homeProduct);

  return (
    <>
      {homeProduct.map((product) => {
        return (
          <div className="col-md-3 col-sm-6 col-6" key={product.productId}>
            <NavLink to={`/singleProduct/${product.productId}`}>
              <div className="home_product position-relative">
                <div className="overflow-hidden">
                  <img
                    src={product.productImage}
                    alt="product"
                    className="img-fluid"
                  />

                  {/* icon  */}
                  <HomeIcon />
                </div>
              </div>
            </NavLink>
          </div>
        );
      })}
    </>
  );
}

export default HomeProduct;
