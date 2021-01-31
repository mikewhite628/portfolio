import About from './Components/About/About'; 
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div style={{backgroundColor: '#eeeeee'}} className='container'>
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      </div>
    </Router>

  );
}

export default App;
