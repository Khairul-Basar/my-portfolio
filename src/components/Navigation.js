import React from 'react';
import { Link as ScrollLink } from 'react-scroll'
import content from '../content'

function Navigation() {
    return (
        <div style={{
            background: "#1F2937"
        }} className="font-dosis fixed top-0 w-screen z-40 shadow-2xl">
            <div className="flex items-center justify-between w-10/12 mx-auto py-4 text-white">
                <ScrollLink to="header" smooth={true}>
                    <h1 className="text-3xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 cursor-pointer hover:from-pink-500 hover:to-yellow-500">Khairul <span className="w-3 h-3 bg-pink-400 inline-block rounded-full hover:bg-white"></span></h1>
                </ScrollLink>
                <div>
                    {content.nav.links.map((link, index) => {
                        return (
                            <ScrollLink to={link.to} smooth={true}>
                                <span key={index} className="font-bold cursor-pointer text-xl mr-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">{link.text}</span>
                            </ScrollLink>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Navigation;