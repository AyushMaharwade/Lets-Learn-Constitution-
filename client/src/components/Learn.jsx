import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Learn = () => {
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

    const section = document.querySelector(".animate-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center justify-center animate-section">
      <div className="w-[60%] h-[60vh] bg-blue-900 flex flex-col items-center justify-center rounded-md">
        <h1 className="text-white text-2xl">Learn</h1>
        <p className="text-white mb-8">
          Play our unique games to learn as well as test your knowledge about the constitution of India.
        </p>
        <div className="flex space-x-20">
          <motion.div
            className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md"
            initial={{ x: -100, opacity: 0 }}
            animate={animate ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link to="/Legislative">
              <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
            </Link>
          </motion.div>
          <motion.div
            className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md"
            initial={{ scale: 0, opacity: 0 }}
            animate={animate ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link to="/Excecutive">
              <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
            </Link>
          </motion.div>
          <motion.div
            className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md"
            initial={{ x: 100, opacity: 0 }}
            animate={animate ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link to="/Judiciary">
              <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Learn;



// import { Link } from "react-router-dom"

// const Learn = () => {
//   return (
//     <div className=" flex items-center justify-center ">
//       <div className="w-[60%] h-[60vh] bg-blue-900 flex flex-col items-center justify-center rounded-md  ">
//         <h1 className="text-white text-2xl ">Learn</h1>
//         <p className="text-white mb-8">
//           Play our unique games to learn as well as test your knowledge about the constitution of India.
//         </p>
//         <div className="flex space-x-20">
//         <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md ">
//           <Link to='/Legislative'><button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button></Link>
//           </div>
//           <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4  rounded-md ">
//           <Link to='/Excecutive'><button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button></Link>
//           </div>
//           <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md ">
//           <Link to='/Judiciary'><button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button></Link>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Learn