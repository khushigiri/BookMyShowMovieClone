import React, { createContext, useState, useMemo, useContext } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);

  const value = useMemo(() => {
    return { movie, setMovie };
  }, [movie]);

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};

export default MovieProvider;
