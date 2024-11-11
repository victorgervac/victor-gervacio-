import devtracker from "./assets/images/DevTracker.png"
import devLogin from "./assets/images/DevLogin.png"
import devWelcome from "./assets/images/DevWelcome.png"
import devSignin from  "./assets/images/DevSigin.png"
import amazoneclone from "./assets/images/Amazoneclone.png"
import amazoneshop from "./assets/images/AmazoneShoppingCart.png"
import amazonelog from "./assets/images/AmazoneLogin.png"
import aceApps from "./assets/images/AceLogoFull.png"
import aceProj from "./assets/images/ace_proj.png"
import aceTerm from "./assets/images/ace_term.png"

export const describeLine=`
  who seeks the challenge of <strong>solving</strong> real world problems 
  through coding in a team environment. Interested in all areas of
  <strong>development</strong> including application 
  <strong>front and back end</strong> work as well as <strong>testing</strong> and performance.
`

export const projects = [
  {
    id: 3,
    title: "ACE Apps" , 
    imageUrl: [aceApps,aceProj,aceTerm],
    description: 
    `ACE Apps caters to our members and staff. Built with <strong>Rails, Tailwind, and JavaScript</strong>, along with other Rails <strong>gems </strong>including Stimulus and many more, it renders a cluster of Rails applications with user-friendly integrations that support <strong>ACE's mission</strong>. This app cluster includes tools for member, project, contracts, and time management.`,
    frontTechSatck: ["<strong>Ruby on Rails</strong> ", "<strong>Javascript</strong> "," <strong>Tailwind</strong>"],
    backTechStack:["<strong>Ruby on Rail</strong>", "<strong>SQL</strong>"],
    subTitle: 'American Conservation Expirience',
    link: `https://projects.usaconservation.org/`
  },
  {
    id: 1,
    title: "DevTracker" , 
    imageUrl: [devtracker,devLogin,devWelcome,devSignin],
    description: 
    `
    This app was created as an end-of-year project for my University of Utah coding boot camp. In an agile environment with two teammates and myself, I consider this to be the  <strong>ultimate TODO list</strong>. With a <strong>React</strong> frontend and a <strong>Ruby on Rails</strong> backend, this app will help you organize your job search. 
    This app was created with the following techonologies.`,
    frontTechSatck: [" <strong>React</strong> "," <strong>Device<strong>","  <strong>Yarn<strong> "],
    backTechStack:["<strong>Ruby On Rails</strong> ", " <strong>PostgresQL</strong>"],
    subTitle: 'DevTracker React/Ruby Application',
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
My <strong>GitHub</strong> contains the repositories of projects I have worked on, both current and past. Through an API call, I have fetched and created this carousel of my repositories. To see my activity and explore more, visit my GitHub.
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