import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function ClientSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="relative max-w-6xl mx-auto py-10">
      <h1 className="text-xl sm:text-3xl md:text-4xl font-normal text-center mb-6">
        Clients who rely on Bright Advis
      </h1>
      <Slider {...settings}>
        {Array(8)
          .fill("https://brightadvis.com/wp-content/uploads/2023/12/Client-Logo-6.png")
          .map((img, index) => (
            <div key={index} className="px-2">
              <img src={img} alt={`Client ${index + 1}`} className="h-20 w-auto mx-auto" />
            </div>
          ))}
      </Slider>
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 p-2"
      onClick={onClick}
    >
      ◀
    </button>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 p-2"
      onClick={onClick}
    >
      ▶
    </button>
  );
}

export default ClientSlider;
