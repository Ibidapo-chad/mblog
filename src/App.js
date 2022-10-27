import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features.js';
import Testimonial from './components/Testimonial.js';
import Footer from './components/Footer.js';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/pricing' element= {<Pricing />} />
        <Route path='/contacts' element= {<Contacts />} />
      </Routes>

      <Nav />
      <Hero />
      <Features />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
