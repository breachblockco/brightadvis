
import About from "./components/About/About";
import AboutSection from "./components/AboutSection/AboutSection";
import Card from "./components/Card/Card";
import Footer from "./components/footer/Footer";
import Frame from "./components/Frame/Frame";
import Grid from "./components/Grid/Grid";
import Gridsection from "./components/Gridsection/Gridsection";
import Home from "./components/Home/Home";
import List from "./components/List/List";
import MovingNav from "./components/MovingNav/MovingNav";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import Slider from "./components/Slider/Slider";
import Step from "./components/Step/Step";
function App() {
  return (
    <div>
      <MovingNav/>
      <Navbar />
      <Home/>
      <AboutSection/>
      <Frame/>
    <Slider/>
     <Service/>
     <Gridsection/>
      <Step/>
      <Grid/>
      <Card/>
      <About/>
      <List/>
      <Footer/>
     
    </div>
  );
}

export default App;
