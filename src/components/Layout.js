import classes from "../css/Layout.module.css"

import NavBar from "./NavBar.js"
import Footer from "./Footer.js"

function Layout(props){
    return(
    <div className={classes.background}>
        <NavBar />
        <main className={classes.main}>
            {props.children}
        </main>
        <Footer />
    </div>
    )
}

export default Layout