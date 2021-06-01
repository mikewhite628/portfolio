import About from './Components/About/About'; 
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'




function App() {
  return (
    <Container fluid className='app no-padding'>
      <Landing />
      <About />
      <Projects />
    </Container>

  );
}

export default App;
