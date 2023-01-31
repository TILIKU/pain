import classes from "./MainPage.module.css"
import SectionLeftBlue from "../components/SectionLeftBlue"
import SectionRightBlue from "../components/SectionRightBlue"
import SectionLeftBrown from "../components/SectionLeftBrown"
import SectionRightBrown from "../components/SectionRightBrown"
import SectionLeftGreen from "../components/SectionLeftGreen"
import SectionRightGreen from "../components/SectionRightGreen"
import SectionLeftOrange from "../components/SectionLeftOrange"
import SectionRightOrange from "../components/SectionRightOrange"


function MainPage() {
    return (
        <span>
        <SectionLeftOrange 
            mainText="au texts namdvilad ver davwer" 
            subText="We believe that the unspoiled environment and wildlife are values in themselves. Sustainable development of society will ensure the harmonious development of mankind without harming nature." 
            img={require(`../images/215165744_832189587424795_1664293472378575624_n.jpg`)}
            
        />
        <SectionRightBlue
            mainText="satauri ab anything right"
            subText="gamis 12:15 saatia da dges sawmelic ar maq wesivrad nawami, es raari, axla cotas mivalageb amas da mere waval da rames shevwam da davidzineb ro xval cocxali viyo tore hell awaits"  
            img={require(`../images/getoutofmyhead.jpg`)}
        />
        <SectionLeftBrown
            mainText="satauri ab anything / MAIN" 
            subText="gamis 12:15 saatia da dges sawmelic ar maq wesivrad nawami, es raari, axla cotas mivalageb amas da mere waval da rames shevwam da davidzineb ro xval cocxali viyo tore hell awaits" 
            img={require(`../images/getoutofmyhead.jpg`)}
        />
        </span>
    )
}

export default MainPage