import Product from "./Product.jsx";
import Loading from "../Loading.jsx";
import useProducts from "../../Hooks/useProducts.jsx";
const Products = () => {
  const {data} = useProducts()
  return (
    <>
      {data?.data.data.length ? (
        <div className="my-5 container">
          <div className="row">
            <Product Products={Products} />
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      )}
    </>
  );
};

export default Products;
