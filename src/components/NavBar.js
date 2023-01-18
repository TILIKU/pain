import { Link } from "react-router-dom";

import classes from "../css/NavBar.module.css"


function NavBar() {

  return (
    <header className={classes.header}>
      <div className={classes.logo} >Eco<span className={classes.cyan}>Topia</span></div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">new meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;