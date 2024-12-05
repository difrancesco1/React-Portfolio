import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav';
import Hero from './components/hero';
import WorkCard from './components/card-work';
import About from './components/about/About';
import WorkMedia from './components/my-work/ProjectMedia';

function App() {

    return (
        <div className='main'>
        <NavBar />
        <Hero />
        <About />
        <section className='my-work'>
          <p className='head-text'>My Work</p>
          <div className='card-cont-work'>
            <WorkCard />
            <WorkMedia />
          </div>
        </section>
        </div>
  );
}

export default App;
