import About from './Components/About/About';
import Header from './Components/Header/Header' 
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div style={{backgroundColor: '#eeeeee'}}>
    <Landing />
    <Header />
    <About />
    <Projects />
    </div>

  );
}

export default App;
