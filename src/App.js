import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';


// import { Element } from 'react-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
    </ParallaxProvider>
  );
}

export default App;
