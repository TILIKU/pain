import classes from "../css/Layout.module.css"

import NavBar from "./NavBar.js"

function Layout(props){
    return(
    <div className={classes.background}>
        <NavBar />
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
    )
}

export default Layout