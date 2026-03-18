import React, { useState } from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LOGO =
  "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

/* Small Screen Navbar */
function NavSm() {
  return (
    <div className="text-white flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold">It All Starts Here!</h3>

        <span className="text-gray-400 text-xs flex items-center hover:text-white">
          Hospet <BiChevronDown />
        </span>
      </div>

      <div className="w-8 h-8">
        <BiSearch className="w-full h-full" />
      </div>
    </div>
  );
}

/* Medium + Large Navbar */
function NavMain() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!search) return;

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      );

      console.log(response.data.results);

      // Navigate to search page with results
      navigate("/search", { state: { results: response.data.results } });

    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center w-2/3 gap-4">
        <Link to="/" className="w-10 h-10">
          <img src={LOGO} alt="logo" className="w-full h-full" />
        </Link>

        <div className="w-full flex items-center gap-2 bg-white px-4 py-2 rounded-md">
          <BiSearch />

          <input
            type="search"
            placeholder="Search for movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <span className="text-gray-300 text-sm hover:text-white flex items-center">
          Hospet <BiChevronDown />
        </span>

        <Link to="/plays" className="text-gray-300 text-sm hover:text-white">
          Plays
        </Link>

        <button className="bg-red-600 px-4 py-2 text-white text-sm rounded-md">
          Sign In
        </button>

        <BiMenu className="text-white text-2xl cursor-pointer" />
      </div>
    </div>
  );
}

/* Main Navbar */
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">

      <div className="md:hidden">
        <NavSm />
      </div>

      <div className="hidden md:flex">
        <NavMain />
      </div>

    </nav>
  );
};

export default Navbar;