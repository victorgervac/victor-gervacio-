import { Icon } from "semantic-ui-react"
const NavBar=()=>{
  return(
    <nav className="navigation">
      <a href="#svg-id" id="victor-link" className="nav-link">Victor</a>
  
      <a href="#contact-id" className="icon"id="contact-icon">
        <Icon name="envelope outline" size="large"></Icon>
      </a>
      <a href="#contact-id" id="contact" className="nav-link">
        Contact
      </a>

      <a href="#past-work" className="icon" id="work-icon">
        <Icon name="code" size="large"></Icon>
      </a>
      <a href="#past-work" id="work-link" className="nav-link">Work</a>

      <a href="#github" className="icon" id="github-icon">
        <Icon name="github" size="large"></Icon>
      </a>
      <a href="#github" id="github-link" className="nav-link">
        Github
      </a>

      <a href="#about-id" className="icon" id="about-icon" >
      <Icon name="user" size="large"></Icon>
      </a>
      <a href="#about-id" id="about" className="nav-link">
        About
      </a>
    </nav>
  )
}
export default NavBar;