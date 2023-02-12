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
            mainText="Where it all started" 
            subText="In 2018, a Geography teacher, Irina mgebrishvili gathered her student around an idea of an eco-club, which would participate in the “Niko Ketskhoveli School Award”. Since then, our eco-club of 10 students and a teacher, based in a small Georgian town, Rustavi, is taking care of the environment and implementing activities, which is our small contribution to a sustainable future."  
            img={require(`../images/277113915_303173855225456_827140838838221178_n.jpg`)}
            />
        <SectionRightBlue
            mainText="We inspire people by"
            subText1="1) disseminating knowledge about the importance of environmental protection"
            subText2="2) mobilization to participate in the formation and implementation of environmental policy"
            subText3="3) solidarity and cooperation will allow taking into account the value of the environment at all levels of human existence." 
            img={require(`../images/277894599_357706432799389_6359956953198857223_n.jpg`)}    
        />
        <SectionLeftBrown
            mainText="Our projects are aimed at:" 
            subText1="• improving local and national climate policy;" 
            subText2="• development of other public organizations and initiatives;" 
            subText3="• reducing human impact on the climate;" 
            subText4="• reducing the impact of industry on the environment and communities;" 
            subText5="• monitoring of the environmental impact assessment system in Georgia"  
            img={require(`../images/sustainable-development-goals-logo-template-illustration-free-vector.jpg`)}
            />
        </span>
    )
}

export default AboutUsPage