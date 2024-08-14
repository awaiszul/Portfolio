import React from 'react'

const Services = () => {
  return (
    <>
  <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center text-[#f4db7d] mb-8">Our Services</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-orange-500 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Front-end Development</h2>
            <p className="text-white">Expertise in HTML, CSS, JavaScript, and frameworks like React and Angular.Pixel perfect user interference and responsive designs</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl text-orange-600 font-bold mb-4">Back-end Development</h2>
            <p className="text-gray-600">Proficient in languages like Node.js, Python, and frameworks like Express and Django.Implementation of back-end with front-end design</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-orange-500 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Full Stack Web Development</h2>
            <p className="text-white">Complete solutions for web applications, from front-end to back-end.Get Complete Website. Order Now</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl text-orange-600 font-bold mb-4">SEO</h2>
            <p className="text-gray-600">Search Engine Optimization techniques to improve website visibility. Optimise and rank your website </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-orange-500 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl  font-bold mb-4">Digital Marketing</h2>
            <p className="text-white">Strategies and campaigns to reach target audiences and achieve goals.Derive sales and leads</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl text-orange-500 font-bold mb-4">Social Media Management</h2>
            <p className="text-gray-600">Effective management of social media presence to engage audiences.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
