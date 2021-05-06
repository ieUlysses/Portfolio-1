import Carousel from "../../componants/carousel/Carousel"
import Wireframes from "../../media/Wireframes.svg"


import Autohaus from "../../media/Autohaus.svg"


import React from "../../media/React.svg"





let carousel = [
    {


        titleOne: "React",
        imageOne: React,
        textOne: "This is a project React",

        titleTwo: "Wireframes",
        imageTwo: Wireframes,
        textTwo: "Here are some Wireframes I dreamed up",

        titleThree: "Autohaus Wypich",
        imageThree: Autohaus,
        textThree: "Weclome to Autohaus Wypich",


    }
]
// eslint-disable-next-line 
export default function () {
    console.log(carousel)
    let slides = carousel.map(slide => <Carousel
        key={slide.id}

        titleOne={slide.titleOne}
        textOne={slide.textOne}
        imageOne={slide.imageOne}

        titleTwo={slide.titleTwo}
        textTwo={slide.textTwo}
        imageTwo={slide.imageTwo}

        titleThree={slide.titleThree}
        textThree={slide.textThree}
        imageThree={slide.imageThree}
    /* Forgot to add following line.code essentially gives boiler the key */


    />)


    return (

        <div className="slide-show-holder">
            { slides}
        </div>

    )
}