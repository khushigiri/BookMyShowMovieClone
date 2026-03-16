import React, { useEffect, useState } from "react";
import axios from "axios";

import DefaultLayoutHoc from "../layouts/Default.layout";

import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import PosterSlider from "../components/PosterSlider/PosterSlider";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestMovies = async () => {
      try {
        const [popular, topRated, upcoming] = await Promise.all([
          axios.get("/movie/popular"),
          axios.get("/movie/top_rated"),
          axios.get("/movie/upcoming"),
        ]);

        setPremierMovies(popular.data.results);
        setRecommendedMovies(topRated.data.results);
        setOnlineStreamEvents(upcoming.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    requestMovies();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>

        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <PosterSlider
            title="Premieres"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online stream events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);