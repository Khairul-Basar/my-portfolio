import React from 'react';
import useWindowPosition from "../hooks/useWindowPosition";
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'
import content from '../content';

function Contact() {
    const animated = useWindowPosition('header',0.6,4)
    return (
        <div style={{
            minHeight:'50vh',
            background: "#1F2937"
        }} className="font-dosis w-full text-white flex md:flex-row flex-col-reverse justify-around items-center"
        id="mycontact">

            <LazyLoadImage
                effect="blur"
                src={content.header.img}

                alt="profile"
                width="300px"
                className="m-10 transtion duration-2000 ease-in-out mx-auto rounded-2xl"
            />
            <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
                <h1
                    className={`${
                        animated ? '' : 'translate-y-10 opacity-0'
                    } transform transition duration-3000 text-5xl font-bold mt-5 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-200`}
                >
                    Contact Me
                </h1>
                <p
                    className={`${
                        animated ? '' : 'translate-y-10 opacity-0'
                    } transform transition duration-3000 text-2xl mt-5 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500`}
                >
                    Assalamualaikum..!, I am Khairul Basar. I am a MERN Stack Developer. I completed my
                    Graduation from Daffodil International University Department of CSE. I always
                    believe in efficient work, punctuality, honesty. I think these three things are my
                    internal power. Specially, much importance to me efficient work and honesty. Also, I always
                    maintain professionalism, productivity and commitment. Thank You for Your kind of Concern.
                </p>
                <div
                    className={`flex ${
                        animated ? '' : 'translate-y-10 opacity-0'
                    } transform transition duration-3000 mt-5 mb-10 flex-col`}
                >
                    <div className="mr-4">
                        <a href='https://www.youtube.com/watch?v=ialhliOj1rg' target="_blank">
                            <svg className="w-6 h-6 text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                            </svg>
                            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-yellow-500 ml-2 text-xl">YouTube</span>
                        </a>
                    </div>
                    <div className='mr-2 mt-1'>
                        <a href='https://github.com/Khairul-Basar/' target='_blank'>
                            <svg width="24" height="24" fill="currentColor" className="inline-block mr-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                            </svg>
                            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 text-xl">github.com/Khairul-Basar</span>
                        </a>
                    </div>
                    <div className='mr-2 mt-1'>
                        <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new' target='_blank'>
                            <svg className="bg-gradient-to-r from-pink-500 to-yellow-500 w-6 h-6 text-white rounded inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 text-xl">khairulbasar130@gmail.com</span>
                        </a>
                    </div>
                    <div className='mr-2 mt-1'>
                        <svg className="bg-gradient-to-r from-pink-500 to-yellow-500 w-6 h-6 text-white rounded inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 text-xl">01829910214, 01624235063</span>
                    </div>

                </div>
            </div>

        </div>
    );
}


export default Contact;