import React from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const images = [
  {
    id: 610150,
    backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
    title: "Dragon Ball Super: Super Hero",
  },
  {
    id: 985939,
    backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
    title: "Fall",
  },
];

const settings = {
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "linear",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const HeroCarousel = () => {
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3" key={image.id}>
              <img
                src={`${IMAGE_BASE_URL}${image.backdrop_path}`}
                alt={image.title}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3" key={image.id}>
              <img
                src={`${IMAGE_BASE_URL}${image.backdrop_path}`}
                alt={image.title}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;