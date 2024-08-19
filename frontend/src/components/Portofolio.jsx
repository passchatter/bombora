import React from 'react'
import porto1 from '../images/porto9.png'
import porto2 from '../images/porto2.png'
import porto3 from '../images/porto3.png'
import porto4 from '../images/porto4.png'
import porto5 from '../images/porto5.png'
import porto6 from '../images/porto12.png'
import porto7 from '../images/porto7.png'
import gambar from '../images/gambar.png'

const Portofolio = () => {
  return (
    <>
        <div className="bg-customDark h-auto pt-24 pb-32">
            <div className="container">
               <div className="text-center max-w-4xl mx-auto">
                    <p className='font-inria text-5xl text-white' style={{ lineHeight: '1.30' }}>Website templates that set you <br /> up for success</p>
                    <p className='font-inria text-lg text-gray-200 mt-6'>Get headstart on your journey with 900+ free, customizable website templates, strategically researched and tailored for every industry - or start from a blank canvas on our website builder.</p>
                    <button className='font-inter text-xl mt-10 mb-7 hover:bg-lightgreen hover:text-customDark duration-200 inline-block text-white px-8 py-3 rounded-full border border-white bg-customLight'>Get Started</button>
               </div>
               <div className="overflow-x-scroll whitespace-nowrap mt-9">
                   <img className="w-[650px] h-[370px] inline-block mr-6 rounded-lg" src={porto5} alt="" />
                   <img className="w-[650px] h-[370px] inline-block mr-6 rounded-lg" src={porto7} alt="" />
                   <img className="w-[650px] h-[370px] inline-block mr-6 rounded-lg" src={porto6} alt="" />
                   <img className="w-[650px] h-[370px] inline-block mr-6 rounded-lg" src={porto4} alt="" />
                   <img className="w-[650px] h-[370px] inline-block mr-6 rounded-lg" src={porto3} alt="" />
                   <img className="w-[650px] h-[370px] inline-block mr-6 rounded-lg" src={porto1} alt="" />
                   <img className="w-[650px] h-[370px] inline-block mr-6 rounded-lg" src={porto2} alt="" />
               </div>
            </div>
        </div>
        <div className="container py-32">
          <div className="grid grid-cols-2 items-center gap-6 justify-around ">
            <div className="">
              <h1 className='font-inter text-customDark text-4xl md:text-5xl' style={{ lineHeight: '1.30' }}>A website builder engineered for growth</h1>
            </div> 
          </div>
          <div className="container mt-4 px-0">
              <div className="grid md:grid-cols-4 gap-5 grid-cols-1 md:gap-24 mt-14">
                  <div className="border-t border-slate-900 py-6">
                      <h1 className='font-bold mb-2 text-lg'>Faster loading</h1>
                      <p>Wix is designed for performance so your site loads faster.</p>
                  </div>
                  <div className="border-t border-slate-900 py-6">
                      <h1 className='font-bold mb-2 text-lg'>Built with SEO in mind</h1>
                      <p>Get the SEO capabilities you need to optimize your site for search visibility.</p>
                  </div>
                  <div className="border-t border-slate-900 py-6">
                      <h1 className='font-bold mb-2 text-lg'>Enterprise-grade security</h1>
                      <p>We keep your site and visitors’ data protected, 24/7.</p>
                  </div>
                  <div className="border-t border-slate-900 py-6">
                      <h1 className='font-bold mb-2 text-lg'>Resilient infrastructure</h1>
                      <p>Multi-cloud hosting ensures 99.9% uptime, even during traffic spikes.</p>
                  </div>
              </div>
          </div>
        </div>
        <div className="bg-gradient-to-tl from-customDark to-customLight py-24">
            <div className="container">
               <div className="grid md:grid-cols-2 grid-cols-1 gap-9 items-center justify-center">
                <div className="">
                  <img src={gambar} className="w-[500px]" alt="" />
                </div>
                  <div className="">
                    <h1 className='font-inter text-white text-5xl' style={{ lineHeight: '1.30' }}>We are the right people for your business </h1>
                    <ul className='mt-10'>
                      <li className='mt-7 flex gap-4 items-center'>
                        <p className='text-white text-xl'>creating websites using the CMS platform according to client needs.</p>
                      </li>
                      <li className='mt-7 flex gap-4 items-center'>
                        <p className='text-white text-xl'>integrate social media into the website, so as to expand business reach and strengthen branding.</p>
                      </li>
                      <li className='mt-7 flex gap-4 items-center'>
                        <p className='text-white text-xl'>improve search engine optimization through proper SEO techniques. increase the visibility and popularity of the business</p>
                      </li>
                      <li className='mt-7 flex gap-4 items-center'>
                        <p className='text-white text-xl'>it is important to create a responsive website so that it can adjust the appearance to the screen size of the device used.</p>
                      </li>
                    </ul>

                  </div>
               </div>
            </div>
        </div>

    </>
  )
}

export default Portofolio


