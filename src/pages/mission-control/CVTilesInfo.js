
import CvTiles from "../../componants/workExperience/CvTiles"



let infoCards = [
    {
        title: "Supervalu Ireland",
        years: "2017-2018",
        skills: "Stock roatation"
    },
    {
        title: "Sketchers Ireland",
        years: "2017-2018",
        skills: "Sales"
    },
    {
        title: "Livenanion Ireland",
        years: "2018-2019",
        skills: "Security"
    },
    {
        title: "Meininger GmBH",
        years: "2019-2020",
        skills: "Hospitality"
    },
    {
        title: "DCI course",
        years: "2020-2021",
        skills: "Full-Stack"
    },
]

// eslint-disable-next-line 
export default function () {
    console.log(infoCards)

    let cvTiles = infoCards.map(cvTile =>
        <CvTiles
            key={cvTile.id}
            title={cvTile.title}
            // icon={cvTile.icon}
            years={cvTile.years}
            skills={cvTile.skills}
        />)


    return (
        <div className="work">
            <section className="Cv-tile-holder">
                {cvTiles}
            </section>
        </div>

    )

}