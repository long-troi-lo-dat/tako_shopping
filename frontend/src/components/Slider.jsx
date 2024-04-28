import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css'


const Slider = () => {
    const slideImages = [
        {
            url: `${process.env.REACT_APP_URL_API}/slider/Thang-4_Banner-DC_HCM.jpg`,
            name: '',
            desciption: ""
        },
        {
            url: `${process.env.REACT_APP_URL_API}/slider/Thang-4_Banner-Dich-vu.jpg`,
            name: '',
            desciption: ""
        },
        {
            url: `${process.env.REACT_APP_URL_API}/slider/Thang-4_Banner-Metoo.jpg`,
            name: '',
            desciption: ""
        },
        {
            url: `${process.env.REACT_APP_URL_API}/slider/z5330147612963_cc5007914705dc4974a1e128bb8b4b8b.jpg`,
            name: '',
            desciption: ""
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
        clearTimeout(autoNext)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slideImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
        clearTimeout(autoNext)
    }

    const autoNext = setTimeout(() => {
        nextSlide()
    }, 4000);


    // const goToSlide = (slideIndex) => {
    //     setCurrentIndex(slideIndex)
    // }

    return (
        <>
            <div className="w-full h-full bg-center bg-cover duration-500" style={{ backgroundImage: `url(${slideImages[currentIndex].url})` }}></div>
            <div className="absolute bottom-12 left-1/2 -translate-x-[50%] text-center duration-800 text-white">
                <h4>{slideImages[currentIndex].name}</h4>
                <p>{slideImages[currentIndex].desciption}</p>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 text-black cursor-pointer" onClick={prevSlide}>
                <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1.5em"
                    width="1.5em"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                    />
                </svg>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 text-black cursor-pointer" onClick={nextSlide}>
                <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1.5em"
                    width="1.5em"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
                    />
                </svg>
            </div>
            {/* <div className="flex top-2 justify-center mt-1">
                {slideImages.map((slide, slideIndex) => (
                    <div className="text-2xl cursor-pointer mx-2" key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="1.2em"
                            width="1.2em"
                        >
                            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" style={slideIndex === currentIndex ? { opacity: "1" } : { opacity: ".2" }} />
                        </svg>
                    </div>
                ))}
            </div > */}
        </>
    )
}

export default Slider