import React from 'react'
import { useState, useEffect} from 'react'
import logo from '../images/logo1.png'
import blacklogo from '../images/logo.png'

const Navbar = () => {
    let [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    
    useEffect(()=>{
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            if(isScrolled !== scrolled){
                setScrolled(isScrolled)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[scrolled])

  return (
    <>
     <header className={`z-50 fixed w-100 w-full py-5 ${scrolled ? 'duration-500 shadow-md backdrop-blur-lg bg-white' : ''}`}>
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-32">
                    {scrolled ? <img src={blacklogo} className="w-[150px] duration-500" alt="" /> : <img src={logo} className="duration-500 w-[150px]" alt="" />}                           
                </div>

                <ul className='md:flex hidden md:flex-row flex-col gap-7 mt-10 md:mt-0'>
                        <li><a href="/" className={`font-inter ${scrolled ? 'text-customDark': 'text-white'}`}>Home</a></li>
                        <li><a href="/about"  className={`font-inter ${scrolled ? 'text-customDark': 'text-white'}`}>About</a></li>
                        <li><a href="" className={`font-inter ${scrolled ? 'text-customDark': 'text-white'}`}>Portofolio</a></li>
                        <li><a href=""  className={`font-inter ${scrolled ? 'text-customDark': 'text-white'}`}>Contact</a></li>      
                 </ul>     

                <nav className={`z-20 lg:hidden absolute lg:static duration-500 md:w-auto md:bg-transparand shadow-lg md:shadow-none top-0 left-0 w-full bg-slate-100 md:bg-transparent px-4 py-5 md:py-0 ${open ? 'top-0 pb-10' : 'top-[-1000%]'}`}>
                    <img src={blacklogo} className="w-[150px] duration-500" alt="" />
                    <ul className='flex sm:hidden md:flex-row flex-col gap-7 mt-10 md:mt-0'>
                        <li><a href="/" className='text-slate-900 font-inter'>Home</a></li>
                        <li><a href="/about" className=' text-slate-900 font-inter'>About</a></li>
                        <li><a href="" className='text-slate-900 font-inter'>Portofolio</a></li>
                        <li><a href="" className='text-slate-900 font-inter'>Contact</a></li>
                        
                    </ul>     

                    <div className="flex md:hidden text-slate-900 mt-9 items-center gap-6 pr-6 pt-3 lg:pr-10">
                        <div className="text-2xl"><ion-icon name="logo-instagram"></ion-icon></div>
                        <div className="text-2xl"><ion-icon name="logo-tiktok"></ion-icon></div>
                        <div className="text-2xl"><ion-icon name="logo-whatsapp"></ion-icon></div>
                    </div>
                </nav>

               
                <div class={`md:block hidden ${scrolled ? 'text-customDark':'text-white'}`}>
                    <div className="flex items-center gap-6 pr-6 pt-3 lg:pr-10">
                        <div className="text-2xl"><ion-icon name="logo-instagram"></ion-icon></div>
                        <div className="text-2xl"><ion-icon name="logo-tiktok"></ion-icon></div>
                        <div className="text-2xl"><ion-icon name="logo-whatsapp"></ion-icon></div>
                     </div>
                </div>

            <div 
                onClick={() => setOpen(!open)} 
                className={`z-20 text-3xl pt-3 md:hidden ${open ? 'text-customDark' : (scrolled ? 'text-customDark' : 'text-white')}`}
                >
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
            </div>
            
        </div>
     </header>
    </>
  )
}

export default Navbar