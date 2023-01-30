import classes from "./ReasonsPage.module.css"
import SectionLeftBlue from "../components/SectionLeftBlue"
import SectionRightBlue from "../components/SectionRightBlue"
import SectionLeftBrown from "../components/SectionLeftBrown"
import SectionRightBrown from "../components/SectionRightBrown"
import SectionLeftGreen from "../components/SectionLeftGreen"
import SectionRightGreen from "../components/SectionRightGreen"
import SectionLeftOrange from "../components/SectionLeftOrange"
import SectionRightOrange from "../components/SectionRightOrange"

function ReasonsPage() {
    return (
        <span>
        <SectionRightBlue  
            mainText="fortnite battle pass"
            subText="gamis 12:15 saatia da dges sawmelic ar maq wesivrad nawami, es raari, axla cotas mivalageb amas da mere waval da rames shevwam da davidzineb ro xval cocxali viyo tore hell awaits" 
            img={require(`../images/getoutofmyhead.jpg`)}
        />
        <SectionLeftGreen 
            mainText="satauri ab anything "
            subText="gamis 12:15 saatia da dges sawmelic ar maq wesivrad nawami, es raari, axla cotas mivalageb amas da mere waval da rames shevwam da davidzineb ro xval cocxali viyo tore hell awaits" 
            img={require(`../images/getoutofmyhead.jpg`)}
        />
        </span>
    )
}

export default ReasonsPage