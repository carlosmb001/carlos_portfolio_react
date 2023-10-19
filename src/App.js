import React from "react";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import image1 from './images/projects/fitsquad.png';
import image2 from './images/projects/Recipe.png';
import image3 from './images/projects/social.gif';
import image4 from './images/projects/jate.gif';


const projects = [
  {
    id: 1,
    name: "Fit Squad",
    image: image1,
    description: "Fit Squad is a health & fitness companion app aimed to keep you motivated and on schedule while navigating your busy life.",
    technologies: ["Node.js", "Express.js", "MySQL", "Sequelize" , "Dotenv"],
    gitLink: "https://github.com/carlosmb001/fit_squad",
    liveLink: "https://fit-squad-805c3e11f44f.herokuapp.com/",
  },
  {
    id: 2,
    name: "Recipe Conierge",
    image:image2,
    description: "We have created a website that will help search for recipes and save them to a separate favorites page. Once on the favorites page, it is possible to select ingredients from the recipes and search for local stores that supply them close to your location.",
    technologies: ["Node.js", "Express.js", "MySQL", "Sequelize" , "Dotenv"],
    gitLink: "https://github.com/athenamw/recipeConcierge",
    liveLink: "https://athenamw.github.io/recipeConcierge/",
  },
  {
    id: 3,
    name: "Social Network API",
    image:image3,
    description: "A REST API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose" , "Dotenv"],
    gitLink: "",
    liveLink: "https://www.youtube.com/watch?v=9HfLLEZ3hMI&t=13s",
  },
  {
    id: 4,
    name: "JATE, Text Editor",
    image:image4,
    description: "Step into the future of web apps with this robust Text Editor crafted to meet the standards of Progressive Web Applications (PWA). With an emphasis on offline reliability and efficient data storage, this editor ensures that your notes and code snippets are securely saved and easily accessible. This application makes use of cutting-edge technologies such as the idb package for data management and features a streamlined deployment process for Heroku.",
    technologies: ["Node.js", "Express.js", "indexedDB", "Webpack" , "Workbox"],
    gitLink: "https://github.com/carlosmb001/text_editor_PWA",
    liveLink: "https://text-editor-pwa-cmb-953d51a916c2.herokuapp.com/",
  }
  
];

function App() {
  return <div>
  <Header />
  <Bio />
  <Projects projects={projects} />
  <Contact />
  <Footer />
  </div>
}

export default App;
