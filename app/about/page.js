"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="bg-gradient-to-r ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Project Image"
              className="rounded-lg shadow-2xl w-full object-cover h-96 transform transition-transform duration-500 hover:scale-105"
              width={600}
              height={400}
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-5xl font-extrabold mb-4 ">About My Projects</h2>
            <p className="text-lg  mb-6">
              I have developed numerous projects in various domains using cutting-edge technologies.
              Each project demonstrates a unique solution to a real-world problem, designed with
              modern principles and performance in mind.
            </p>
            <div className="flex space-x-4">
              {/* Example animated buttons or badges */}
              <a
                href="#projects"
                className="px-6 py-2  rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2  rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Projects Details Section */}
       <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="border rounded-lg p-6 shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
    <Image src="https://images.pexels.com/photos/5582588/pexels-photo-5582588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project 1" className="rounded-lg mb-4 w-full h-64 object-cover" width={1260} height={750} />
    <h3 className="text-2xl font-bold mb-2">Project Title 1</h3>
    <p className="">A brief description of the project, its goals, and the technologies used.</p>
  </div>

  <div className="border rounded-lg p-6 shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
    <Image src="https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project 2" className="rounded-lg mb-4 w-full h-64 object-cover" width={1260} height={750} />
    <h3 className="text-2xl font-bold mb-2">Project Title 2</h3>
    <p className="">A brief description of the project, its goals, and the technologies used.</p>
  </div>

  <div className="border rounded-lg p-6 shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
    <Image src="https://images.pexels.com/photos/5052851/pexels-photo-5052851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project 3" className="rounded-lg mb-4 w-full h-64 object-cover" width={1260} height={750} />
    <h3 className="text-2xl font-bold mb-2">Project Title 3</h3>
    <p className="">A brief description of the project, its goals, and the technologies used.</p>
  </div>
</div>

{/* Show More Section */}
{showMore && (
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="border rounded-lg p-6 shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <Image src="https://images.pexels.com/photos/5324856/pexels-photo-5324856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project 4" className="rounded-lg mb-4 w-full h-64 object-cover" width={1260} height={750} />
      <h3 className="text-2xl font-bold mb-2">Project Title 4</h3>
      <p className="">A brief description of the project, its goals, and the technologies used.</p>
    </div>

    <div className="border rounded-lg p-6 shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <Image src="https://images.pexels.com/photos/4623356/pexels-photo-4623356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project 5" className="rounded-lg mb-4 w-full h-64 object-cover" width={1260} height={750} />
      <h3 className="text-2xl font-bold mb-2">Project Title 5</h3>
      <p className="">A brief description of the project, its goals, and the technologies used.</p>
    </div>

    <div className="border rounded-lg p-6 shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <Image src="https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project 6" className="rounded-lg mb-4 w-full h-64 object-cover" width={1260} height={750} />
      <h3 className="text-2xl font-bold mb-2">Project Title 6</h3>
      <p className="">A brief description of the project, its goals, and the technologies used.</p>
    </div>
  </div>
)}        <div className="mt-8 text-center">
          <button
            onClick={handleShowMore}
            className="px-6 py-2  rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;