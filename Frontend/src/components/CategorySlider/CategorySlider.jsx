import axios from "axios";
import  { useEffect, useState } from "react";
import Slider from "react-slick";
const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories`
    );
    setCategories(data.data);
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="my-5 container">
        <h3 className="text-center mb-5">Shop popular categories</h3>
      <Slider {...settings} autoplaySpeed={2000}>
        {categories.map((item) => (
          <div  key={item._id}>
            <img
              src={item.image}
              alt=""
              className="w-200 mb-2 cursor-pointer"
              height={300}
            />
            <h5>{item.name}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
