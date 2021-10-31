import React from 'react';

const Hero = () => (
  <div className="w-full h-full overflow-auto bg-bottom bg-cover bg-hero">
    <div className="flex w-full h-full items-center lg:min-h-[90vh]">
      <div className="mx-auto max-w-7xl">
        <h1 className="pb-3 mt-4 mb-40 text-4xl font-extrabold leading-[6rem] tracking-tight text-white sm:pb-5 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl">
          <span className="block">Building the web</span>
          <span className="block">For the user, by the user</span>
        </h1>
      </div>
    </div>
  </div>
);

export default Hero;
