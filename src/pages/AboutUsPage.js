import classes from "./AboutUsPage.module.css"
import SectionLeftBlue from "../components/SectionLeftBlue"
import SectionRightBlue from "../components/SectionRightBlue"
import SectionLeftBrown from "../components/SectionLeftBrown"
import SectionRightBrown from "../components/SectionRightBrown"
import SectionLeftGreen from "../components/SectionLeftGreen"
import SectionRightGreen from "../components/SectionRightGreen"
import SectionLeftOrange from "../components/SectionLeftOrange"
import SectionRightOrange from "../components/SectionRightOrange"

function AboutUsPage() {
    return (
        <span>
        <SectionLeftGreen
            mainText="satauri ab anything" 
            subText="gamis 12:15 saatia da dges sawmelic ar maq wesivrad nawami, es raari, axla cotas mivalageb amas da mere waval da rames shevwam da davidzineb ro xval cocxali viyo tore hell awaits"  
            img={require(`../images/277113915_303173855225456_827140838838221178_n.jpg`)}
            />
        <SectionRightBlue
            mainText="satauri ab anything right"
            subText="gamis 12:15 saatia da dges sawmelic ar maq wesivrad nawami, es raari, axla cotas mivalageb amas da mere waval da rames shevwam da davidzineb ro xval cocxali viyo tore hell awaits" 
            img={require(`../images/277894599_357706432799389_6359956953198857223_n.jpg`)}    
        />
        </span>
    )
}

export default AboutUsPage