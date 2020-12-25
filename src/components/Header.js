import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from '../content';
import useStartAnimation from "../hooks/useStartAnimation";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link as ScrollLink } from 'react-scroll'
import Typical from 'react-typical'

function Header() {
  const animated = useStartAnimation()

  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      background: "#1F2937"
    }} id="header">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/6">
          <LazyLoadImage className="rounded-full hover:shadow-2xl" src={content.header.img} effect="blur" />
        </div>
        <div className="text-white font-dosis text-center md:text-left sm:mt-10">
          <h2 className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-3000 ease-in-out text-3xl md: text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500`}>
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1 className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-3000 ease-in-out text-2xl text-pink-400 italic`}>
            {content.header.text[2]}{' '}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500"
            />
          </h1>
          <ScrollLink to="mywork" smooth={true}>
            <button className="animate-float font-bold rounded-lg px-10 py-3  text-xl uppercase mt-10  transition ease-out duration-1000 border-yellow-300  border-2
            bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div >
  );
}

export default Header;