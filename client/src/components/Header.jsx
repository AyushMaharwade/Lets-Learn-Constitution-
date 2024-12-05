import { useEffect, useState } from "react";

const Header = () => {
    const [animate, setAnimate] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [fade, setFade] = useState(false);
    // const [carouselIndex, setCarouselIndex] = useState(0); // Lifted state for the carousel

    const quotes = [
        "Constitutional morality is not a natural sentiment. It has to be cultivated. - B.R. Ambedkar",
        "The Constitution is not a mere lawyer's document, it is a vehicle of life, and its spirit is always the spirit of age. - B.R. Ambedkar",
        "Democracy is not merely a form of government. It is primarily a mode of associated living. - B.R. Ambedkar",
        "Freedom of speech and expression is at the heart of every democracy. - Indian Constitution",
    ];

    useEffect(() => {
        setAnimate(true);

        const quoteInterval = setInterval(() => {
            setFade(true); // Start fading out
            setTimeout(() => {
                setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
                setFade(false); // Start fading in
            }, 500); // Duration of fade-out before changing quote
        }, 5500); // Total time including fade

        return () => clearInterval(quoteInterval);
    }, []);

    // const images = [
    //     {
    //         src: "/PM (2).jpeg",
    //         name: "Smt. Droupadi Murmu ",
    //         description: "15th President of India",
    //     },
    //     {
    //         src: "/PM (1).jpeg",
    //         name: "Shri Narendra Modi",
    //         description: "Prime Minister of India since 2014",
    //     },
    //     {
    //         src: "/PM (3).jpeg",
    //         name: "Mr. Justice Sanjiv Khanna",
    //         description: "Chief Justice of India",
    //     },
    // ];

    // const nextSlide = () => {
    //     setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };

    // const prevSlide = () => {
    //     setCarouselIndex((prevIndex) =>
    //         (prevIndex - 1 + images.length) % images.length
    //     );
    // };

    // const Carousel = () => (
    //     <div className="relative w-full max-w-xl mx-auto">
    //         <div className=" border-black shadow-md overflow-hidden rounded-lg">
    //             <img
    //                 src={images[carouselIndex].src}
    //                 alt={images[carouselIndex].name}
    //                 className="w-full h-66 object-cover"
    //             />
    //         </div>
    //         <div className="mt-2 text-center">
    //             <h2 className="text-lg font-semibold">{images[carouselIndex].name}</h2>
    //             <p className="text-sm text-gray-500">{images[carouselIndex].description}</p>
    //         </div>
    //         <button
    //             onClick={prevSlide}
    //             className="absolute items-center top-1/2 left-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-100"
    //         >
    //             &#8592;
    //         </button>
    //         <button
    //             onClick={nextSlide}
    //             className="absolute items-center top-1/2 right-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-100"
    //         >
    //             &#8594;
    //         </button>
    //     </div>
    // );

    return (
        <div className="pt-[9vh]">
            <img src="/Header.jpg" className="object-fit absolute -z-20 w-full h-[60vh]" />
            <div className="md:h-[60vh] h-[40vh] w-full absolute z-[-1] bg-gradient-to-t from-black to-transparent"></div>
            <div className="w-auto md:h-[40vh] flex flex-col justify-around items-center z-10">
                <h1
                    className={`md:text-5xl text-3xl font-medium text-white text-center font-sans ${
                        animate ? "opacity-100 scale-100" : "opacity-0 scale-125"
                    }`}
                    style={{
                        transition: "transform 1.5s ease-out, opacity 1.5s ease-out",
                        transformOrigin: "center",
                    }}
                >
                    Sansthaein Aur Samvidhan Institutions & Constitution
                </h1>
                <p className="md:w-[70vw] text-white font-medium md:inline hidden text-center">
                    Discover the world of India&apos;s Constitution and its institutions like never before! Dive into an engaging platform where learning meets fun, designed to educate and inspire people of all ages. Explore interactive content, unravel the principles of democracy, and connect with the values that shape our nation. Join us in making constitutional learning meaningful, enjoyable, and empowering for everyone!
                </p>
            </div>
            <div className="h-[30vh] w-auto flex justify-center items-center">
                <div className="h-[25vh] w-[50vw] bg-gradient-to-r from-[#FB8500] to-[#FB8500] text-white p-4 rounded-md">
                    <div className="mb-3 text-3xl font-semibold font-volkhov text-center">About us</div>
                    <div className="text-[0.9rem] leading-tight text-center">
                        At Sansthaein Aur Samvidhan, we aim to make learning about the Indian Constitution accessible, engaging, and fun for everyone, regardless of age or background. Our platform combines interactive games, easy-to-understand lessons, and exciting activities to foster a deeper understanding of India&apos;s democratic framework and institutions.
                        <div className="mt-2">
                            <p>Learn. Play. Empower.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:h-[60vh] md:w-full h-[40vh] overflow-hidden bg-white">
                <div className="bg-blue-800 text-white text-center py-4 flex justify-around items-center gap-4">
                    <h1 className="text-xl md:text-xl font-volkhov">Legislature</h1>
                    <h1 className="text-xl md:text-xl font-volkhov">Executive</h1>
                    <h1 className="text-xl md:text-xl font-volkhov">Judiciary</h1>
                </div>
                <img
                    src="/central_vista3_banner_desktop_1920x1080.jpg"
                    className="h-[40vh] w-full object-cover absolute"
                />
                <div className="flex h-[20vh] w-full justify-center items-center">
                    <div className="h-[10vh] w-[80vw] flex justify-center inset-y-0 top-[123vh] items-center bg-orange-500 rounded-xl z-10 text-center text-white text-xl absolute">
                        <p
                            className={`transition-opacity duration-500 ${
                                fade ? "opacity-0" : "opacity-100"
                            }`}
                        >
                            {quotes[currentQuoteIndex]}
                            <a id="learn"></a>
                        </p>
                    </div>
                </div>
            </div>
            {/* <Carousel /> */}
        </div>
    );
};

export default Header;
