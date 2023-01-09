import 'bootstrap/dist/css/bootstrap.min.css'

import {Route, Routes} from 'react-router-dom'


import Navbar from './components/Navbar';

import Home from './Pages/Home';
import Service from './Pages/Service';
import Portfolio from './Pages/Portfolio';
import AbouteMe from './Pages/Aboutme';
import Contactus from './Pages/Contactus';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutme' element={<AbouteMe/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contactus' element={<Contactus/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>

    </>
  );
}

export default App;
