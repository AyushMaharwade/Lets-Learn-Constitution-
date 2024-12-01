import { useEffect } from 'react';
import { Link } from "react-router-dom";
const Judiciary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 p-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between border border-blue-200 p-6 rounded-md mb-8">
        {/* Left Section: Text */}
        <div className="text-left pl-20 ml-10">
          <h1 className="text-sm font-semibold text-white bg-blue-900 inline-block px-2 py-1 rounded-md">
            Learn Constitution of India
          </h1>
          <h2 className="text-5xl font-bold mt-4 text-gray-900">Judiciary</h2>
        </div>

        {/* Right Section: Image */}
        <div className="mt-4 md:mt-0 mr-20">
          <img
            src="/image 1.png" // Path to your image
            alt="Executive Section"
            className="w-full md:w-80 h-auto rounded-md"
          />
        </div>
      </div>


      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Introduction Section */}
        <div className="lg:col-span-2 bg-[#000C73] p-6 rounded shadow">
          <h3 className="text-3xl font-bold text-white mb-4">Introduction</h3>
          <p className="text-white">
            <p className='p-2'>The Judiciary of India is the system of courts that interprets and applies the laws of the country. It plays an important role in ensuring that justice is served and people's rights are protected. The Judiciary is independent, meaning it works on its own without being influenced by the government or anyone else.</p> <p className='p-2'>At the top of the Judiciary is the Supreme Court, followed by High Courts in each state, and lower courts in different regions. The Judiciary helps solve disputes between individuals, organizations, and even the government. It also makes sure that the laws passed by the Legislature and the actions of the Executive are fair and follow the Constitution of India.</p> <p className='p-2'>The Judiciary is important because it helps maintain law and order, ensures justice is done, and protects the rights and freedoms of every citizen. Understanding how the Judiciary works helps us realize how important it is to keep things fair and equal for everyone.</p>
          </p>
        </div>

        {/* More Resource Section */}
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-4">More Resource</h3>
          <div className="bg-gray-200 h-24 rounded mb-4"></div>
          <div className="bg-gray-200 h-24 rounded mb-4"></div>
          <div className="bg-gray-200 h-24 rounded"></div>
        </div>
      </div>

      {/* More to Learn Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-blue-900 mb-4">More to Learn</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder Section */}
          <div className="bg-gray-200 flex flex-col justify-center items-center h-24 rounded">
            <div>
              <Link to="/Legislative">
                <button className="text-xl font-bold p-1 text-blue-900">
                  Legislative
                </button>
              </Link>
            </div>
            <div>
              <Link to="/Excecutive">
                <button className="text-xl font-bold text-blue-900">
                  Excecutive
                </button>
              </Link>
            </div>
          </div>

          {/* Article Section */}
          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold text-blue-900 mb-2">Article VI</h4>
            <p className="text-gray-600 mb-4">
              Lorem jjahfd sdfi dfisdf bsdi dsifkkdb djbfjbdjf...
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Judiciary