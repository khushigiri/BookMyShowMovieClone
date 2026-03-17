import React, { useState, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import PaymentModal from "../PaymentModal/Payment";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const { movie } = useContext(MovieContext);

  if (!movie) return null;

  const genres = movie?.genres?.map(({ name }) => name).join(", ");

  const languages = movie?.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(", ");

  const rentMovie = () => {

    setPrice(149);
    setIsOpen(true);
  };

  const buyMovie = () => {
    setPrice(999);
    setIsOpen(true);
  };

  return (
    <>

      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />

      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie?.original_title}

        </h1>

        <div className="text-white flex flex-col gap-2">
          <h4> {movie?.vote_average?.toFixed(1)} / 10</h4>
          <h4>{languages}</h4>
          <h4>
            {movie?.runtime} min | {genres}
          </h4>
        </div>

        <div className="flex items-center gap-3 text-xl">
          <button
            onClick={rentMovie}
            className="bg-red-500 px-6 py-3 text-white font-semibold rounded-lg"
          >
            Rent ₹149
          </button>

          <button
            onClick={buyMovie}
            className="bg-red-500 px-6 py-3 text-white font-semibold rounded-lg"
          >
            Buy ₹999
          </button>
        </div>
      </div>
    </>

  );
};

export default MovieInfo;
