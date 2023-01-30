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
            subText="patara texti am ragacis shesaxeb mhm yup,fortnie battle pass i just shit out my a$$ bootin up pc, oh i dont know the rest. big time / right" 
            img={require(`../images/getoutofmyhead.jpg`)}
        />
        <SectionLeftBrown
            mainText="satauri ab anything" 
            subText="patara texti am ragacis shesaxeb mhm yup,fortnie battle pass i just shit out my a$$ bootin up pc, oh i dont know the rest. big time" 
            img={require(`../images/getoutofmyhead.jpg`)}
        />
        </span>
    )
}

export default BenefitsPage