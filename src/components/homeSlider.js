import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "50%",
        right: "3%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "50%",
        left: "3%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    padding: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <div style={{ position: "absolute", top: "0", left: "0" }}>
          <img
            src="../assets/image/slideshow-v1-1.png"
            className="img-fluid"
            alt="Slider_image"
          />

          <div
            className="plantSlider_info text-dark"
            style={{ position: "absolute", top: "0", left: "0" }}
          >
            <h1>Artificial Plants</h1>
          </div>
        </div>

        <div className="">
          <img
            src="../assets/image/slideshow-v1-2.png"
            className="img-fluid"
            alt="Slider_image"
          />
        </div>
      </Slider>
    </>
  );
}

export default SliderImage;
