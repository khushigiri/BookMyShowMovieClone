import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster";

const PosterSlider = ({ posters, title, subtitle, isDark, config }) => {

  if (!posters?.length) return null;

  const defaultSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderSettings = config || defaultSettings;

  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"
            }`}
        >
          {title}
        </h3>

        <p className={`${isDark ? "text-white" : "text-gray-800"} text-sm`}>
          {subtitle}
        </p>
      </div>

      <Slider {...sliderSettings}>
        {posters.map((poster) => (
          <Poster {...poster} isDark={isDark} key={poster.id} />
        ))}
      </Slider>
    </>
  );
};

export default React.memo(PosterSlider);