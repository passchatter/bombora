import React from 'react';
import Navbar from '../components/Navbar';
import home from '../images/home.png';
import mobile from '../images/mobile.png';
import About from '../components/About';
import Portofolio from '../components/Portofolio';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <div
        className="bg-gradient-to-tl from-customDark to-customLight h-auto pb-28 2xl:pb-60 w-full flex items-center pt-40 2xl:pt-52"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <div className="container mx-auto text-center">
          <div className="">
            <h1
              className='text-white 2xl:text-6xl text-5xl font-inter'
              style={{ lineHeight: '1.30' }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Transform Your Business with <span className='text-lightgreen font-bold'>Website Solutions</span>
            </h1>
            <div
              className="max-w-4xl text-center mx-auto mt-7"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <p className='font-inria text-slate-200 text-md xl:text-xl'>
                Get a professional website that is responsive and easy for potential customers to find, so that your business looks more credible and is able to increase sales in the digital world.
              </p>
            </div>
            <div
              className="flex gap-3 justify-center items-center mt-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <button className='hover:bg-customLight border border-lightgreen hover:border-white duration-200 hover:text-white font-inter text-xl mt-10 mb-7 inline-block text-customDark px-8 py-3 rounded-2xl bg-lightgreen'>
                Get Started
              </button>
            </div>
          </div>

          <div
            className="flex items-start gap-4 justify-center p-5 md:mt-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="hidden md:block">
              <div
                className="mt-5 p-4 py-6 w-[300px] rounded-2xl bg-white/30 border border-white"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="space-y-5">
                  <div className="flex justify-start">
                    <div className="bg-[#97e1e9] text-black p-4 text-sm rounded-xl">
                      Hi, can you create a website
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-gray-300 text-black p-4 text-sm rounded-xl">
                      Sure, what pages and design
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-[#97e1e9] text-black p-4 text-sm rounded-xl">
                      Product, blog, and contact
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-[300px] mt-5 bg-white/30 border p-4 border-white flex flex-col justify-start items-start rounded-2xl"
                
              >
                <p className='text-white'>site theme</p>
                <div className="mt-4 flex p-2 border border-white rounded-lg">
                  <div className="w-[60px] h-[37px] bg-[#97e1e9]"></div>
                  <div className="w-[60px] h-[37px] bg-[#95bedf]"></div>
                  <div className="w-[60px] h-[37px] bg-[#f6e7e1]"></div>
                  <div className="w-[60px] h-[37px] bg-[#003c64]"></div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block mt-5 p-3 w-[600px] rounded-2xl bg-white/30 border border-white">
              <img
                className='rounded-2xl w-full h-[370px]'
                src={home}
                alt="Home"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </div>

            <div className="">
              <div
                className="md:mt-5 w-[250px] h-[40px] bg-white/30 border text-white border-white rounded-2xl flex items-center justify-center"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                https://bomboraweb.com
              </div>
              <div
                className="mt-5 p-3 w-[250px] rounded-2xl bg-white/30 border border-white"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="1200"
              >
                <img
                  className='rounded-2xl w-full h-[310px]'
                  src={mobile}
                  alt="Mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Portofolio/>
      <Services/>
      <Footer/>
    </>
  );
}

export default Home;
