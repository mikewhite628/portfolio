import About from './Components/About/About'; 
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import './App.css';
import Header from './Components/Header/Header';



function App() {
  return (
    <div style={{backgroundColor: '#eeeeee'}} className='container'>
      <Landing />
      <About />
      <Projects />
    </div>

  );
}

export default App;
