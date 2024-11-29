
const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 px-6">
      {/* Left Section - Emblem */}
      <div className="mb-4 sm:mb-0">
        <img
          src="/png-clipart-three-headed-lion-lion-capital-of-ashoka-sarnath-museum-state-emblem-of-india-national-symbols-of-india-planet-miscellaneous-mammal 1.png"
          alt="Emblem of India"
          className="h-16 w-auto"
        />
      </div>

      {/* Center Section - Copyright Text */}
      <div className="text-center">
        <p className="text-sm">Copyright © 2024 Constitution of India</p>
        <p className="text-sm">All Rights Reserved</p>
      </div>

      {/* Right Section - Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-0">
        <button className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded">
          About Us
        </button>
        <button className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded">
          Feedback
        </button>
      </div>
    </footer>
  );
};

export default Footer;
