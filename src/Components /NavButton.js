import React from "react"
import { Link } from "react-router-dom"
import { Icon } from "semantic-ui-react"

const NavButton = () =>{
    return (
        <div style={styles.navbar}>
            <Link to="portfolio">Portfolio</Link>
            <Link to="/"><Icon name="home"></Icon></Link>
        </div>
    )
}

const styles = {
    navbar: {
      width: "100%",
    //   background: "black",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
    },
};
export default NavButton;