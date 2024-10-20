import React from "react";
import { Link } from "react-router-dom";

const Product = ({ Products }) => {
  console.log(Products);
  return (
    <>
      {Products.map((item) => {
        return (
          <div key={item._id} className="col-md-2 cursor-pointer">
            <div className="product">
              <Link to={'/product-details/' + item._id}>
                <img src={item.imageCover} className="w-100" />
                <h6 className="text-main">{item.category.name}</h6>
                <p className="fw-bolder">
                  {item.title.split(" ").slice(0, 2).join("")}
                </p>
                <div className="d-flex justify-content-between align-items-center my-4">
                  <span>{item.price} EGP</span>
                  <div>
                    <i className="fas fa-star rating-color" />
                    {item.ratingsAverage}
                  </div>
                </div>
              </Link>
              <button className="btn bg-main text-white w-100 ">
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
