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
            mainText="reasons" 
            subText="We believe that the unspoiled environment and wildlife are values in themselves. Sustainable development of society will ensure the harmonious development of mankind without harming nature." 
            img={require(`../images/215165744_832189587424795_1664293472378575624_n.jpg`)}
            
        />
        <SectionRightBlue
            mainText="benefits"
            subText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  
            img={require(`../images/322817672_911224826920397_9125867555772920788_n.jpg`)}
            subtxtCss={{display:"none"}}
        />
        <SectionLeftBrown
            mainText="about us" 
            subText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            img={require(`../images/213715471_2640339259605819_3808300477435587011_n.jpg`)}
            subtxtCss={{display:"none"}}
        />
        </span>
    )
}

export default MainPage