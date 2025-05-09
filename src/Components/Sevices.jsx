import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Crafting beautiful UIs using React, Tailwind CSS, and JavaScript with smooth user experiences.",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Building robust and scalable servers using Node.js, Express.js, and MongoDB.",
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Delivering complete web solutions from frontend to backend, with authentication, APIs, and DB integration.",
    },
  ];
  

  return (
    <div id="Services" className="services mx-auto max-w-6xl p-6">
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      <h1 className="text-pink-700 text-3xl font-bold m-6 text-center">Services</h1>
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      <div className="service-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="Service-item flex flex-col justify-center items-center py-10 px-5 border-x-2 border-rose-700 border-y-4 rounded hover:bg-slate-900 transition-transform hover:scale-105 text-center"
          >
            <h1 className="text-white text-5xl font-bold">{service.id}</h1>
            <h1 className="text-rose-700 text-2xl font-sans font-bold mt-2">{service.title}</h1>
            <p className="text-white w-full mt-2">{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
