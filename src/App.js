import About from './Components/About/About';
import Header from './Components/Header/Header' 
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import Tools from './Components/About/Tools'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div style={{backgroundColor: '#eeeeee'}} className='container'>
    </div>
      <Route path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </Router>

  );
}

export default App;
