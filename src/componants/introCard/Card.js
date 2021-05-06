import './Card.css';

function Card(props) {

    return (
        <section className="wrapper">

            <div className="intro-Card">

                <img className="card-Image" src={props.image} alt="ahem?" />

                <div className="text-Holder">
                    <h1
                        className="card-Title">{props.title}
                    </h1>

                    <h1 className="intro-Text">
                        {props.text}
                    </h1>

                </div>

            </div>
        </section>

    );
}

export default Card;
