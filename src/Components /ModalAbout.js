import React from "react";
import { Button } from "semantic-ui-react";
import "./Modal.css"

const ModalAbout = props => {
    if(!props.show){
        return null
    }
    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 style={{fontSize: "2em"}}>About</h3>
                </div>
                <div className="modal-body" style={{fontSize: "1.5em"}}>
                                    Hi I am Victor.  <br></br><br></br>I was raised in Acapulco, Mexico before moving to Utah.  Since then I have lived in Park City graduating from Park City High School in 2012. <br></br>
                                <br></br>I love nature, 
                                  taking long hikes and helping others. Dancing is one of my many passions and I was a scholar at the Wasatch Dance Studio.  
                                   I have attended many leadership conferences and was a part of L.I.A (Latinos In Action) during high school.<br></br>
                                  <br></br>I am seeking the challenge of solving real world problems through coding in a team environment.  My interests include all areas of
                                  development including application front and back end work, as well as testing and performance.
                </div>
                <div className="modal-footer">
                    <Button onClick={props.onClose} color="red" className="button">Close</Button>
                </div>
            </div>
        </div>
    )
}   

export default ModalAbout;
