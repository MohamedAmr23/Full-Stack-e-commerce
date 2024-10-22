import axios from "axios";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  let { id } = useParams();
  const [Product, setProduct] = useState([]);
  const getAllProduct = async () => {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setProduct(data.data);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3 ">
          <img src={Product.imageCover} className="w-100" alt="product image" />
        </div>
        <div className="col-md-9">
          <h3>{Product.title}</h3>
          <p>{Product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
