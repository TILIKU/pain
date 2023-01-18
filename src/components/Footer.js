import classes from "../css/Footer.module.css"
import "../css/Footer.module.css"


function Footer(props){
    return(
        <footer className={classes.footer}>
    <div className={classes.footer_text}>
        <h3>Copyright &copy; 2022. All rights reserved</h3>
    </div>
    <div className={classes.footer_icons}>
        <a href="#" className={classes.fa}>facebook</a>
        <a href="#" className={classes.fa}>instagram</a>
        <a href="#" className={classes.fa}>twitter</a>
        <a href="#" className={classes.fa}>google</a>
    </div>
</footer>
    )
}

export default Footer