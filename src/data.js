import devtracker from "./assets/images/DevTracker.png"
import amazoneclone from "./assets/images/Amazoneclone.png"

export const projects = [
  {
    id: 1,
    title: "DevTracker" , 
    imageUrl: devtracker,
    description: 
    `This app was created in an <strong>agile environment</strong> with two team mates and myself.
    I consider this to be the <strong>ultimate TODO list</strong> to help your job search. 
    This app was created with the following techonologies. <strong>Vue</strong>.`,
    frontTechSatck: ["Drag and Drop","Router","React","Device","Yarn"],
    backTechStack:["Ruby on rails", "Gems", "PostgresQL"],
    subTitle: 'React application',
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
    frontTechSatck: ["React", "Number Format", "Styled Components", "Yarn"],
    backTechStack:["Firebase"],
    subTitle: 'React application',
    link: `https://clone-9de46.web.app/`
  }
]
export const githubDescription =` 
  My github contains the repositories that represent content that 
  I have created and still developing. You can load the repositories 
  by clicking the button below or following the green link 
  to see my activty and explore more.
`
  
