import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar";

const MovieLayoutHoc = (WrappedComponent) => {
  const Layout = (props) => {
    return (<div className="bg-white">

      {/* Movie Navbar */}
      <MovieNavbar />

      {/* Page Content */}
      <main>
        <WrappedComponent {...props} />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
      </footer>

    </div>
    );

  };

  return Layout;
};

export default MovieLayoutHoc;
