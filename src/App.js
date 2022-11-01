import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/mblog' element= {<Home />} />
        <Route path='/pricing' element= {<Pricing />} />
        <Route path='/contacts' element= {<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
