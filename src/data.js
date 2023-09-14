import devtracker from "./assets/images/DevTracker.png"
import devLogin from "./assets/images/DevLogin.png"
import devWelcome from "./assets/images/DevWelcome.png"
import devSignin from  "./assets/images/DevSigin.png"
import amazoneclone from "./assets/images/Amazoneclone.png"
import amazoneshop from "./assets/images/AmazoneShoppingCart.png"
import amazonelog from "./assets/images/AmazoneLogin.png"

export const describeLine=`
  who seeks the challenge of <strong>solving</strong> real world problems 
  through coding in a team environment. Interested in all areas of
  <strong>development</strong> including application 
  <strong>front and back end</strong> work as well as <strong>testing</strong> and performance.
`

export const projects = [
  {
    id: 1,
    title: "DevTracker" , 
    imageUrl: [devtracker,devLogin,devWelcome,devSignin],
    description: 
    `This app was created as a end of year project for my University Of Utah bootcamp. In an <strong>agile environment</strong> with two team mates and myself.
    I consider this to be the <strong>ultimate TODO list</strong> to help your job search. 
    This app was created with the following techonologies.`,
    frontTechSatck: ["<strong>Router</strong>"," <strong>React</strong> "," <strong>Device<strong>","  <strong>Yarn<strong> "],
    backTechStack:["<strong>Ruby on rails</strong> ", " <strong>Gems</strong> ", " <strong>PostgresQL</strong>"],
    subTitle: 'DevTracker React Application',
    link:"",
  },
  {
    id: 2,
    title: "Amazone Clone" , 
    imageUrl: [amazoneclone,amazoneshop,amazonelog],
    description: 
    `I have created a <strong>frontend</strong> clone to the Amazon store to test out my <strong>React</strong> developer skills,
    while writing <strong>JSX</strong>. Follow the link to open the app,
    and login with a google account. While being protected by google's <strong>firebase</strong> cloud <strong>database</strong>.`,
    frontTechSatck: ["<strong>React</strong> ", " <strong>Styled Components</strong> ", " <strong>Yarn</strong> "],
    backTechStack:["<strong>Firebase</strong>"],
    subTitle: 'Amazone React Clone',
    link: `https://clone-9de46.web.app/`
  },
//   {
//     id: 3,
//     title: "Breaking Bad Type Ahead",
//     imageUrl: 
//   }
]
export const githubDescription =` 
  My <strong>github</strong> contains the repositories that represent content that 
  I have created and still <strong>developing</strong>. Enjoy the carousel of repositories 
  to see my activty and explore more visit my github.
`
export const aboutMe = `
  Hello, I am Victor somethings about me. I completed a <strong>full-stack software developer</strong> certificate offered by the University of Utah.  
  I enjoy <strong>solving problems</strong> and working in an environment where I can <strong>learn from others</strong> and contribute to a solution.
  <br>
  <br>
  I also enjoy all things outdoors from snow sports to hiking and biking.  
  I have attended many <strong>leadership conferences</strong>.
  My interests include all areas of development including application <strong>front and back end</strong> work, as well as <strong>testing and performance</strong>.
`