import Boiler from "./Boiler"
import CardInfo from "./mission-control/CardInfo"
import CarouselInfo from "./mission-control/CarouselInfo"
import CVTilesInfo from "./mission-control/CVTilesInfo"
import Contact from "../componants/contact/Contact"


let info = [
    {
        id: "Home",
        componant: <CardInfo />
    },
    {
        id: "Portfolio",
        componant: <CarouselInfo />

    },
    {
        id: "Work Experience",
        componant: <CVTilesInfo />
    },
    {
        id: "Contact",
        componant: <Contact />
    }
]
// eslint-disable-next-line 
export default function () {
    let sections = info.map(section => <Boiler
        key={section.id}
        id={section.id}
        componant={section.componant}
    />)


    return (

        <div>
            { sections}
        </div>

    )
}

