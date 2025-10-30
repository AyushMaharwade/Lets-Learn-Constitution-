import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";

// manage Dropdown states 
const Navbar = () => {
  const { user } = useContext(UserContext);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false);

   // User dropdown toggle 
  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev);
    closeOtherDropdowns("user"); // to close other dropdowns 
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
    closeOtherDropdowns("language");
  };

  const toggleLearnDropdown = () => {
    setIsLearnDropdownOpen((prev) => !prev);
    closeOtherDropdowns("learn");
  };

  const toggleGamesDropdown = () => {
    setIsGamesDropdownOpen((prev) => !prev);
    closeOtherDropdowns("games");
  };

// to ensure that only one dropdown is close
  const closeOtherDropdowns = (currentDropdown) => {
    if (currentDropdown !== "user") setIsUserDropdownOpen(false);
    if (currentDropdown !== "language") setIsLanguageDropdownOpen(false);
    if (currentDropdown !== "learn") setIsLearnDropdownOpen(false);
    if (currentDropdown !== "games") setIsGamesDropdownOpen(false);
  };

  const closeAllDropdowns = () => {
    setIsUserDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
    setIsLearnDropdownOpen(false);
    setIsGamesDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = () => {
      closeAllDropdowns();
    };

    document.addEventListener("click", handleOutsideClick);

    // reset the event listener
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const changeLanguage = (lang) => {
    // eslint-disable-next-line no-undef
    Weglot.switchTo(lang);
    setIsLanguageDropdownOpen(false); // Close dropdown after changing language
  };

  return (
    <nav
      className="top-0 left-0 w-full px-4 py-3 lg:px-7 lg:py-0 lg:h-[9vh] bg-[#F28D3F] z-50 fixed"
      onClick={(e) => e.stopPropagation()} // event listener, doesnt close automatically
    >
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
              <li className="cursor-pointer hover:scale-110 transform transition-transform duration-300">
                Home
              </li>
            </Link>
            <li
              className="cursor-pointer hover:scale-110 transform transition-transform duration-300 relative rounded"
              onClick={(e) => {
                e.stopPropagation();
                toggleLearnDropdown();
              }}
            >
              Learn
              {isLearnDropdownOpen && (
                <div className="absolute top-full mt-2 bg-white text-gray-700 rounded-md shadow-lg z-10">
                  <Link to="/legislative">
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >
                      Legistature
                    </button>
                  </Link>
                  <Link to="/excecutive">
                    <button
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Executive
                    </button>
                  </Link>
                  <Link to="/Judiciary">
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >
                      Judiciary
                    </button>
                  </Link>
                </div>
              )}
            </li>
            <li
              className="cursor-pointer hover:scale-110 transform transition-transform duration-300 relative"
              onClick={(e) => {
                e.stopPropagation();
                toggleGamesDropdown();
              }}
            >
              Games
              {isGamesDropdownOpen && (
                <div className="absolute top-full mt-2 bg-white text-gray-700 rounded-md shadow-lg z-10 w-max">
                  {/* <Link to="/Quizgame">
                    <button
                      className="block px-4 py-2 text-center hover:bg-gray-100 rounded-md"
                    >
                      Quiz Game
                    </button>
                  </Link> */}
                  <Link to="/Snakegame">
                    <button
                      className="block px-4 py-2 text-center hover:bg-gray-100 "
                    >
                      Snake & Ladder
                    </button>
                  </Link>
                  <Link to="/flip-card-game">
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >
                      Spin the Wheel
                    </button>
                  </Link>
                </div>
              )}
            </li>
            <Link to="/News">
              <li className="cursor-pointer hover:scale-110 transform transition-transform duration-300">
                News
              </li>
            </Link>
          </ul>
        </div>

        {/* User and Language Dropdown */}
        <div className="flex w-max justify-center items-center gap-3">
          <div className="relative">
            <button
              className="flex items-center text-white focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                toggleUserDropdown();
              }}
            >
              <img
                src="/user.png"
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
                style={{ filter: "invert(100%) grayscale(100%) brightness(200%)" }}
              />
              <span className="hidden md:block">{user ? user.name : "Guest"}</span>
            </button>

            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10">
                <div className="border-b border-gray-200 px-4 py-2">
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
                  {/* <a
                  href="/"
                  className="block text-gray-700 hover:bg-gray-100 px-2 py-1"
                >
                  Log Out
                </a> */}
                </div>
              </div>
            )}
          </div>
          <div className="px-4 py-2 relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLanguageDropdown();
              }}
              className="block w-full text-left text-gray-700 "
            >
              <img
                src="/Language.svg"
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
                style={{ filter: "invert(100%) grayscale(100%) brightness(200%)" }}
              />
            </button>

            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-100 rounded-md shadow-inner z-10">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full text-left text-gray-700 hover:bg-gray-200 px-4 py-1 active:bg-[#F28D3F] rounded-md"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("hi")}
                  className="block w-full text-left text-gray-700 hover:bg-gray-200 px-4 py-1 active:bg-[#F28D3F] rounded-md"
                >
                  Hindi
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
