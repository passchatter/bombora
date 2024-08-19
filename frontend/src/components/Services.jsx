import React from 'react';
import word from '../images/world.png';
import porto9 from '../images/porto6.png'
import website from '../images/website.png'
import Faqitems from './Faqitems';


const services = [
  {
    title: "Pengembangan Website",
    description: "Desain dan fitur website yang disesuaikan dengan kebutuhan bisnis Anda. Mulai dari website perusahaan, portofolio, hingga e-commerce.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
  </svg>
  
  },
  {
    title: "Pengembangan Aplikasi Mobile",
    description: "Mengembangkan aplikasi mobile untuk platform iOS dan Android yang menarik dan fungsional.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
    <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clip-rule="evenodd" />
  </svg>
  
  },
  {
    title: "Desain Grafis",
    description: "Kami menyediakan layanan desain grafis yang meliputi logo, brosur, media sosial, dan desain UI/UX.",
    icon: <ion-icon name="color-palette-outline"></ion-icon>
  },
  {
    title: "Digital Marketing",
    description: "Menawarkan strategi pemasaran digital termasuk iklan media sosial, Google Ads, dan kampanye email.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
  </svg>
  
  },
  {
    title: "Manajemen Media Sosial",
    description: "Membantu Anda mengelola akun media sosial untuk meningkatkan brand awareness dan engagement.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
  </svg>
  
  },
  {
    title: "Maintenance dan Update",
    description: "Layanan pemeliharaan dan pembaruan rutin untuk memastikan website dan aplikasi Anda selalu up-to-date dan berjalan lancar.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
    <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
    <path fill-rule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
  </svg>
  
  }
];

const Services = () => {
  return (
    <>
      <div className="py-24 container">
      <div className="mx-auto ">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-customLight tracking-wide ">Our Service</h2>
          <p className="mt-7 text-5xl leading-8 font-inter tracking-tight text-gray-900">
              The Best Solution for Your Online Needs
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-customLight text-white mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-bl from-[#a7e6ed] to-customLight rounded-2xl border-box py-20 px-16 md:px-32 mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
               <div className="">
                    <h1 className='font-inter text-white text-4xl'>Lets discuss your project & business with us!</h1>
                    <p className='mt-8 font-inter text-slate-200'>A professional website is an asset for your business. Trust us to create your professional website for the best results.</p>
                    <button className='font-inter text-xl mt-10 bg-lightgreen hover:bg-customLight hover:text-white text-customDark duration-200 inline-block  px-8 py-3 rounded-full border border-lightgreen hover:border-white'>Get Started</button>
               </div>
               <div className="flex justify-center">
                <img className='w-[250px]' src={word} alt="" />
               </div>
            </div>
        </div>
      </div>
    </div>

   
    <div className=" text-customDark py-24 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className='text-4xl font-inter mb-6' style={{ lineHeight: '1.30' }}>Why is a Website Important for Your Business?</h1>
          
          <p className='mb-8 mt-7'>
            Trust us to create a professional website that will take your business to the next level. With attractive designs and comprehensive functionality, we will ensure your website becomes an effective tool for business growth.
          </p>
          <button className='hover:bg-lightgreen  bg-customLight hover:text-customDark text-white text-lg px-8 py-3 rounded-full transition duration-200'>
            Order Website Now
          </button>
        </div>
        <div className="flex justify-center">
          <img className="rounded-xl shadow-lg" src={porto9} alt="Mengapa Website Penting" />
        </div>

      </div>
    </div>

    <div className="py-24 h-auto w-full">
      <div className="mx-auto max-w-6xl">
        <h1 className='font-inter text-customDark text-4xl text-center mb-24'>Our Business Process</h1>
      </div>
      <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-24 mt-14">
                  <div className="">
                    <h1 className='px-5 py-2 max-w-max bg-customDark text-2xl font-bold font-inter text-white rounded-full'>1</h1>
                    <h1 className='text-2xl mt-7 mb-3 font-inter text-black'>Set disbursement Instructions</h1>
                    <p className='text-customDark text-sm'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                  </div>
                  <div className="">
                    <h1 className='px-5 py-2 max-w-max bg-customDark text-2xl font-bold font-inter text-white rounded-full'>2</h1>
                    <h1 className='text-2xl mt-7 mb-3 font-inter text-black'>Set disbursement Instructions</h1>
                    <p className='text-customDark text-sm'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                  </div>
                  <div className="">
                    <h1 className='px-5 py-2 max-w-max bg-customDark text-2xl font-bold font-inter text-white rounded-full'>3</h1>
                    <h1 className='text-2xl mt-7 mb-3 font-inter text-black'>Set disbursement Instructions</h1>
                    <p className='text-customDark text-sm'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                  </div>
                  <div className="">
                    <h1 className='px-5 py-2 max-w-max bg-customDark text-2xl font-bold font-inter text-white rounded-full'>4</h1>
                    <h1 className='text-2xl mt-7 mb-3 font-inter text-black'>Set disbursement Instructions</h1>
                    <p className='text-customDark text-sm'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                  </div>
              </div>
      </div>
    </div>
    
    <div className="py-24 w-full">
      <div className="container grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="">
           <img src={website} alt="" />
        </div>
        <div className="">
           <Faqitems/>
        </div>  
      </div>
    </div>


    
    </>
  );
};

export default Services;
