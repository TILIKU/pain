import { Link } from "react-router-dom";

import classes from "../css/NavBar.module.css"


function NavBar() {

  return (
    <header className={classes.header}>
      <Link to="/"><div className={classes.logo} >Eco<span className={classes.cyan}>Topia</span></div></Link>
      <nav>
        <ul>
          <li>
            <Link to="/reasons">Reasons</Link>
          </li>
          <li>
            <Link to="/benefits">benefits</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;