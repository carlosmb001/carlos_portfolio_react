import React from "react";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import image1 from './images/projects/fitsquad.png';
import image2 from './images/projects/Recipe.png';
import image3 from './images/projects/pay_it_forward.png';
import image4 from './images/projects/jate.gif';


const projects = [
  {
    id: 1,
    name: "Fit Squad",
    image: image1,
    description: "Fit Squad is a health & fitness companion app aimed to keep you motivated and on schedule while navigating your busy life. The app allows you to create a profile, set goals, track your progress, and be able to look at what other people have done to get inspired. ",
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
    name: "Pay It Forward",
    image:image3,
    description: "Pay it Forward is a social network designed to inspire, connect, and empower individuals to create a more compassionate and caring world. Facilitate volunteer engagement, encourage acts of kindness, and strengthen the bonds within communities.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose" , "Dotenv"],
    gitLink: "https://github.com/chandraucb/payitforward.git",
    liveLink: "https://payitforward-app-46493cd9589e.herokuapp.com/",
  },
  { 
    id: 4,
    name: "JATE, Text Editor",
    image:image4,
    description: "Test editor Progressive Web Applications (PWA). This editor ensures that your notes and code snippets are securely saved and easily accessible. This application makes use of cutting-edge technologies such as the idb package for data management.",
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
