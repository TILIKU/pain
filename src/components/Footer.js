import classes from "../css/Footer.module.css"
import "../css/Footer.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faGooglePlus } from '@fortawesome/free-brands-svg-icons'


function Footer(props){
    return(
        <footer className={classes.footer}>
    <div className={classes.footer_text}>
        <h3>Copyright &copy; 2022. All rights reserved</h3>
    </div>
    <div className={classes.footer_icons}>
        <a href="#" className={classes.fa}> <FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#" className={classes.fa}><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" className={classes.fa}><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" className={classes.fa}><FontAwesomeIcon icon={faGooglePlus} /></a>
    </div>
</footer>
    )
}

export default Footer