import  { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product.jsx";
const Products = () => {
  const [Products, setProducts] = useState([]);
  const getAllProducts = async () => {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    console.log(data.data)
    setProducts(data.data);
  };
  useEffect(() => {
    getAllProducts();
    
  }, []);
  return <div className="my-5 container">
      <div className="row"> 
        <Product Products={Products}/>
      </div>
  </div>;
};

export default Products;
