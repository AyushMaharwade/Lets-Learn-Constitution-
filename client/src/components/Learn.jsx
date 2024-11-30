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
        Unlock the knowledge of India's Constitution with engaging lessons and resources tailored for all
        </p>
        <div className="flex space-x-20">
          
        <div className="w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative">
              {/* Background Image */}
              <img
                src="/Legislature.jpeg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
              />
              {/* Button */}
              <Link to="/Legislative">
                <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                  Read
                </button>
              </Link>
            </div>

          {/* Middle Div */}
          <div
            className= "w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative"
          >
            <img
              src="/Executive.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
            />
            <Link to="/Excecutive">
              <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                Read
              </button>
            </Link>
          </div>

          {/* Right Div */}
          <div
            className="w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative transform"
          >
            <img
              src="/Judiciary.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
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



