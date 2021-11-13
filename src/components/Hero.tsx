import React from "react"

import Link from "components/Link"

const Hero = () => (
  <div className="bg-bottom bg-cover bg-hero h-full w-full overflow-auto">
    <div className="flex h-full w-full items-center lg:min-h-[90vh]">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-extrabold mt-4 text-white mb-40 tracking-tight pb-3 text-4xl leading-[6rem] sm:mt-5 sm:pb-5 sm:text-6xl lg:mt-6 xl:text-7xl">
          <span className="block">Creativity, playfulness</span>
          <span className="block">and practicality.</span>
        </h1>
        <p className="text-white">
          Sometimes I write in my{" "}
          <Link className="font-bold py-1" to="/journal">
            journal
          </Link>
          , and create some fun apps
        </p>
      </div>
    </div>
  </div>
)

export default Hero
