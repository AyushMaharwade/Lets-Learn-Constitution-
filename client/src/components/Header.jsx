
const Header = () => {
    return (
        <div className="mb-20 mt-[9vh]">
            <img src="/Header.jpg" className="object-fit absolute -z-20 w-full h-[60vh]"/>
            <div className="md:h-[60vh] h-[40vh] w-full absolute z-[-1]  bg-gradient-to-t from-black to-transparent "></div>
            <div className="w-auto md:h-[40vh] flex flex-col justify-around items-center align- z-10">
                <h1 className="md:text-5xl text-3xl font-medium text-white text-center font-sans underline">Sansthaein Aur Samvidhan Institutions & Constitution</h1>
                <p className="md:w-[70vw] text-white font-medium md:inline hidden text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eos suscipit repudiandae quis reiciendis distinctio laborum aliquam. Cumque possimus, ratione ipsam voluptas laudantium, maiores odio corporis, hic ullam vitae quae reiciendis animi. Corporis sunt aliquid quaerat facere dolores voluptatem amet facilis! Voluptas voluptatibus incidunt, reprehenderit illo distinctio accusantium tempora corrupti?</p>
            </div>
            <div className="h-[30vh] w-auto flex justify-center items-center">

                <div className="h-[30vh] w-[50vw] bg-gradient-to-r from-[#FB8500] to-[#FB8500] text-white p-4 rounded-md">
                    <div className="mb-3 mt-1 text-3xl font-semibold font-sans text-center">About us</div>
                    <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio vitae dicta. Eveniet accusantium, doloribus deleniti repellendus explicabo in officia fuga itaque corporis dolore quos soluta laudantium tempora temporibus maxime doloribus deleniti repellendus explicabo in officia fuga itaque corporis dolore quos soluta laudantium tempora temporibus maxime .</p>
                </div>

            </div>
            <div className=" md:h-[60vh] md:w-full h-[40vh] overflow-hidden  bg-white">
                {/* Top Section */}
                <div className= " bg-blue-800 text-white text-center py-4 gap-4 ">
                    <h1 className="text-lg md:text-xl font-semibold">
                        Legislature . Judiciary . Executive
                    </h1>
                </div>
                {/* Middle Section */}

                <img src="/image.png"className="h-[40vh] w-full object-fit"/>
                {/* Bottom Section */}
                <div className="flex h-[20vh] w-full justify-center items-center">
                <div className="h-[20vh] w-[80vw] flex justify-center items-center bg-orange-500 rounded-xl z-10 text-center text-white text-xl absolute">
                    <p>“Constitutional morality is not a natural sentiment. It has to be cultivated”</p>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Header