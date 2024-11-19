
const Learn = () => {
  return (
    <div className="py-10">
      <div className="w-full h-[70vh] bg-blue-900 flex flex-col items-center justify-center rounded-md  ">
        <h1 className="text-white text-2xl mb-4">News</h1>
        <p className="text-white mb-8">
          Play our unique games to learn as well as test your knowledge about the constitution of India.
        </p>
        <div className="flex space-x-4">
          <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4  rounded-md ">
            <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
          </div>
          <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md ">
            <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
          </div>
          <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md ">
            <button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Learn