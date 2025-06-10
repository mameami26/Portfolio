import NavBar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Service from "./components/Service/service";
import Portfolio from "./components/Portfolio/portfolio"; 
import Contact from  "./components/Contact/contact";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
