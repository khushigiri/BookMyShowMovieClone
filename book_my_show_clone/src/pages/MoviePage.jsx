import React, { useEffect, useState, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import MovieLayoutHoc from "../layouts/MovieLayout";
import axios from "axios";

import { MovieContext } from "../context/MovieContext";

import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

import PosterSlider from "../components/PosterSlider/PosterSlider";
import MovieHero from "../components/MovieHero/MovieHero";
import Cast from "../components/Cast/Cast";

const MoviePage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      try {
        const [movieRes, castRes, similarRes, recommendRes] =
          await Promise.all([
            axios.get(`/movie/${id}`),
            axios.get(`/movie/${id}/credits`),
            axios.get(`/movie/${id}/similar`),
            axios.get(`/movie/${id}/recommendations`),
          ]);
        setMovie(movieRes.data);
        setCast(castRes.data.cast);
        setSimilarMovies(similarRes.data.results);
        setRecommendedMovies(recommendRes.data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    requestData();

  }, [id, setMovie]);

  const castSliderSettings = useMemo(
    () => ({
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      lazyLoad: "ondemand",
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
      ],
    }),
    []
  );

  const posterSliderSettings = useMemo(
    () => ({
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      lazyLoad: "ondemand",
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
      ],
    }),
    []
  );

  return (
    <> <MovieHero />

      <div className="container mx-auto px-4 lg:px-20 my-12">

        {/* About Movie */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">
            About the Movie
          </h1>
          <p className="text-gray-700">{movie?.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Offers */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>

          <div className="flex flex-col gap-3 lg:flex-row">

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>

              <div>
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card on BookMyShow Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>

              <div>
                <h3 className="text-gray-700 text-xl font-bold">
                  Film Pass
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card on BookMyShow Stream
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Recommended Movies */}
        <PosterSlider
          config={posterSliderSettings}
          title="Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />

        <div className="my-8">
          <hr />
        </div>

        {/* Cast */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>

          <Slider {...castSliderSettings}>
            {cast.map((person) => (
              <Cast
                key={person.id}
                image={person.profile_path}
                castName={person.original_name}
                role={person.character}
              />
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Similar Movies */}
        <PosterSlider
          config={posterSliderSettings}
          title="Similar Movies"
          posters={similarMovies}
          isDark={false}
        />

        <div className="my-8">
          <hr />
        </div>

        <PosterSlider
          config={posterSliderSettings}
          title="BMS Exclusive Movies"
          posters={recommendedMovies}
          isDark={false}
        />

      </div>
    </>

  );
};

export default MovieLayoutHoc(MoviePage);
