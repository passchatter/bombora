import './App.css';
import Home from './pages/Home';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import contact from './images/whatapp.png'
function App() {

  useEffect(()=>{
    Aos.init()
  },[])
  
  return (
    <>
      <a href="https://wa.me/6282114300284?text=I%20am%20very%20interested%20in%20your%20furniture%20products%20after%20seeing%20the%20collection.%20Can%20you%20provide%20more%20information%20about%20availability%20and%20pricing%20for%20some%20of%20the%20items%20I'm%20interested%20in?" target="_blank" className="fixed md:bottom-10 md:right-10 bottom-7 right-4 z-50 animate-bounce">
        <div className="flex gap-1 items-center">
            <p className="bg-[#fafafa] shadow-md text-titleColor px-3 py-2  rounded-xl">Contact Us</p>
            <img src={contact} alt="" className="w-[55px] md:w-[60px]"/>
        </div>
    </a>
    <Home/>
    </>
   
  );
}

export default App;
