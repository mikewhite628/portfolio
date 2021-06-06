import About from './Components/About/About'; 
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'




function App() {
  return (
    <Container fluid className='app no-padding'>
      <Helmet>
        <title>Michael White</title>
        <meta name='description' content='A Front End Web Developer and USMC Veteran' /> 
      </Helmet>
      <Landing />
      <About />
      <Projects />
    </Container>

  );
}

export default App;
