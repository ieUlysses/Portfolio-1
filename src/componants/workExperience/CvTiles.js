
import "./CvTiles.css"
// eslint-disable-next-line 
export default function (props) {
    return (

        <div className="Cv-tile">
            <h3 className="i-c-t">{props.title}</h3>

            <h4 className="years">{props.years}</h4>
            <h4 className="skills">{props.skills}</h4>
        </div>

    )
}