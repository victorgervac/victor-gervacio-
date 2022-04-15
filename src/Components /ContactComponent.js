import React from "react";
import { Icon } from "semantic-ui-react";
import styled  from "styled-components";

const ContactComponent=()=>{
  return (
    <div>
      <div> 
          {/* <HeaderText fSize="default">Victor Gervacio</HeaderText> */}
          <h1>Connect</h1>
         <a style={styles.links} href="https://www.linkedin.com/in/victorgervacio/" target="blank"><Icon name="linkedin"></Icon>Victorgervacio</a>
         <span style={styles.links}><Icon name="phone"></Icon>(435)709-1779</span>
         <a style={styles.links} href="mailto: victorgervacio33@gmail.com" ><Icon name="mail"></Icon>victorgervacio33@gmail.com</a>
       
    </div>
    </div>
  )
}
export default ContactComponent;
const styles = {
  center:{
      alignItems: "center",
    },
     card:{
      height: "120px",
      marginBottom: "10px",
     },
     links:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize:"1.5em",
      marginBottom: "13px",
      marginTop: "20px"
      },
      portfolio:{
        fontWeight: "bold",
        fontSize:"1.5em",
        color:"#2FEFD0",
      },
      paragraph:{
        display: "flex",
        fontSize:"1.5em",
        marginBottom: "28px",
        marginTop: "5px",
        color:"white",
      }
    }