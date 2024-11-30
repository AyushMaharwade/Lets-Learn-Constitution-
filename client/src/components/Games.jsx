import { Link } from "react-router-dom"

const Games = () => {
  return (
    <div className="pt-20 pb-5 flex items-center justify-center ">
      <a id="games"></a>
      <div className="w-[60%] h-[60vh] bg-blue-900 flex flex-col items-center justify-center rounded-md  ">
        <h1 className="text-white text-2xl ">Games</h1>
        <p className="text-white mb-8">
          Play our unique games to learn as well as test your knowledge about the constitution of India.
        </p>
        <div className="flex space-x-20">


          <div
            className="w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative">
            {/* Background Image */}
            <img
              src="/Quiz.jpeg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Button */}
            <Link to="/QuizGame">
              <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                Read
              </button>
            </Link>
          </div>


          <div
            className="w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative">
            {/* Background Image */}
            <img
              src="/SnL.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Button */}
            <Link to="/QuizGame">
              <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                Read
              </button>
            </Link>
          </div>


          <div
            className="w-40 h-60 flex items-end justify-center p-4 rounded-md overflow-hidden shadow-md relative">
            {/* Background Image */}
            <img
              src="/SW.jpeg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Button */}
            <Link to="/QuizGame">
              <button className="bg-orange-500 text-white py-2 px-4 rounded z-10 relative">
                Read
              </button>
            </Link>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Games