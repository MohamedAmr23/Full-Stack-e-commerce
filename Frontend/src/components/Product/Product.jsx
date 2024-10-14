import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
const Product = () => {
  const [allProduct, setAllProduct] = useState([]);
  const getAllProducts = async () => {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    setAllProduct(data.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="my-5 container">
    <h3 className="text-center mb-5">All Product</h3>

    {allProduct.map((item) => (
      <div key={item._id}>
        <img
          src={item.image}
          alt=""
          className="w-200 mb-2 cursor-pointer"
          height={300}
        />
        {/* <h5>{item.name}</h5> */}
      </div>
    ))}
</div>
  );
};

export default Product;
