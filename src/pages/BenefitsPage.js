import classes from "./BenefitsPage.module.css"
import SectionLeft from "../components/SectionLeft"
import SectionRight from "../components/SectionRight"

function BenefitsPage() {
    return (
        <span>
        <SectionRight  
            mainText="satauri ab anything right / BENEFITS/" 
            subText="patara texti am ragacis shesaxeb mhm yup,fortnie battle pass i just shit out my a$$ bootin up pc, oh i dont know the rest. big time / right" 
            img={require(`../images/getoutofmyhead.jpg`)}
        />
        <SectionLeft 
            mainText="satauri ab anything" 
            subText="patara texti am ragacis shesaxeb mhm yup,fortnie battle pass i just shit out my a$$ bootin up pc, oh i dont know the rest. big time" 
            img={require(`../images/getoutofmyhead.jpg`)}
        />
        </span>
    )
}

export default BenefitsPage