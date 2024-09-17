import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.jpeg";

function Home() {
  return (
    <>
      <div 
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col-reverse md:flex-row">
          {/* Left Section: Text and Icons */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backspace={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              As an MCA student with expertise in C++, HTML, CSS, JavaScript, and SQL,
              I am eager to apply my technical skills to innovative software development
              projects. I have hands-on experience creating user-friendly applications and
              am looking to further develop my skills in a dynamic and collaborative setting.
              My enthusiasm for learning and problem-solving drives me to deliver high-quality, 
              customer-focused solutions.
            </p>
            <br />
            {/* Social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                     <a href="https://www.facebook.com/" 
                     target="_blank">
                    <FaFacebookSquare className="text-2xl cursor-pointer" />
                    </a>
                    </li> 
                  <li>
                  <a href="https://www.linkedin.com/" 
                     target="_blank"> 
                    <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                    </li>
                  <li>
                  <a href="https://www.Youtube.com/" 
                     target="_blank">
                    <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                    </li>
                  <li>
                  <a href="https://www.Telegram.com/" 
                     target="_blank">
                    <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                    </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic} 
            className="rounded-full md:w-[450px] h-[450px] mx-auto md:mx-0" 
            alt="Profile" />
          </div>
        </div>
      </div>
      <hr  />
    </>
  );
}

export default Home;
