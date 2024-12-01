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
          <h3 className="text-3xl font-bold text-black mb-4">Introduction</h3>
          <p className="text-white">
            Lorem jjahfd sdfi dfisdf bsdi dsifkkdb djbfjbdjf jfjjfjbjcj dcjdbcdjv
            jvbvbj lorem jjahfd sdfi dfisdf bsdi dsi fkdk bdjbjfbfjfjfj
            fjbcjcdjbcjdy jvbvbj lorem jjahfd sdfi dfisdf bsdi das ifkkd
            bdjbjfjf jfbjfjf fjbcjcdjbcjdy jvbvbj lorem jjahfd sdfi dfisdf
            bsdi dsifkkdbdjbfjfb djf jjfjjfbcjcdjbcjdy jvbvbj.
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