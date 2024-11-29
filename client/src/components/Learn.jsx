import { Link } from "react-router-dom"

const Learn = () => {
  return (
    <a id="learn">
    <div className=" flex items-center justify-center ">
      <div className="w-[60%] h-[60vh] bg-blue-900 flex flex-col items-center justify-center rounded-md  ">
        <h1 className="text-white text-2xl ">Learn</h1>
        <p className="text-white mb-8">
          Play our unique games to learn as well as test your knowledge about the constitution of India.
        </p>

        <div className="flex space-x-20">
          <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4  rounded-md ">
            <Link to='/Excecutive'><button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button></Link>
          </div>
          <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md ">
          <Link to='/Judiciary'><button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button></Link>
          </div>
          <div className="bg-gray-300 w-40 h-60 flex items-end justify-center p-4 rounded-md ">
          <Link to='/Legislative'><button className="bg-orange-500 text-white py-2 px-4 rounded">Read</button></Link>
          </div>
        </div>

      </div>
    </div>
    </a>
  )
}

export default Learn