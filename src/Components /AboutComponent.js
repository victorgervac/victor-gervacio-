import { aboutMe } from "../data";

function createMarkup(markup){
  return {__html: markup}
 }
const AboutComponent =()=>{
  return (
    <div> 
      <div className="paragraph-descrition about"dangerouslySetInnerHTML={createMarkup(aboutMe)} >
      </div>
    </div>
  )
}
export default AboutComponent;