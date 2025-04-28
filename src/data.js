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


export const techStack = [
  {
    icon: "diamond",
    label: "Ruby on Rails",
    color: "ruby",
    link: "https://rubyonrails.org/",
    description: "A powerful backend framework focused on convention over configuration."
  },
  {
    icon: "js",
    label: "JavaScript",
    color: "javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description: "The programming language of the web, essential for interactivity."
  },
  {
    icon: "react",
    label: "React",
    color: "react",
    link: "https://react.dev/",
    description: "A modern library for building user interfaces with components."
  }

];
export const projects = [
  {
    id: 3,
    title: "ACE Apps" , 
    imageUrl: [aceApps,aceProj,aceTerm],
    description: 
    `ACE Apps caters to our members and staff. Built with <strong>Rails, Tailwind, and JavaScript</strong>, along with other Rails <strong>gems </strong>including Stimulus and many more, it renders a cluster of Rails applications with user-friendly integrations that support <strong>ACE's mission</strong>. This app cluster includes tools for member, project, contracts, and time management.`,
    frontTechSatck: ["<strong>Ruby on Rails</strong> ", "<strong>Javascript</strong> "," <strong>Tailwind</strong>"],
    backTechStack:["<strong>Ruby on Rail</strong>", "<strong>SQL</strong>"],
    subTitle: 'American Conservation Experience',
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
My <strong>GitHub</strong> contains the repositories of projects I have worked on, both current and past. Through an API call, I have fetched and created this carousel of my repositories and my github activity. explore more at my GitHub.
`
export const aboutMe = `
<p>Hello, I'm Victor! I am a <strong>full-stack software developer</strong> certified by the University of Utah.</p> 

<p>I enjoy <strong>solving problems</strong> and working in environments where I can <strong>learn from others</strong> and contribute to building meaningful solutions.</p>

<p>Outside of coding, I’m passionate about the outdoors — from <strong>hiking</strong>, <strong>biking</strong>, and <strong>snow sports</strong> to simply exploring nature.</p>

<p>I've participated in several <strong>leadership conferences</strong> and am always seeking ways to grow both personally and professionally. My technical interests span across <strong>front-end and back-end development</strong>, along with a focus on <strong>testing</strong> and <strong>performance optimization</strong>.</p>
`
