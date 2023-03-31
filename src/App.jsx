import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact';
import Profile from './Authentication/Profile';
import Catalog from './Pages/Catalog/Catalog';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Item from './Pages/Item/Item';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import AuthLayout from './Component/AuthLayout/AuthLayout';
import SimpleSlider from './Component/Slider/SimpleSlider';


function App() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  },[])
  return (
      <div className='w-full px-0 -z-50 flex flex-col justify-between h-[100vh] dark:bg-black'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/s' element={<SimpleSlider />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/catalog' element={<Catalog />}></Route>
        <Route path='/catalog/:id' element={<Item />}></Route>
        <Route path='/' element={<AuthLayout />}>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          {/* <Route path='/forgot-password' element={<ForgotPassword />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
