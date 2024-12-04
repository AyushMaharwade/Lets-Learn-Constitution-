import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react"
import {UserContext} from "../../context/userContext"

const Navbar = () => {
  const {user} = useContext(UserContext)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
    setIsLanguageDropdownOpen(false); // Close language dropdown when toggling user dropdown
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
  };

  // const handleLanguageChange = (lang) => {
  //   alert(`Language changed to: ${lang}`);
  //   setIsLanguageDropdownOpen(false); // Close language dropdown after selection
  // };

  const changeLanguage = (lang) => {
    // eslint-disable-next-line no-undef
    Weglot.switchTo(lang);
  };

  return (
    <nav className="top-0 left-0 w-full px-4 py-3 lg:px-7 lg:py-0 lg:h-[9vh] bg-[#F28D3F] z-50 fixed">
      <div className="flex flex-wrap lg:justify-between items-center mx-auto max-w-screen-xl font-Inter justify-center gap-3 lg:h-[9vh]">
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="h-12 m-2 px-3" src="/logo.png" alt="Logo" />
          <Link to="/">
            <span className="self-center flex justify-center items-center whitespace-nowrap font-volkhov font-medium text-3xl text-white">
              Constitution of India
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
  <ul className="hidden md:flex justify-between lg:w-[30vw] gap-[5px] text-white font-regular">
    <Link to="/">
      <li className="cursor-pointer hover:scale-110 transform transition-transform duration-300">Home</li>
    </Link>
    <a href="#learn">
      <li className="cursor-pointer hover:scale-110 transform transition-transform duration-300">Learn</li>
    </a>
    <a href="#games">
      <li className="cursor-pointer hover:scale-110 transform transition-transform duration-300">Games</li>
    </a>
    <Link to="/News">
      <li className="cursor-pointer hover:scale-110 transform transition-transform duration-300">News</li>
    </Link>
  </ul>
</div>


        {/* User and Language Dropdown */}
        <div className="relative">
          {/* User Button */}
          <button
            className="flex items-center text-white focus:outline-none"
            onClick={toggleUserDropdown}
          >
            <img
              src="/user.png"
              alt="Profile"
              className="w-8 h-8 rounded-full mr-2"
              style={{ filter: "invert(100%) grayscale(100%) brightness(200%)" }}
            />
            <span className="hidden md:block">{!!user && (<h2>{user.name}</h2>)}</span>
          </button>

          {/* User Dropdown */}
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10">
              <div className="border-b border-gray-200 px-4 py-2">
                {/* <a
                  href="/profile"
                  className="block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md"
                >
                  My Profile
                </a> */}
                <a
                  href="/login"
                  className="block text-gray-700 hover:bg-gray-100 px-2 py-1"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="block text-gray-700 hover:bg-gray-100 px-2 py-1"
                >
                  Sign Up
                </a>
                <a
                  href="/"
                  className="block text-gray-700 hover:bg-gray-100 px-2 py-1"
                >
                  Log Out
                </a>
              </div>

              {/* Language Section */}
              <div className="px-4 py-2">
                <button
                  onClick={toggleLanguageDropdown}
                  className="block w-full text-left text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md"
                >
                  Language
                </button>

                {/* Language Dropdown */}
                {isLanguageDropdownOpen && (
                  <div className="mt-2 bg-gray-100 rounded-md shadow-inner">
                    <button
                      onClick={() => changeLanguage("en")}
                      className="block w-full text-left text-gray-700 hover:bg-gray-200 px-4 py-1 active:bg-[#F28D3F]"
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage("hi")}
                      className="block w-full text-left text-gray-700 hover:bg-gray-200 px-4 py-1 active:bg-[#F28D3F]"
                    >
                      Hindi
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
