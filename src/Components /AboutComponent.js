import { Icon } from "semantic-ui-react";
import { aboutMe } from "../data";
import ContactComponent from "./ContactComponent";
import  { ReactComponent as VictorMan1 } from '../assets/images/victor-man1.svg' 
import "../styles/AboutComponent.css"

function createMarkup(markup){
  return {__html: markup}
 }
const AboutComponent =()=>{
  return (
    <div className="connectCard"> 
     <div className="svg-man">
        <VictorMan1/>
      </div>
    <div className="content">
      <h1 className="component-header">
        About
      </h1>
       {/* <a className="component-header github" href="https://github.com/victorgervac" target="_blank" rel="noreferrer"><Icon name="user"></Icon>About</a> */}
      <div className="about"dangerouslySetInnerHTML={createMarkup(aboutMe)} >
     
      </div>
      <ContactComponent/>
      </div>
    </div>
  )
}
export default AboutComponent;