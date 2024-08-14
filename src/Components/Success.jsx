import React from 'react'

const Success = () => {
  return (
    <>
          <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#f4db7d]">My Success</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 xl:w-1/3 p-4 border-r border-gray-300">
          <h2 className="text-2xl font-bold mb-4">30+ Projects Completed</h2>
          <p className="text-white">Successful delivery of various projects across multiple industries.</p>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 p-4 border-r border-gray-300">
          <h2 className="text-2xl font-bold mb-4">25+ Satisfied Clients</h2>
          <p className="text-white">Long-term relationships built on trust, quality, and reliability.</p>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">25+ Jobs Completed</h2>
          <p className="text-white">Consistent delivery of high-quality work, meeting client expectations.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Success
