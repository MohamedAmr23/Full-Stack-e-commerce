import  { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import slider1 from '../../assets/slider/slider1.avif'
import slider2 from '../../assets/slider/slider2.avif'
import slider3 from '../../assets/slider/slider3.avif'
import slider4 from '../../assets/slider/slider4.avif'
import slider5 from '../../assets/slider/slider5.avif'
import slider6 from '../../assets/slider/slider6.avif'
const MainSlider = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  useEffect(()=>{
    const slideCount=6
   const interval=setInterval(() => {
    setCurrentSlide((prevSlider)=>(prevSlider+1) % slideCount)
   }, 1300); 
    return()=>{
        clearInterval(interval)
    }
  },[])
  useEffect(()=>{
    if(sliderRef.current){
        sliderRef.current.slickGoTo(currentSlide)
    }
  },[currentSlide])
  return (
    <div className="my-3 mx-5">
      <Slider ref={sliderRef} {...settings}>
        <img src={slider1} alt="" />
        <img src={slider2} alt="" />
        <img src={slider3} alt="" />
        <img src={slider4} alt="" />
        <img src={slider5} alt="" />
        <img src={slider6} alt="" />
      </Slider>
    </div>
  );
};

export default MainSlider;