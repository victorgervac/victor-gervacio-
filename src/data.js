import devtracker from "./assets/images/DevTracker.png"
import devLogin from "./assets/images/DevLogin.png"
import devWelcome from "./assets/images/DevWelcome.png"
import devSignin from  "./assets/images/DevSigin.png"
import amazoneclone from "./assets/images/Amazoneclone.png"
import amazonecloneOne from "./assets/images/amazoneClone1.png"
import amazoneshop from "./assets/images/AmazoneShoppingCart.png"
import amazonelog from "./assets/images/AmazoneLogin.png"
import aceApps from "./assets/images/AceLogoFull.png"
import aceProj from "./assets/images/ace_proj.png"
import aceTerm from "./assets/images/ace_term.png"
import profileEdit from "./assets/images/profileEdit.png"
import condoLogin from "./assets/images/condoLogin.png"
import dashboard from "./assets/images/dashboard.png"
import reservations from "./assets/images/reservations.png"

export const describeLine=`
  who seeks the challenge of <strong>solving</strong> real world problems 
  through coding in a team environment. Interested in all areas of
  <strong>development</strong> including application 
  <strong>front and back end</strong> work as well as <strong>testing</strong> and performance.
`

export const techStack = [
  {
    icon: "ruby",
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
  },
  {
    icon: "swift",
    label: "Swift",
    color: "swift",
    link: "https://www.swift.org/",
    description: "A general-purpose programming language that’s approachable for newcomers and powerful for experts."
  }

];
export const projects = [

  {
    id: 5,
    title: "Property Operations Dashboard" , 
    imageUrl: [condoLogin,profileEdit,dashboard,reservations],
    description: 
    `A full-stack <strong>Ruby on Rails</strong> application built to streamline property management workflows for short-term rentals. The platform integrates with the <strong>Hostaway API</strong> to fetch and sync real-time listings, reservations to construct expenses and cleaning tasks. Provides CRUD operations and Dynamically calculates weekly performance trends and changes in activity across key metrics.`,
    frontTechSatck: ["<strong>Ruby on Rails</strong> ", "<strong>PostgreSQ</strong> "," <strong>Tailwind</strong>","<strong>Stimulus.js</strong>"],
    backTechStack:["<strong>Hostaway API </strong>"],
    subTitle: 'Property and expense tracker',
    link: `/`
  },
  
  {
    id: 3,
    title: "ACE Apps" , 
    imageUrl: [aceApps,aceProj,aceTerm,],
    description: 
    `ACEapps is a custom non-profit contract management suite of applications including reimbursement tracking, time tracking, invoicing, contract management, project management, and scheduling. Built with Rails, Tailwind, and JavaScript, along with other <strong> Rails gems including Stimulus</strong> and many more, it renders a cluster of <strong> Rails </strong> applications with user-friendly integrations that support thousands of users for ACE's mission.`,
    frontTechSatck: ["<strong>Ruby on Rails</strong> ", "<strong>Javascript</strong> "," <strong>Tailwind</strong>"],
    backTechStack:["<strong>Ruby on Rail</strong>", "<strong>SQL</strong>"],
    subTitle: 'American Conservation Experience',
    link: `https://projects.usaconservation.org/`
  }, 
  {
    id: 2,
    title: "Amazone Clone" , 
    imageUrl: [amazoneclone,amazonecloneOne,amazoneshop,amazonelog],
    description: 
    `I have created a <strong>frontend</strong> clone to the Amazon store to test out my <strong>React</strong> developer skills,
    while writing <strong>JSX</strong>. Follow the link to open the app,
    and login with a google account. While being protected by google's <strong>firebase</strong> cloud <strong>database</strong>.`,
    frontTechSatck: ["<strong>React</strong> ", " <strong>Styled Components</strong> ", " <strong>Yarn</strong> "],
    backTechStack:["<strong>Firebase</strong>"],
    subTitle: 'Amazone React Clone',
    link: `https://clone-9de46.web.app/`
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

//   {
//     id: 3,
//     title: "Breaking Bad Type Ahead",
//     imageUrl: 
//   }
]
export const githubDescription =` 
My <strong>GitHub</strong> showcases repositories from both current and past projects. These repositories feature a variety of programming languages including <strong>Ruby</strong>, <strong>JavaScript</strong> and <strong>Python</strong>, as well as frameworks like Ruby on Rails, React and Swift. Using an API call, I’ve fetched and created this carousel to display my repositories and GitHub activity.
Explore more on my GitHub!
`
export const aboutMe = `
<p>Hello, I'm Victor! I am a <strong>full-stack software developer</strong> certified by the University of Utah.</p> 

<p>I enjoy <strong>solving problems</strong> and working in environments where I can <strong>learn from others</strong> and contribute to building meaningful solutions.</p>

<p>Outside of coding, I’m passionate about the outdoors from <strong>hiking</strong>, <strong>biking</strong>, and <strong>snow sports</strong> to simply exploring nature.</p>

<p>I've participated in several <strong>leadership conferences</strong> and am always seeking ways to grow both personally and professionally. My technical interests span across <strong>front-end and back-end development</strong>, along with a focus on <strong>testing</strong> and <strong>performance optimization</strong>.</p>
`
