
import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/MovieContext";
import MovieInfo from "./MovieInfo";
import PaymentModal from "../PaymentModal/Payment"; // adjust path if needed

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  if (!movie) return null;

  const genres = movie?.genres?.map(({ name }) => name).join(", ");

  const languages = movie?.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(", ");

  return (
    <>
      <div>

        {/* Mobile & Tablet */}
        <div className="lg:hidden w-full">
          <img
            src={`${IMAGE_BASE_URL}${movie?.poster_path} `}
            alt={movie?.title}
            className="m-4 rounded"
            style={{ width: "calc(100% - 2rem)" }}
          />
        </div>

        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>⭐ {movie?.vote_average?.toFixed(1)} / 10</h4>
              <h4>{languages}</h4>
              <h4>
                {movie?.runtime} min | {genres}
              </h4>
            </div>
          </div>

          {/* FIXED BUTTONS */}
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button
              onClick={() => {
                setIsOpen(true);
                setPrice(149);
              }}
              className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
            >
              Rent ₹149
            </button>

            <button
              onClick={() => {
                setIsOpen(true);
                setPrice(999);
              }}
              className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
            >
              Buy ₹999
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "28rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34,34,34) 24.95%, rgb(34,34,34) 38.2%, rgba(34,34,34,0.03) 97.47%, rgb(34,34,34) 100%)",
            }}
          >
            <div className="absolute z-30 left-24 top-10 flex items-center gap-10">

              <div className="w-64 h-96">
                <img
                  src={`${IMAGE_BASE_URL}${movie?.poster_path} `}
                  alt={movie?.title}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>

              <div>
                <MovieInfo movie={movie} />

                {/* Desktop Buttons */}
                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setPrice(149);
                    }}
                    className="bg-red-500 px-6 py-2 text-white font-semibold rounded-lg"
                  >
                    Rent ₹149
                  </button>

                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setPrice(999);
                    }}
                    className="bg-red-500 px-6 py-2 text-white font-semibold rounded-lg"
                  >
                    Buy ₹999
                  </button>
                </div>

              </div>

            </div>

            <img
              src={`${IMAGE_BASE_URL}${movie?.backdrop_path} `}
              alt="Backdrop"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>

      {/* PAYMENT MODAL */}
      <PaymentModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        price={price}
      />
    </>
  );
};

export default MovieHero;