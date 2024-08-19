import React from 'react'
import about from '../images/about3.png'
import about1 from '../images/about4.png'

const About = () => {
  return (
    <>
        <div className="container py-24">
             <h1 className="max-w-xl font-inter text-5xl" style={{ lineHeight: '1.30' }}>One platform, infinite possibilities</h1>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-24 mt-14">
                <div className="border-t border-slate-900 py-6">
                    <h1 className='font-bold mb-2 text-lg'>Build a website</h1>
                    <p>Design with a full suite of intuitive tools and powerful AI to create the site you want.</p>
                </div>
                <div className="border-t border-slate-900 py-6">
                    <h1 className='font-bold mb-2 text-lg'>Manage your business</h1>
                    <p>Streamline your day-to-day with built-in business solutions, tailored to your needs.</p>
                </div>
                <div className="border-t border-slate-900 py-6">
                    <h1 className='font-bold mb-2 text-lg'>Grow online</h1>
                    <p>Expand your reach and monetize your website with integrated tools built for your success.</p>
                </div>
             </div>
        </div>

        <div className="">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4  py-24">
                <div className="">
                    <p className='text-customLight font-bold text-xl mb-5'>HOW WE WORK</p>
                    <h1 className='font-inter text-4xl mb-3' style={{ lineHeight: '1.30' }}>Everything is well planned, well deigned and developed wholeheartedly</h1>
                    <p >Careful planning make us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped</p>
                    <button className='font-inter text-xl mt-10 mb-7 inline-block bg-customDark px-8 py-3 rounded-full text-white'>Get Started</button>
                </div>

                <div className="grid grid-cols-2 items-center justify-center">
                    <img className='' src={about} alt="" />
                    <img className='' src={about1} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default About