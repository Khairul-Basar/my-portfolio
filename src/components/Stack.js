import React from 'react';
import content from '../content';
import { LazyLoadImage } from "react-lazy-load-image-component";

function Stack() {
  return ( 
    <div className="min-h-screen flex flex-col items-center justify-center font-dosis"
         style={{
             background: '#eee',
         }}
         id="mystack">

      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">Stack I use</h1>
      <div className="flex flex-wrap justify-center mt-10">
        {content.stack.tech.map((tech, index) => {
          return <span className={`${index % 2 === 0 ? 'animate-float' : 'animate-refloat'} w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center  p-5`}>
            <LazyLoadImage src={tech.img} alt={tech.alt} />
          </span>
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">{content.stack.desc}</p>
    </div>
  );
}

export default Stack;