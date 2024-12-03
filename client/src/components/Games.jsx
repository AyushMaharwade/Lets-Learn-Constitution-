import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Games = () => {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
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
    <div className="pt-20 pb-5 flex items-center justify-center">
      <a id="games"></a>
      <div
        ref={containerRef}
        className="w-full sm:w-[80%] lg:w-[60%] h-auto sm:h-[60vh] bg-blue-900 flex flex-col items-center justify-center rounded-md p-5"
      >
        <h1 className="text-white text-2xl sm:text-3xl">Games</h1>
        <p className="text-white text-center mb-8 px-2 sm:px-10">
          Play our unique games to learn as well as test your knowledge
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-20 space-y-5 sm:space-y-0">
          {/* Left Div */}
          <div
            className={`w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative transform transition-transform duration-700 ${
              animate ? "translate-x-[20px] opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/Quiz.jpeg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
            />
            <Link to="/QuizGame">
              <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                Play
              </button>
            </Link>
          </div>

          {/* Middle Div */}
          <div
            className={`w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative transform transition-transform duration-700 ${
              animate ? "scale-110 opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/SnL.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
            />
            <Link to="/QuizGame">
              <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                Play
              </button>
            </Link>
          </div>

          {/* Right Div */}
          <div
            className={`w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative transform transition-transform duration-700 ${
              animate ? "-translate-x-[20px] opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/SW.jpeg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
            />
            <Link to="/QuizGame">
              <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                Play
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;



// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const Games = () => {
//   const [animate, setAnimate] = useState(false);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the element is visible
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   return (

//     <div className="pt-20 pb-5 flex items-center justify-center">
//       <a id="games"></a>
//       <div
//         ref={containerRef}
//         className="w-[60%] h-[60vh] bg-blue-900 flex flex-col items-center justify-center rounded-md"
//       >
//         <h1 className="text-white text-2xl">Games</h1>
//         <p className="text-white mb-8">
//           Play our unique games to learn as well as test your knowledge 
//         </p>
//         <div className="flex space-x-20">
//           {/* Left Div */}
//           <div
//             className="w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative transform transition-transform"
//           >
//             <img
//               src="/Quiz.jpeg"
//               alt="Background"
//               className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer "
//             />
//             <Link to="/QuizGame">
//               <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
//                 Play
//               </button>
//             </Link>
//           </div>

//           {/* Middle Div */}
//           <div
//             className="w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative transform transition-transform"
//           >
//             <img
//               src="/SnL.jpg"
//               alt="Background"
//               className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
//             />
//             <Link to="/QuizGame">
//               <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
//                 Play
//               </button>
//             </Link>
//           </div>

//           {/* Right Div */}
//           <div
//             className="w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative transform transition-transform"
//           >
//             <img
//               src="/SW.jpeg"
//               alt="Background"
//               className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
//             />
//             <Link to="/QuizGame">
//               <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative ">
//                 Play
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Games;
