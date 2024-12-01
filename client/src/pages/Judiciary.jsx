import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <h2 className="text-5xl font-volkhov mt-4 text-gray-900">Judiciary</h2>
        </div>

        {/* Right Section: Image */}
        <div className="mt-4 md:mt-0 mr-20">
          <img
            src="/image 1.png" // Path to your new image
            alt="Judiciary Section"
            className="w-full md:w-80 h-auto rounded-md"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Introduction Section */}
        <div className="lg:col-span-2 bg-[#000C73] p-6 rounded shadow">
          <h3 className="text-3xl font-volkhov font-bold text-white mb-4">Introduction</h3>
          <p className="text-white p-2">
            The Judiciary of India is the branch of the government responsible for interpreting laws, ensuring justice, and protecting citizens' rights. It operates independently, free from external influences.
          </p>
          <p className="text-white p-2">
            The Judiciary consists of the Supreme Court, High Courts at the state level, and subordinate courts at the district and local levels. It resolves disputes, ensures laws align with the Constitution, and acts as a check on the Legislature and Executive branches.
          </p>
          <p className="text-white p-2">
            By understanding the Judiciary's role, we recognize its importance in maintaining fairness, protecting freedoms, and upholding justice for all citizens.
          </p>
        </div>

        {/* More Resource Section */}
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-4">More Resource</h3>
          <iframe width="350" height="200" src="https://www.youtube.com/embed/L-5tyx1DiDs?si=Pk5PMHrA0KkZ1YPu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <iframe width="350" height="200" src="https://www.youtube.com/embed/p0moBiWUUYM?si=xE2ymNmBkmj-Ixfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      {/* More to Learn Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-blue-900 mb-4">More to Learn</h3>
        <div className="flex justify-evenly grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article Section */}
          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h4 className="text-xl font-volkhov font-bold text-blue-900 mb-2">Wikipedia</h4>
            <p className="text-gray-600 mb-4">
              Dive into the workings of the Indian Judiciary on Wikipedia.
            </p>
            <button
              onClick={() =>
                window.open(
                  'https://en.wikipedia.org/wiki/Judiciary_of_India',
                  '_blank'
                )
              }
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Read
            </button>
          </div>

          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold font-volkhov text-blue-900 mb-2">Case Studies</h4>
            <p className="text-gray-600 mb-4">
              Read famous case studies that highlight the role of the Judiciary.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Explore
            </button>
          </div>

          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold font-volkhov text-blue-900 mb-2">Articles</h4>
            <p className="text-gray-600 mb-4">
              Discover detailed insights into India's judicial system.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="w-full h-[10vh] flex justify-center items-center">
        <Link to="/Legislative">
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-orange-600">
            Back to Legislative
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Judiciary;
