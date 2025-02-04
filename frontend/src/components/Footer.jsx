import React from 'react'
import gambar2 from '../images/logo1.png'

const Footer = () => {
  return (
    <>
      <div className="footer md:pt-32 md:pb-20 pt-20 pb-14 bg-customDark text-[#bbb] text-[.9rem] mt-20">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:flex md:justify-between">
            <div className="header max-w-sm">
              <div className="flex items-center gap-3">
                <img className='w-[130px] md:w-[200px]' src={gambar2} alt="Bombora - Website Development Experts" /> 
              </div>
              <p className="mt-3 md:text-[.9rem] text-[.9rem]">
                Bombora delivers exceptional websites tailored to your needs. Our expert team ensures your site stands out with stunning design and seamless functionality.
              </p>
            </div>

            <div className="lg:max-w-[250px]">
              <h1 className="text-white md:text-xl text-lg mb-3">Get in Touch</h1>
              <p className="mb-2">Jimbaran, Kuta Selatan, Badung</p>
              <p className="flex items-center mb-2 gap-2">
                <ion-icon name="mail" className="text-white text-xl"></ion-icon>
                <a href="mailto:info@bomboraweb.com" target="_blank" rel="noopener noreferrer">info@bomboraweb.com</a>
              </p>
              <a href="https://wa.me/6282114300284?text=I'm%20interested%20in%20your%20services.%20Can%20you%20provide%20more%20information?" target="_blank" rel="noopener noreferrer">
                <p className="flex items-center mb-2 gap-2">
                  <ion-icon name="call" className="text-white text-xl"></ion-icon>
                  +6282114300284
                </p>
              </a>
            </div>

            <div className="">
              <h1 className="text-white md:text-xl text-lg mb-3">Quick Links</h1>
              <ul className=''>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#gallery">Portfolio</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>

            <div className="">
              <h1 className="text-white md:text-xl text-lg mb-3">Why Us?</h1>
              <ul className="list-disc ml-6">
                <li>Custom Designs</li>
                <li>Latest Tech</li>
                <li>Experienced Team</li>
                <li>Personalized Support</li>
                <li>Transparent Pricing</li>
              </ul>
            </div>
          </div>
          <p className="text-center md:mt-28 mt-20">© 2024 <span className="text-lightgreen">bomboraweb</span>. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
