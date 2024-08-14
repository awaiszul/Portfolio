import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
  return (

        <div className="container mx-auto  p-4">
           <div className="flex justify-center my-5 items-center ">
<h2 className="text-4xl font-bold mb-4 text-center text-[#f4db7d]">Client Testimonials</h2>
</div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 xl:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src="../Images/clients (2).jpg"
                  alt="client"
                  className="rounded-full w-16 h-16 mb-4"
                />
                <p className="text-gray-600">
                  
                  Muhammad Awais delivered an exceptional website that exceeded our expectations. His attention to detail, creativity, and expertise in web development made the process seamless. We highly recommend him for any web development project.
                  <i className="fas fa-quote-right text-gray-500 ml-2" />
                </p>
                <h6 className="text-[#1a2238] font-bold">Maria Smantha</h6>
                <p className="text-gray-600"> Web Developer</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-4">
              <div className="bg-orange-500 rounded-lg shadow-lg p-4">
                <img
                  src="../Images/clients (3).jpg"
                  alt="client"
                  className="rounded-full w-16 h-16 mb-4"
                />
                <p className="text-white-600">
                  
                  Muhammad Awais is a skilled web developer who understood our business needs and delivered a custom solution. His professionalism, communication skills, and passion for his work are impressive. We're grateful for his expertise.
                  <i className="fas fa-quote-right text-gray-500 ml-2" />
                </p>
                <h6 className="text-[#1a2238] font-bold">John Doe</h6>
                <p className="text-white-600">Marketing Specialist</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src="../Images/clients (4).jpg"
                  alt="client"
                  className="rounded-full w-16 h-16 mb-4"
                />
                <p className="text-gray-600">
                  
                  Muhammad Awais stands out as a talented web developer. He balanced design and functionality perfectly and met deadlines with ease. Our website looks and performs better than ever. We appreciate his hard work. Higly Recomended!.
                  <i className="fas fa-quote-right text-gray-500 ml-2" />
                </p>
                <h6 className="text-[#1a2238] font-bold">Jane Smith</h6>
                <p className="text-gray-600">Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap -mx-4 mt-4">
            <div className="w-full md:w-1/3 xl:w-1/3 p-4">
              <div className=" bg-orange-500 rounded-lg shadow-lg p-4">
                <img
                  src="../Images/clients (5).jpg"
                  alt="client"
                  className=" rounded-full w-16 h-16 mb-4"
                />
                <p className="text-white-600">
                  
                  Muhammad Awais made our web development experience enjoyable and stress-free. He was patient, knowledgeable, and went above and beyond. Our website now accurately reflects our brand, thanks to his exceptional work.
                  <i className="fas fa-quote-right text-gray-500 ml-2" />
                </p>
                <h6 className="text-[#1a2238] font-bold">Bob Johnson</h6>
                <p className="text-white-600">Software Engineer</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src="../Images/clients (1).jpg"
                  alt="client"
                  className="rounded-full w-16 h-16 mb-4"
                />
                <p className="text-gray-600">
                  
                  Muhammad Awais is a true web development expert. He combined technical skills, creativity, and business acumen to boost our online presence. We've seen significant traffic and conversion increases. His work is top-notch.
                  <i className="fas fa-quote-right text-gray-500 ml-2" />
                </p>
                <h6 className="text-[#1a2238] font-bold">Alice Williams</h6>
                <p className="text-gray-600">UI/UX Designer</p>
              </div>
              
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-4">
              <div className=" bg-orange-500 rounded-lg shadow-lg p-4">
                <img
                  src="../Images/clients (5).jpg"
                  alt="client"
                  className=" rounded-full w-16 h-16 mb-4"
                />
                <p className="text-white-600">
                  
                  Muhammad Awais made our web development experience enjoyable and stress-free. He was patient, knowledgeable, and went above and beyond. Our website now accurately reflects our brand, thanks to his exceptional work.
                  <i className="fas fa-quote-right text-gray-500 ml-2" />
                </p>
                <h6 className="text-[#1a2238] font-bold">Bob Johnson</h6>
                <p className="text-white-600">Software Engineer</p>
              </div>
            </div>
            
            </div>
            </div>
           
  );
}