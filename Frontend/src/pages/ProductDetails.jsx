import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import Loading from "../components/Loading.jsx";
import Slider from "react-slick";
const ProductDetails = () => {
  let { id } = useParams();
  const { count, setCount } = useContext(AppContext);
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllProduct = async () => {
    setLoading(true);
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setLoading(false);
    setProduct(data.data);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 ">
              <Slider {...settings}>
                {Product.images?.map((image, index) => (
                  <img key={index} src={image} />
                ))}
              </Slider>
            </div>
            <div className="col-md-9 mt-5">
              <h3 className="mb-4">{Product.title}</h3>
              <p>{Product.description}</p>
              <p>{Product.category?.name}</p>
              <div className="d-flex justify-content-between align-items-center my-4">
                <span className="mt-4">{Product.price} EGP</span>
                <div>
                  <i className="fas fa-star rating-color" />
                  {Product.ratingsAverage}
                </div>
              </div>
              <button
                onClick={() => setCount(count + 1)}
                className="btn bg-main text-white w-100 "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
