/*
/* First trial test to see if this works...It does :} */
/* import "./Boiler.css"
export default function (props) {
    return (
        <div className="section">
            <h1 id="id">
                &lt;h1&gt;{props.id}&lt;/h1&gt;
            </h1>

            <h2 id="title" >
                {props.title}
            </h2>

            <h3 id="text">
                {props.text}
            </h3>
        </div>
    )
} */
/* import "Header"; from; "../componants/pre-code/Header" */
/*
import "./Boiler.css"

import Header from "../componants/precode/Header"

export default function (props) {
    return (
        <div className="section">
            <Header />
        </div >
    )
} */
/* Following code generates the boilerplate for portfolio.
Takes main info from page.js and produces the structure and applies styles from Boiler.css */
/*
Will cause componant to be renderd 3 times because of using .map in page.js
import Blurb from "../componants/Blurb" */

import Header from "../componants/header/Header"






// eslint-disable-next-line 
export default function (props) {
    return (
        <section>
            <div >
                <Header id={props.id} />
            </div>

            <div >
                {props.componant}
            </div>
        </section>

    )
}