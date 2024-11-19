
const Header = () => {
    return (
        <div>
            <img src="client/src/assets/SC Ends Immunity For Legislators Taking Bribes 1.png" className="md:h-[60vh] md:w-[100vw] h-[40vh] absolute z-[-1]"></img>
            <div className="md:h-[60vh] md:w-full h-[40vh] absolute z-[-1]  bg-gradient-to-t from-black to-transparent "></div>
            <div className="w-auto md:h-[40vh] flex flex-col justify-around items-center align- z-10">
                <h1 className="md:text-5xl text-3xl font-medium text-white text-center font-sans underline">Sansthaein Aur Samvidhan Institutions & Constitution</h1>
                <p className="md:w-[70vw] text-white font-medium md:inline hidden text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eos suscipit repudiandae quis reiciendis distinctio laborum aliquam. Cumque possimus, ratione ipsam voluptas laudantium, maiores odio corporis, hic ullam vitae quae reiciendis animi. Corporis sunt aliquid quaerat facere dolores voluptatem amet facilis! Voluptas voluptatibus incidunt, reprehenderit illo distinctio accusantium tempora corrupti?</p>
            </div>
            <div className="h-[30vh] w-auto flex justify-center items-center">

                <div className="h-[30vh] w-[50vw] bg-gradient-to-r from-[#FB8500] to-[#FB8500] text-white p-4">
                    <div className="mb-3 mt-1 text-3xl font-semibold font-sans text-center">About us</div>
                    <p className="text-left text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio vitae dicta. Eveniet accusantium, doloribus deleniti repellendus explicabo in officia fuga itaque corporis dolore quos soluta laudantium tempora temporibus maxime doloribus deleniti repellendus explicabo in officia fuga itaque corporis dolore quos soluta laudantium tempora temporibus maxime .</p>
                </div>

            </div>
            <div className=" md:h-[60vh] md:w-full h-[40vh] overflow-hidden  bg-white">
                {/* Top Section */}
                <div className= " bg-blue-800 text-white text-center py-4 ">
                    <h1 className="text-lg md:text-xl font-semibold">
                        Legislature . Judiciary . Executive
                    </h1>
                </div>
                {/* Middle Section */}
                <div className="relative bg-gray-100 p-6 flex justify-center items-center">
                    {/* Placeholder for the central graphic */}
                    <div
                        className="w-full h-64 bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: 'url("your-image-url-here")' }}
                    />
                </div>
                {/* Bottom Section */}
                <div className="bg-orange-600 text-white text-center py-4">
                    <p className="text-md md:text-lg italic">
                        “Constitutional morality is not a natural sentiment. It has to be
                        cultivated. - DR. B.R. AMBEDKAR”
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Header