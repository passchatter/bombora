import React from 'react';
import porto1 from '../images/porto9.png';
import porto2 from '../images/porto2.png';
import porto3 from '../images/porto3.png';
import porto4 from '../images/porto4.png';
import porto5 from '../images/porto5.png';
import porto6 from '../images/porto12.png';
import porto7 from '../images/porto7.png';
import gambar from '../images/gambar.png';

const Portofolio = () => {
  return (
    <>
      <div
        className="bg-customDark h-auto pt-24 pb-32"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <p
              className='font-inria text-3xl md:text-4xl text-white'
              style={{ lineHeight: '1.30' }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Website templates that set you up for success
            </p>
            <p
              className='font-inria text-md md:text-lg text-gray-200 mt-6'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Discover how our tailored solutions have transformed businesses. From standout websites to impactful marketing, our work speaks for itself. Let our results inspire your next project.
            </p>
            <button
              className='font-inter text-xl mt-10 mb-7 hover:bg-lightgreen hover:text-customDark duration-200 inline-block text-white px-8 py-3 rounded-full border border-white bg-customLight'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Get Started
            </button>
          </div>
          <div
            className="overflow-x-scroll whitespace-nowrap mt-9"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto5}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto7}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto6}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto4}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto3}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto1}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="container py-32"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <div className="">
          <h1
            className='font-inter text-customDark text-4xl md:text-5xl'
            style={{ lineHeight: '1.30' }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            A Website Builder Optimized for Growth
          </h1>
        </div>
        <div className="container mt-4 px-0">
          <div
            className="grid md:grid-cols-4 gap-5 grid-cols-1 md:gap-24 mt-14"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="border-t border-slate-900 py-6">
              <h1 className='font-bold mb-2 text-lg'>Speed that Delivers</h1>
              <p>Our platform is engineered for fast load times, ensuring your site performs at its best.</p>
            </div>
            <div className="border-t border-slate-900 py-6">
              <h1 className='font-bold mb-2 text-lg'>SEO-Ready Design</h1>
              <p>We provide the tools you need to enhance your site’s visibility in search engines.</p>
            </div>
            <div className="border-t border-slate-900 py-6">
              <h1 className='font-bold mb-2 text-lg'>Robust Security</h1>
              <p>Your site and visitor data are safeguarded with enterprise-level protection, 24/7.</p>
            </div>
            <div className="border-t border-slate-900 py-6">
              <h1 className='font-bold mb-2 text-lg'>Reliable Hosting</h1>
              <p>With multi-cloud infrastructure, enjoy 99.9% uptime even during high-traffic periods.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gradient-to-tl from-customDark to-customLight py-24"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <div className="container">
          <div
            className="grid md:grid-cols-2 grid-cols-1 gap-9 items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="">
              <img
                src={gambar}
                className="w-[500px]"
                alt=""
                data-aos="fade-right"
                data-aos-duration="1000"
              />
            </div>
            <div className="">
              <h1
                className='font-inter text-white text-4xl md:text-5xl'
                style={{ lineHeight: '1.30' }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                We are the right people for your business
              </h1>
              <ul className='mt-10'>
                <li
                  className='mt-7 flex gap-4 items-center'
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <p className='text-white text-md md:text-xl'>Creating websites using the CMS platform according to client needs.</p>
                </li>
                <li
                  className='mt-7 flex gap-4 items-center'
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <p className='text-white text-md md:text-xl'>Integrate social media into the website, so as to expand business reach and strengthen branding.</p>
                </li>
                <li
                  className='mt-7 flex gap-4 items-center'
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <p className='text-white text-md md:text-xl'>Improve search engine optimization through proper SEO techniques. Increase the visibility and popularity of the business.</p>
                </li>
                <li
                  className='mt-7 flex gap-4 items-center'
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <p className='text-white text-md md:text-xl'>Create a responsive website so that it can adjust the appearance to the screen size of the device used.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portofolio;
