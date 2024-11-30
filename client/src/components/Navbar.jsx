import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <nav className=" top-0 left-0 w-full px-4 py-3 lg:px-7 lg:py-0 lg:h-[9vh] bg-[#F28D3F] z-50">
        <div className="flex flex-wrap lg:justify-between
        items-center mx-auto max-w-screen-xl font-Inter justify-center gap-3 lg:h-[9vh]">
          <div href="#" className="flex items-center">
            <img className="h-12 m-2 px-3" src="/logo.png" />

            <Link to='/'><span className="self-center flex justify-center items-center
                whitespace-nowrap font-sans font-medium text-3xl text-white">
              Constitution of India</span>
            </Link>
          </div>

          <div>
            <ul className="md:flex justify-between align-items lg:w-[30vw] md:w-[30vw] sm:w-[90vw] gap-[5px] text-white font-regular hidden">
              <Link to='/'><li className="cursor-pointer">Home</li></Link>
              <a href="#learn"><li className="cursor-pointer">Learn</li></a>
              <a href="#games"><li className="cursor-pointer">Games</li></a>
              <Link to='/News'><li className="cursor-pointer">News</li></Link>
            </ul>
          </div>

          <div className="flex items-center gap-3 lg:order-2 w-[320px]">
            <Link to='/login'><button className="text-white bg-[#000C73] hover:bg-[#3e75c8]
                dark:text-white focus:bg-[#F28D3F] 
                rounded-[12px] text-md text-center lg:px-5 py-2 lg:py-2 mr-2 focus:outline-none font-Inter px-4 font-medium" >Login</button>
            </Link>
            <Link to='/register'><button className="text-white bg-[#000C73] hover:bg-[#3e75c8]
                dark:text-white focus:bg-[#F28D3F] 
                rounded-[12px] text-md text-center lg:px-5 py-2 lg:py-2 mr-2 focus:outline-none font-Inter px-4 font-medium" >Sign up</button>
            </Link>
          </div>
        </div>
      </nav>



    </nav>
  )
}

export default Navbar