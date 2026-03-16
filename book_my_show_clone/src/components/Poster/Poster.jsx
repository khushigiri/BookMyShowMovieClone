import React from "react";
import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MoviePoster = ({ id, poster_path, title, isDark }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={`${IMAGE_BASE_URL}${poster_path}`}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        <h3
          className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-700"
            }`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};

const PlayPoster = ({ src, title, isDark, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={src}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        <h3
          className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-700"
            }`}
        >
          {title}
        </h3>
      </div>
    </a>
  );
};

const Poster = (props) =>
  props.isPlay ? <PlayPoster {...props} /> : <MoviePoster {...props} />;

export default React.memo(Poster);