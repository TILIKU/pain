import classes from "./BenefitsPage.module.css"
import SectionLeftBlue from "../components/SectionLeftBlue"
import SectionRightBlue from "../components/SectionRightBlue"
import SectionLeftBrown from "../components/SectionLeftBrown"
import SectionRightBrown from "../components/SectionRightBrown"
import SectionLeftGreen from "../components/SectionLeftGreen"
import SectionRightGreen from "../components/SectionRightGreen"
import SectionLeftOrange from "../components/SectionLeftOrange"
import SectionRightOrange from "../components/SectionRightOrange"

function BenefitsPage() {
    return (
        <span>
        <SectionRightGreen 
            mainText="satauri ab anything right / BENEFITS/" 
            subText="gamis 12:15 saatia da dges sawmelic ar maq wesivrad nawami, es raari, axla cotas mivalageb amas da mere waval da rames shevwam da davidzineb ro xval cocxali viyo tore hell awaits"  
            img={require(`../images/315100265_659336462234874_2369968938159943861_n.jpg`)}
            css={{display:"none"}}
        />
        <SectionLeftBrown
            mainText="satauri ab anything"
            subText="gamis 12:15 saatia da dges sawmelic ar maq wesivrad nawami, es raari, axla cotas mivalageb amas da mere waval da rames shevwam da davidzineb ro xval cocxali viyo tore hell awaits" 
            img={require(`../images/315530866_1778371222520211_1589480493207462022_n.jpg`)}
            css={{display:"none"}}
        />
        </span>
    )
}

export default BenefitsPage