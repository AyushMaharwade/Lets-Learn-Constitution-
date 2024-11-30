import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Learn = () => {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        ref={containerRef}
        className="w-[60%] h-[60vh] bg-blue-900 flex flex-col items-center justify-center rounded-md"
      >
        <h1 className="text-white text-2xl">Learn</h1>
        <p className="text-white mb-8">
          Play our unique games to learn as well as test your knowledge about the constitution of India.
        </p>
        <div className="flex space-x-20">
          {/* Left Div */}
          <div
            className={`w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative transform transition-transform duration-700 ${
              animate ? "translate-x-10 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <img
              src="/Legislature.jpeg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <Link to="/Legislative">
              <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                Read
              </button>
            </Link>
          </div>

          {/* Middle Div */}
          <div
            className={`w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative transform transition-transform duration-700 ${
              animate ? "scale-110 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <img
              src="/Executive.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <Link to="/Excecutive">
              <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                Read
              </button>
            </Link>
          </div>

          {/* Right Div */}
          <div
            className={`w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative transform transition-transform duration-700 ${
              animate ? "-translate-x-10 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <img
              src="/Judiciary.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <Link to="/Judiciary">
              <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                Read
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;



