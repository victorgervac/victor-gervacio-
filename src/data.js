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
  who builds tools that <strong>eliminate manual work</strong>  from automating rental operations across 10 properties
  to shipping full-stack Rails applications used many users. I care about clean code, real business outcomes,
  and systems that <strong>keep running when you're not watching</strong>.
`

export const techStack = [
  {
    icon: "ruby",
    label: "Ruby on Rails",
    accent: "#CC342D",
    link: "https://rubyonrails.org/",
    description: "A powerful backend framework focused on convention over configuration."
  },
  {
    icon: "js",
    label: "JavaScript",
    accent: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description: "The programming language of the web, essential for interactivity."
  },
  {
    icon: "react",
    label: "React",
    accent: "#61DAFB",
    link: "https://react.dev/",
    description: "A modern library for building user interfaces with components."
  },
  {
    icon: "swift",
    label: "Swift",
    accent: "#FA7343",
    link: "https://www.swift.org/",
    description: "A general-purpose programming language that’s approachable for newcomers and powerful for experts."
  },
  {
    icon: "html",
    label: "HTML5",
    accent: "#E34F26",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    description: "The structural foundation of every page on the web."
  },
  {
    icon: "css",
    label: "CSS3",
    accent: "#1572B6",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description: "Styling, layout, and animation for modern, responsive interfaces."
  },
  {
    icon: "tailwind",
    label: "Tailwind CSS",
    accent: "#38BDF8",
    link: "https://tailwindcss.com/",
    description: "A utility-first CSS framework for building custom designs quickly."
  },
  {
    icon: "node",
    label: "Node.js",
    accent: "#3C873A",
    link: "https://nodejs.org/",
    description: "A JavaScript runtime for building fast, scalable backend services."
  },
  {
    icon: "postgres",
    label: "PostgreSQL",
    accent: "#336791",
    link: "https://www.postgresql.org/",
    description: "A reliable, feature-rich relational database for production apps."
  },
  {
    icon: "git",
    label: "Git",
    accent: "#F05032",
    link: "https://git-scm.com/",
    description: "Version control for tracking changes and collaborating with teams."
  },
  {
    icon: "firebase",
    label: "Firebase",
    accent: "#FFCA28",
    link: "https://firebase.google.com/",
    description: "A cloud platform for authentication, databases, and hosting."
  },
  {
    icon: "figma",
    label: "Figma",
    accent: "#A259FF",
    link: "https://www.figma.com/",
    description: "Design and prototyping tool used for UI/UX exploration."
  }
];
export const projects = [

  {
    id: 5,
    title: "Property Operations Dashboard",
    imageUrl: [condoLogin, profileEdit, dashboard, reservations],
    impact: [
      "Manages operations across <strong>short-term rental properties</strong>",
      "Automated syncing of reservations, cleaning schedules, and expenses from <strong>Hostaway API</strong>",
      "Scripts analyze <strong>historical booking patterns</strong> to surface peak demand windows",
      "Automated <strong>mass SMS notifications</strong> to guests and cleaning crews",
      "Replaced hours of manual data entry with a <strong>single dashboard view</strong>",
    ],
    description:
      `Built to eliminate manual operations for a short-term rental portfolio. The platform pulls live reservation and listing data from the <strong>Hostaway API</strong>, syncs it to a PostgreSQL database, and runs background scripts that analyze past booking dates to identify when guests are most likely to book. Cleaning schedules are generated automatically from incoming reservations, and <strong>mass SMS scripts</strong> notify crews without any manual work. The result: a single dashboard that replaces spreadsheets, group texts, and manual calendar checks across 10 properties.`,
    frontTechSatck: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "Stimulus.js"],
    backTechStack: ["Hostaway API"],
    subTitle: "Short-term rental automation ",
    link: `/`
  },
  
  {
    id: 3,
    title: "ACE Apps",
    imageUrl: [aceApps, aceProj, aceTerm],
    impact: [
      "Used by <strong>hundreds of conservation corps members</strong> across the US",
      "Replaced paper-based processes for <strong>contract management, invoicing, and time tracking</strong>",
      "Modular suite of Rails apps sharing a unified auth and data layer",
      "Integrated <strong>reimbursement tracking and scheduling</strong> for field crews",
    ],
    description:
      `ACEapps is a custom non-profit contract management suite built for <strong>American Conservation Experience</strong>, supporting users. The platform covers reimbursement tracking, time tracking, invoicing, contract management, project management, and crew scheduling  all built with <strong>Ruby on Rails</strong>, Tailwind, Stimulus, and a shared PostgreSQL backend. I worked on features that directly reduced administrative burden for field teams managing conservation projects across the country.`,
    frontTechSatck: ["Ruby on Rails", "JavaScript", "Tailwind CSS"],
    backTechStack: ["Ruby on Rails", "PostgreSQL"],
    subTitle: "American Conservation Experience ",
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
    frontTechSatck: ["React", "Styled Components", "Yarn"],
    backTechStack: ["Firebase"],
    subTitle: 'Amazone React Clone',
    link: `https://clone-9de46.web.app/`
  },
  {
    id: 1,
    title: "DevTracker",
    imageUrl: [devtracker, devLogin, devWelcome, devSignin],
    impact: [
      "Built in an <strong>agile team of 3</strong> as a capstone project",
      "Full-stack with <strong>React frontend + Rails API backend</strong>",
      "Tracks job applications, contacts, and follow-up tasks in one place",
    ],
    description:
      `A job search management app built as a capstone at the University of Utah coding bootcamp. Working in an agile team of three, we designed and shipped a full-stack application with a <strong>React</strong> frontend and <strong>Ruby on Rails</strong> API backend giving job seekers one organized place to track applications, contacts, and next steps.`,
    frontTechSatck: ["React", "Yarn"],
    backTechStack: ["Ruby on Rails", "PostgreSQL"],
    subTitle: "Job search tracker  University of Utah capstone",
    link: "",
  },
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

// ─── ADDITIONAL EXPORTS ───────────────────────────────────────────────
export const cybersecurity = {
  title: "Google Cybersecurity Certificate",
  status: "In Progress ",
  skills: [
    "Reading and analyzing TCP dumps",
    "SQL queries for log analysis and threat hunting",
    "Linux file permission management",
    "Network security fundamentals",
  ],
};
