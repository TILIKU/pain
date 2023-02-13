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
            img={require(`../images/189195212_287406989752513_6145073054629261574_n.jpg`)}
            css={{display:"none"}}
        />
        <SectionLeftGreen 
            mainText="satauri ab anything "
            subText="gamis 12:15 saatia da dges sawmelic ar maq wesivrad nawami, es raari, axla cotas mivalageb amas da mere waval da rames shevwam da davidzineb ro xval cocxali viyo tore hell awaits" 
            img={require(`../images/315522406_502246001947807_8525676821573407964_n.jpg`)}
            css={{display:"none"}}        
        />
        </span>
    )
}

export default ReasonsPage