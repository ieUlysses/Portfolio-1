import "./Carousel.css"

// eslint-disable-next-line
export default function (props) {

    return (
        <section className="wrapper-carousel">

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active a">
                        <img className="media" src={props.imageOne} alt="Breaktime" />
                        <div class="carousel-caption ">
                            <h5 className="slide-title"><a href="https://www.w3schools.com">{props.titleOne}</a></h5>

                            <p className="slide-text">{props.textOne}</p>
                        </div>
                    </div>
                    <div class="carousel-item b">
                        <img className="media" src={props.imageTwo} alt="Breaktime" />
                        <div class="carousel-caption ">

                            <h5 className="slide-title"><a href="https://www.w3schools.com">{props.titleTwo}</a></h5>
                            <p className="slide-text">{props.textTwo}</p>
                        </div>
                    </div>
                    <div class="carousel-item c">
                        <img className="media" src={props.imageThree} alt="Breaktime" />
                        <div class="carousel-caption ">
                            <h5 className="slide-title"><a id="link" href="https://www.w3schools.com">{props.titleThree}</a></h5>
                            <p className="slide-text">{props.textThree}</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>
    )
}
