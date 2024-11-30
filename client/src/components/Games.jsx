import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Games = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("#games");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <a id="games">
      <div className="pt-20 pb-5 flex items-center justify-center">
        <div className="w-[60%] h-[60vh] bg-blue-900 flex flex-col items-center justify-center rounded-md">
          <h1 className="text-white text-2xl">Games</h1>
          <p className="text-white mb-8">
            Play our unique games to learn as well as test your knowledge about the constitution of India.
          </p>

          <div className="flex space-x-20">
            {/* Left Div Animation */}
            <motion.div
              className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md"
              initial={{ x: -100, opacity: 0 }}
              animate={animate ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Link to="/QuizGame">
                <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
              </Link>
            </motion.div>

            {/* Center Div Animation */}
            <motion.div
              className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md"
              initial={{ scale: 0, opacity: 0 }}
              animate={animate ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
            </motion.div>

            {/* Right Div Animation */}
            <motion.div
              className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md"
              initial={{ x: 100, opacity: 0 }}
              animate={animate ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
            </motion.div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Games;

// import { Link } from "react-router-dom"

// const Games = () => {
//   return (
//     <a id="games">
//     <div className="pt-20 pb-5 flex items-center justify-center ">
//     <div className="w-[60%] h-[60vh] bg-blue-900 flex flex-col items-center justify-center rounded-md  ">
//       <h1 className="text-white text-2xl ">Games</h1>
//       <p className="text-white mb-8">
//         Play our unique games to learn as well as test your knowledge about the constitution of India.
//       </p>

//       <div className="flex space-x-20">
//         <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4  rounded-md ">
//           <Link to="/QuizGame"><button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button></Link>
//         </div>
//         <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md ">
//           <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
//         </div>
//         <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md ">
//           <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
//         </div>
//       </div>

//     </div>
//   </div>
//   </a>
//   )
// }

// export default Games