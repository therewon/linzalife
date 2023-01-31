import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';
import Catalog from './Pages/Catalog/Catalog';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Item from './Pages/Item/Item';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


function App() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  },[])
  return (
    <div className="App">
      <div className='container mx-auto px-0'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/catalog' element={<Catalog />}></Route>
        <Route path='/catalog/:id' element={<Item />}></Route>
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
