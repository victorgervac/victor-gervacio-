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
    This app was created with the following techonologies. <strong>Vue</strong>.`,
    frontTechSatck: ["Drag and Drop","Router","React","Device","Yarn"],
    backTechStack:["Ruby on rails", "Gems", "PostgresQL"],
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
    frontTechSatck: ["React", "Number Format", "Styled Components", "Yarn"],
    backTechStack:["Firebase"],
    subTitle: 'AmzClone React application',
    link: `https://clone-9de46.web.app/`
  }
]
export const githubDescription =` 
  My github contains the repositories that represent content that 
  I have created and still developing. You can load the repositories 
  by clicking the button below or following the green link 
  to see my activty and explore more.
`
export const aboutMe = `
  Hi I am Victor.  I was raised in Acapulco, Mexico before moving to Utah.  
  Since then I have lived in Park City graduating from Park City High School in 2012 &
  attending Salt Lake Community College right after & completed a full-stack software developer certificate offered by the University of Utah.  
  I love nature, 
  taking long hikes and helping others. Dancing is one of my many passions and I was a scholar at the Wasatch Dance Studio.  
  I have attended many leadership conferences and was a part of L.I.A (Latinos In Action) during high school.I also enjoy giving back to the community 
  by Volunteering for organization such as park city Christian Center whom provides resources to the community.
  I am seeking the challenge of solving real world problems through coding in a team environment.  My interests include all areas of
  development including application front and back end work, as well as testing and performance.
`