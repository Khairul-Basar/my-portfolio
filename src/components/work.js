import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";
import useStartAnimation from "../hooks/useStartAnimation";
import useWindowPosition from "../hooks/useWindowPosition";

function Work() {
    const animated = useWindowPosition('header',0.3,2)
    return (
        <div className="min-h-screen flex justify-center items-center flex-col md:py-10 sm:py-10"
            style={{
                background: '#FEFEFE',
            }}
            id="mywork"
        >
            <h1 className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-3000  text-5xl font-dosis font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500`}>Projects</h1>
            <p className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-3000  text-2xl font-dosis mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500`}>I have done</p>
            <div className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-3000  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg rounded-2xl">
                    <div className="w-full">
                        <LazyLoadImage className="hover:shadow-2xl" src={content.work.img_1} effect="blur" />
                    </div>
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-600">
                            Note-App
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full
                                px-3 py-1 text-sm font-semibold text-white m-1">
                                    #MongoDB
                            </span>
                            <span className="inline-block bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full
                                px-3 py-1 text-sm font-semibold text-white m-1">
                                    #Express.js
                            </span>
                            <span className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full
                                px-3 py-1 text-sm font-semibold text-white m-1">
                                    #Node.js
                            </span>
                            <span className="inline-block bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full
                                px-3 py-1 text-sm font-semibold text-white m-1">
                                    #Rest Api
                            </span>

                        </div>
                    </div>
                    <div className="flex justify-between px-6 py-4">
                        <a href="https://github.com/Khairul-Basar/Notes-App/tree/master" target="_blank"
                           className="text-gray-500 border-gray-200 border-2 hover:bg-gray-400 hover:text-white transition ease-out duration-1000 rounded-full px-5 py-1">
                            <svg width="24" height="24" fill="currentColor" className="inline-block mr-1">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                            </svg>
                            github
                        </a>
                        <a href="https://stormy-bayou-39342.herokuapp.com/" target="_blank"
                           className="text-green-500 border-green-200 border-2 hover:bg-green-400 hover:text-white transition ease-out duration-1000 rounded-full px-5 py-1">
                            View Project
                            <svg className="animate-arrowforward  w-5 inline-block ml-1 pb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg rounded-2xl">
                    <div className="w-full">
                        <LazyLoadImage className="hover:shadow-2xl" src={content.work.img_2} effect="blur" />
                    </div>
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-600">
                            Pixabey-App
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full
                                px-3 py-1 text-sm font-semibold text-white m-1">
                                    #React.js
                            </span>
                            <span className="inline-block bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full
                                px-3 py-1 text-sm font-semibold text-white m-1">
                                    #Tailwindcss
                            </span>
                            <span className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full
                                px-3 py-1 text-sm font-semibold text-white m-1">
                                    #Pixabey Api
                            </span>

                        </div>
                    </div>
                    <div className="flex justify-between px-6 py-4">
                        <a href="https://github.com/Khairul-Basar/react-tailwind-pixabay-gallery/tree/master" target="_blank"
                           className="text-gray-500 border-gray-200 border-2 hover:bg-gray-400 hover:text-white transition ease-out duration-1000 rounded-full px-5 py-1">
                            <svg width="24" height="24" fill="currentColor" className="inline-block mr-1">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                            </svg>
                            github
                        </a>
                        <a href="https://react-tailwind-pixabay.herokuapp.com/" target="_blank"
                           className="text-green-500 border-green-200 border-2 hover:bg-green-400 hover:text-white transition ease-out duration-1000 rounded-full px-5 py-1">
                            View Project
                            <svg className="animate-arrowforward w-5 inline-block ml-1 pb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg rounded-2xl">
                    <div className="w-full">
                        <LazyLoadImage className="hover:shadow-2xl" src={content.work.img_3} effect="blur" />
                    </div>
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-600">
                            Recipe App
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full
                                px-3 py-1 text-sm font-semibold text-white m-1">
                                    #Tailwindcss
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between px-6 py-4">
                        <a href="https://github.com/Khairul-Basar/tailwind_css_project" target="_blank"
                           className="text-gray-500 border-gray-200 border-2 hover:bg-gray-400 hover:text-white transition ease-out duration-1000 rounded-full px-5 py-1">
                            <svg width="24" height="24" fill="currentColor" className="inline-block mr-1">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                            </svg>
                            github
                        </a>
                        <a href="https://khairul-basar.github.io/tailwind_css_project/public/" target="_blank"
                           className="text-green-500 border-green-200 border-2 hover:bg-green-400 hover:text-white transition ease-out duration-1000 rounded-full px-5 py-1">
                            View Project
                            <svg className="animate-arrowforward  w-5 inline-block ml-1 pb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;