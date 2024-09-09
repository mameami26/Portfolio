import NavBar from "./components/NavBar/navbar";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Portfolio from "./components/Portfolio/portfolio";
import Resume from "./components/Resume/resume";
import Footer from "./components/Footer/footer"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Contact/>
      <Portfolio/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
