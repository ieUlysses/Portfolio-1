import helloSweetie from "../../media/helloSweetie.svg"
import Card from "../../componants/introCard/Card"
//card obj was one object
let cardInfoObj =
    [
        {

            title: "Welcome to My Portfolio",
            text: "Hi there! My name is James and I am a 22 year-old Irish expat living it up in Berlin, trying to find my way in the world of Frontend developemnt",
            image: helloSweetie

        }
    ]

// eslint-disable-next-line
export default function () {
    let cardInfo = cardInfoObj.map(card => <Card
        key={card.id}
        title={card.title}
        text={card.text}
        image={card.image}
    />)


    return (

        <div>
            { cardInfo}
        </div>

    )
}





