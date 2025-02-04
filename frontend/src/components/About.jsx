import React from 'react';
import about from '../images/about3.png';
import about1 from '../images/about4.png';

const About = () => {
  return (
    <>
      <div className="container py-24">
        <h1
          className="max-w-xl font-inter text-4xl md:text-5xl"
          style={{ lineHeight: '1.30' }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          All your digital needs, realized on one platform
        </h1>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-24 mt-14"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="border-t border-slate-900 py-6">
            <h1 className='font-bold mb-2 text-lg'>Website Development</h1>
            <p>A custom, professional website that enhances your online presence, drives engagement, and converts visitors into loyal customers.</p>
          </div>
          <div className="border-t border-slate-900 py-6">
            <h1 className='font-bold mb-2 text-lg'>Marketing Design:</h1>
            <p>Creative designs that capture attention, communicate your message, and boost your sales by aligning with your brand strategy.</p>
          </div>
          <div className="border-t border-slate-900 py-6">
            <h1 className='font-bold mb-2 text-lg'>Grow online</h1>
            <p>Expand your online presence with targeted strategies that attract, engage, and convert leads into loyal customers, ensuring sustained business growth.</p>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="container grid grid-cols-1 md:grid-cols-2 gap-4 py-24"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="">
            <p
              className='text-customLight font-bold text-xl mb-5'
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              HOW WE WORK
            </p>
            <h1
              className='font-inter text-3xl md:text-4xl mb-3'
              style={{ lineHeight: '1.30' }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Everything is well planned, well designed and developed wholeheartedly
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped
            </p>
            <button
              className='font-inter text-xl mt-10 mb-7 inline-block bg-customDark px-8 py-3 rounded-full text-white'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Get Started
            </button>
          </div>

          <div className="grid grid-cols-2 items-center justify-center">
            <img
              className=''
              src={about}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <img
              className=''
              src={about1}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
