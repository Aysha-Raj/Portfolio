import React, { useState } from 'react';
import pic from "../../public/photo.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" },
    ];

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-2 items-center">
                        <img src={pic} className="h-12 w-12 rounded-full"  alt=''/>
                        <div>
                            <h1 className="font-semibold text-xl cursor-pointer">
                                Aysh<span className="text-green-500 text-2xl">a</span>
                            </h1>
                            <p className="text-sm">Web Developer</p>
                        </div>
                    </div>
                    {/* Desktop navbar */}
                    <div className="hidden md:flex space-x-8">
                        <ul className="flex space-x-8">
                            {navItems.map(({ id, text }) => (
                                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                               <Link to={text}
                               smooth={true}
                               duration={500}
                               offset={-70}
                               activClass="active"
                               >{text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Mobile menu icon */}
                    <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
                        {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                    </div>
                </div>
                {/* Mobile navbar */}
                {menu && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
                        <ul className="space-y-6 text-center">
                            {navItems.map(({ id, text }) => (
                                <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}>{text}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
