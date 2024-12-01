import { useEffect, useState } from "react";

const Header = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component loads
        setAnimate(true);
    }, []);

    return (
        <div className="pt-[9vh]">
            <img src="/Header.jpg" className="object-fit absolute -z-20 w-full h-[60vh]" />
            <div className="md:h-[60vh] h-[40vh] w-full absolute z-[-1] bg-gradient-to-t from-black to-transparent"></div>
            <div className="w-auto md:h-[40vh] flex flex-col justify-around items-center align- z-10">
                <h1
                    className={`md:text-5xl text-3xl font-medium text-white text-center font-sans  ${animate ? "opacity-100 scale-100" : "opacity-0 scale-125"
                        }`}
                    style={{
                        transition: "transform 1.5s ease-out, opacity 1.5s ease-out",
                        transformOrigin: "center",
                    }}
                >
                    Sansthaein Aur Samvidhan Institutions & Constitution
                </h1>
                <p className="md:w-[70vw] text-white font-medium md:inline hidden text-center">
                    Discover the world of Indias Constitution and its institutions like never before! Dive into an engaging platform where learning meets fun, designed to educate and inspire people of all ages. Explore interactive content, unravel the principles of democracy, and connect with the values that shape our nation. Join us in making constitutional learning meaningful, enjoyable, and empowering for everyone!
                </p>
            </div>
            <div className="h-[30vh] w-auto flex justify-center items-center">
                <div className="h-[25vh] w-[50vw] bg-gradient-to-r from-[#FB8500] to-[#FB8500] text-white p-4 rounded-md">
                    <div className="mb-3 text-3xl font-semibold font-sans text-center">About us</div>
                    <p className="text-[0.8rem] leading-tight text-center">
                        At Sansthaein Aur Samvidhan, we aim to make learning about the Indian Constitution accessible, engaging, and fun for everyone, regardless of age or background. Our platform combines interactive games, easy-to-understand lessons, and exciting activities to foster a deeper understanding of India’s democratic framework and institutions.
                        <div className="mt-2"><h1>Learn. Play. Empower.</h1></div>
                    </p>
                </div>
            </div>
            <div className="md:h-[60vh] md:w-full h-[40vh] overflow-hidden bg-white">
                {/* Top Section */}
                <div className="bg-blue-800 text-white text-center py-4 gap-4" >
                    <h1 className="text-lg md:text-xl font-semibold">Legislature . Judiciary . Executive</h1>
                </div>
                {/* Middle Section */}
                <img src="/image.png" className="h-[40vh] w-full object-fit absolute" />
                {/* Bottom Section */}
                <div className="flex h-[20vh] w-full justify-center items-center">
                    <a id="learn"></a>
                    <div className="h-[10vh] w-[80vw] flex justify-center inset-y-0 top-[123vh] items-center bg-orange-500 rounded-xl z-10 text-center text-white text-xl absolute">
                        <p>“Constitutional morality is not a natural sentiment. It has to be cultivated”</p>
                        <p>-B.R. Ambedkar</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;

// const Header = () => {
//     return (
//         <div className="mb-20">
//             <img src="/Header.jpg" className="object-fit absolute -z-20 w-full h-[60vh]"/>
//             <div className="md:h-[60vh] h-[40vh] w-full absolute z-[-1]  bg-gradient-to-t from-black to-transparent "></div>
//             <div className="w-auto md:h-[40vh] flex flex-col justify-around items-center align- z-10">
//                 <h1 className="md:text-5xl text-3xl font-medium text-white text-center font-sans underline">Sansthaein Aur Samvidhan Institutions & Constitution</h1>
//                 <p className="md:w-[70vw] text-white font-medium md:inline hidden text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eos suscipit repudiandae quis reiciendis distinctio laborum aliquam. Cumque possimus, ratione ipsam voluptas laudantium, maiores odio corporis, hic ullam vitae quae reiciendis animi. Corporis sunt aliquid quaerat facere dolores voluptatem amet facilis! Voluptas voluptatibus incidunt, reprehenderit illo distinctio accusantium tempora corrupti?</p>
//             </div>
//             <div className="h-[30vh] w-auto flex justify-center items-center">

//                 <div className="h-[30vh] w-[50vw] bg-gradient-to-r from-[#FB8500] to-[#FB8500] text-white p-4 rounded-md">
//                     <div className="mb-3 mt-1 text-3xl font-semibold font-sans text-center">About us</div>
//                     <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio vitae dicta. Eveniet accusantium, doloribus deleniti repellendus explicabo in officia fuga itaque corporis dolore quos soluta laudantium tempora temporibus maxime doloribus deleniti repellendus explicabo in officia fuga itaque corporis dolore quos soluta laudantium tempora temporibus maxime .</p>
//                 </div>

//             </div>
//             <div className=" md:h-[60vh] md:w-full h-[40vh] overflow-hidden  bg-white">
//                 {/* Top Section */}
//                 <div className= " bg-blue-800 text-white text-center py-4 gap-4 ">
//                     <h1 className="text-lg md:text-xl font-semibold">
//                         Legislature . Judiciary . Executive
//                     </h1>
//                 </div>
//                 {/* Middle Section */}

//                 <img src="/image.png"className="h-[40vh] w-full object-fit"/>
//                 {/* Bottom Section */}
//                 <div className="flex h-[20vh] w-full justify-center items-center">
//                 <a id="learn"></a>
//                 <div className="h-[20vh] w-[80vw] flex justify-center items-center bg-orange-500 rounded-xl z-10 text-center text-white text-xl absolute">
//                     <p>“Constitutional morality is not a natural sentiment. It has to be cultivated”</p>
//                 </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Header