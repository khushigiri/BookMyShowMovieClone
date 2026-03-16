import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const LOGO =
  "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png";

/* Small Screen Navbar */
function NavSm() {
  return (<div className="text-white flex items-center justify-between"> <div> <h3 className="text-xl font-bold">It All Starts Here!</h3>

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

/* Medium Screen Navbar */
function NavMd() {
  return (<div className="flex items-center w-full gap-3">

    <Link Link to="/" className="w-10 h-10" >
      <img src={LOGO} alt="BookMyShow Logo" className="w-full h-full" />
    </Link >

    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearch />

      <input
        type="search"
        aria-label="Search movies and events"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, plays, sports and activities"
      />
    </div>
  </div >

  );
}

/* Large Screen Navbar */
function NavLg() {
  return (<div className="container flex mx-auto px-4 items-center justify-between">

    < div className="flex items-center w-1/2 gap-3" >
      <Link to="/" className="w-10 h-10">
        <img src={LOGO} alt="BookMyShow Logo" className="w-full h-full" />
      </Link>

      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />

        <input
          type="search"
          aria-label="Search movies and events"
          className="w-full bg-transparent border-none focus:outline-none"
          placeholder="Search for movies, events, plays, sports and activities"
        />
      </div>
      <div />

      <div className="flex items-center gap-3">

        <span className="text-gray-200 text-base flex items-center hover:text-white">
          Hospet <BiChevronDown />
        </span>

        <Link
          to="/plays"
          className="text-gray-200 text-base hover:text-white"
        >
          Plays
        </Link>

        <button
          type="button"
          className="bg-red-600 text-white px-2 py-1 text-sm rounded"
        >
          Sign In
        </button>

        <div className="w-8 h-8 text-white">
          <BiMenu className="w-full h-full" />
        </div>

      </div>
    </div >
  </div>
  );

}

/* Main Navbar */
const Navbar = () => {
  return (<nav className="bg-darkBackground-700 px-4 py-3">

    <div div className="md:hidden" >
      <NavSm />
    </div >

    <div className="hidden md:flex lg:hidden">
      <NavMd />
    </div>

    <div className="hidden lg:flex">
      <NavLg />
    </div>

  </nav >

  );
};

export default Navbar;
