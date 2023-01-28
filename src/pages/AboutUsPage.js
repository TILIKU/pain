import classes from "./AboutUsPage.module.css"
import SectionLeft from "../components/SectionLeft"
import SectionRight from "../components/SectionRight"

function AboutUsPage() {
    return (
        <span>
        <SectionLeft 
            mainText="satauri ab anything" 
            subText="patara texti am ragacis shesaxeb mhm yup,fortnie battle pass i just shit out my a$$ bootin up pc, oh i dont know the rest. big time" 
            img={require(`../images/getoutofmyhead.jpg`)}
            />
        <SectionRight  
            mainText="satauri ab anything right" 
            subText="patara texti am ragacis shesaxeb mhm yup,fortnie battle pass i just shit out my a$$ bootin up pc, oh i dont know the rest. big time / right" 
            img={require(`../images/getoutofmyhead.jpg`)}    
        />
        </span>
    )
}

export default AboutUsPage