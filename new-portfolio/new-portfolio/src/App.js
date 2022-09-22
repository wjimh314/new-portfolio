
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Naviagation";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio.js";
import Resume from "./components/Resume.js"
function App() {
  return (
    
      <>
    <Navigation/>
    <Header/>
    <AboutMe/>
    <Portfolio/>
    <Resume/>
</>
  );
}

export default App;
