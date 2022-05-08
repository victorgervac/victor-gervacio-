import devtracker from "./assets/images/DevTracker.png"
import amazoneclone from "./assets/images/Amazoneclone.png"

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
    imageUrl: devtracker,
    description: 
    `This app was created in an <strong>agile environment</strong> with two team mates and myself.
    I consider this to be the <strong>ultimate TODO list</strong> to help your job search. 
    This app was created with the following techonologies.`,
    frontTechSatck: ["<strong>Drag and Drop</strong> ","<strong>Router</strong>"," <strong>React</strong> "," <strong>Device<strong>","  <strong>Yarn<strong> "],
    backTechStack:["<strong>Ruby on rails</strong> ", " <strong>Gems</strong> ", " <strong>PostgresQL</strong>"],
    subTitle: 'DevTracker React application',
    link:"https://amazingdevtracker.herokuapp.com",
  },
  {
    id: 2,
    title: "Amazone Clone" , 
    imageUrl: amazoneclone,
    description: 
    `I have created a clone to the Amazon store to test out my <strong>javascripts</strong> developer skills,
    while writing <strong>JSX</strong> in the react framework. Follow the link to open the up the app,
    and login with a google account. While being protected by google's <strong>firebase</strong> cloud <strong>database</strong>.`,
    frontTechSatck: ["<strong>React</strong> ", " <strong>Number Format<strong> ", " <strong>Styled Components</strong> ", " <strong>Yarn</strong> "],
    backTechStack:["<strong>Firebase</strong>"],
    subTitle: 'AmzClone React application',
    link: `https://clone-9de46.web.app/`
  }
]
export const githubDescription =` 
  My <strong>github</strong> contains the repositories that represent content that 
  I have created and still <strong>developing</strong>. You can load the repositories 
  by clicking the button below or following the name link 
  to see my activty and explore more.
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