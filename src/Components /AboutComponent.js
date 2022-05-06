import { Icon } from "semantic-ui-react";
import { aboutMe } from "../data";
import ContactComponent from "./ContactComponent";

function createMarkup(markup){
  return {__html: markup}
 }
const AboutComponent =()=>{
  return (
    <div> 
      <ContactComponent/>
       <a className="component-header github" href="https://github.com/victorgervac" target="_blank" rel="noreferrer"><Icon name="user"></Icon>About</a>
      <div className="paragraph-descrition about"dangerouslySetInnerHTML={createMarkup(aboutMe)} >
      </div>
    </div>
  )
}
export default AboutComponent;