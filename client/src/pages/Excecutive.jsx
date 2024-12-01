import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Executive = () => {
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
          <h2 className="text-5xl font-volkhov mt-4 text-gray-900">Executive</h2>
        </div>

        {/* Right Section: Image */}
        <div className="mt-4 md:mt-0 mr-20">
          <img
            src="/image 1.png" // Path to your new image
            alt="Executive Section"
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
            The Executive of India is the branch of the government responsible for implementing and enforcing laws. It is composed of the President, the Prime Minister, and the Council of Ministers. 
          </p>
          <p className="text-white p-2">
            The President serves as the ceremonial head of the state, while the Prime Minister leads the government, supported by the Council of Ministers. Together, they ensure that the laws passed by the Legislature are executed effectively.
          </p>
          <p className="text-white p-2">
            The Executive plays a critical role in managing the country's affairs, addressing key issues such as education, healthcare, and the economy. It works towards making policies and ensuring their proper implementation to meet the needs of the citizens.
          </p>
          <p className="text-white p-2">
            Understanding the Executive's functions gives us insight into how the government operates and serves the people of India.
          </p>
        </div>

        {/* More Resource Section */}
        <div className="flex-column">
          <h3 className="text-xl font-bold text-blue-900 mb-4">More Resource</h3>
          <iframe width="350" height="200" src="https://www.youtube.com/embed/70YB6dlWQVI?si=QpOViRzCAorX56ip" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <iframe width="350" height="200" src="https://www.youtube.com/embed/V8hf7bC4Yf0?si=tq-LmCcmLW0ihcyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      {/* More to Learn Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-blue-900 mb-4">More to Learn</h3>
        <div className="flex justify-evenly grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder Section */}
          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h4 className="text-xl font-volkhov font-bold text-blue-900 mb-2">Wikipedia</h4>
            <p className="text-gray-600 mb-4">
              Explore the Indian Executive and its responsibilities on Wikipedia.
            </p>
            <button
              onClick={() =>
                window.open(
                  'https://en.wikipedia.org/wiki/Executive_(government)',
                  '_blank'
                )
              }
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Read
            </button>
          </div>

          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h4 className="text-xl font-volkhov font-bold text-blue-900 mb-2">Article</h4>
            <p className="text-gray-600 mb-4">
              Learn more about how the Executive functions and its roles in the government.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Read
            </button>
          </div>

          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold font-volkhov text-blue-900 mb-2">Article</h4>
            <p className="text-gray-600 mb-4">
              Discover detailed insights into the Indian Executive's governance.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Read
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="w-full h-[10vh] flex justify-center items-center">
        <Link to="/Judiciary">
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-orange-600">
            Read next Topic
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Executive;

// import { useEffect } from 'react';
// import { Link } from "react-router-dom";
// const Executive = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="bg-gray-50 p-8 font-sans">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between border border-blue-200 p-6 rounded-md mb-8">
//         {/* Left Section: Text */}
//         <div className="text-left pl-20 ml-10">
//           <h1 className="text-sm font-semibold text-white bg-blue-900 inline-block px-2 py-1 rounded-md">
//             Learn Constitution of India
//           </h1>
//           <h2 className="text-5xl font-bold mt-4 text-gray-900">Executive</h2>
//         </div>

//         {/* Right Section: Image */}
//         <div className="mt-4 md:mt-0 mr-20">
//           <img
//             src="/image 1.png" // Path to your image
//             alt="Executive Section"
//             className="w-full md:w-80 h-auto rounded-md"
//           />
//         </div>
//       </div>


//       {/* Main Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Introduction Section */}
//         <div className="lg:col-span-2 bg-[#000C73] p-6 rounded shadow">
//           <h3 className="text-3xl font-bold text-white mb-4">Introduction</h3>
//           <p className="text-white">
//             <p className='p-2'>The Executive of India is the branch of the government that carries out and enforces the laws passed by the Legislature. It is made up of the President, the Prime Minister, and the Council of Ministers. The President is the head of the country, while the Prime Minister leads the government and works with other ministers to make sure the country runs smoothly.</p> <p className='p-2'>The Executive is responsible for making decisions on policies, running government services, and making sure that laws are followed. They also work to solve problems, such as improving education, healthcare, and the economy. In simple terms, the Executive ensures that the rules and laws made by the Legislature are put into action.</p> <p className='p-2'>By understanding the role of the Executive, we can see how important it is in helping our country grow and serve the needs of its people.</p>
//           </p>
//         </div>

//         {/* More Resource Section */}
//         <div>
//           <h3 className="text-xl font-bold text-blue-900 mb-4">More Resource</h3>
//           <div className="bg-gray-200 h-24 rounded mb-4"></div>
//           <div className="bg-gray-200 h-24 rounded mb-4"></div>
//           <div className="bg-gray-200 h-24 rounded"></div>
//         </div>
//       </div>

//       {/* More to Learn Section */}
//       <div className="mt-12">
//         <h3 className="text-xl font-bold text-blue-900 mb-4">More to Learn</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Placeholder Section */}
//           <div className="bg-gray-200 flex flex-col justify-center items-center h-24 rounded">
//             <div>
//               <Link to="/Legislative">
//                 <button className="text-xl font-bold p-1 text-blue-900">
//                   Legislative
//                 </button>
//               </Link>
//             </div>
//             <div>
//               <Link to="/Judiciary">
//                 <button className="text-xl font-bold text-blue-900">
//                   Judiciary
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Article Section */}
//           <div className="md:col-span-2 bg-white p-6 rounded shadow">
//             <h4 className="text-xl font-bold text-blue-900 mb-2">Article VI</h4>
//             <p className="text-gray-600 mb-4">
//               Lorem jjahfd sdfi dfisdf bsdi dsifkkdb djbfjbdjf...
//             </p>
//             <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
//               Read
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Executive;
