import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import "./Hero.css";
import hero from "../assets/bg.png";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import mui from "../assets/mui.svg";
import nodejs from "../assets/nodejs.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import js from "../assets/js.svg";
import mongodb from "../assets/mongodb.svg";


const Hero = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <section className="">
      <div className="lg:flex items-center  lg:px-[3rem] px-[1.6rem] lg:mt-0 md:mt-20 mt-10 ">
        <div className="flex flex-col gap-3 lg:w-[70%] w-full">
          <span
            className="lg:text-[3.5rem] md:text-[3rem] text-[1.5rem] font-bold text-white"
            // style={{ color: "white", fontWeight: "bold", fontSize: "3.6rem" }}
          >
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Hola!👋 I am Daniel",
                "I am a Project Manager",
                "I'm a Mobile developer",
                "I am a web developer",
              ]}
              loop={5}
              cursor
              cursorStyle="👌"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={3000}
              // onType={handleType}
              onLoopDone={handleDone}
            />
          </span>
          <span className="text-lg">
            Building Digital Experiences That Inspire
          </span>
          <div className="flex items-center gap-5 mt-3">
            <a
              href="https://github.com/Danny123-coder-spec/"
              target="blank"
              // rel="noopener noreferrer"
            >
              <IoLogoGithub
                size={25}
                className="animated-icon cursor-pointer"
              />
            </a>
            <a href="">
              <BsFillTelephoneFill
                size={25}
                className="animated-icon cursor-pointer"
              />
            </a>
            <a href="">
              <CgMail size={25} className="animated-icon cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-boadu-b2779a243/"
              target="blank"
              // rel="noopener noreferrer"
            >
              <IoLogoLinkedin
                size={25}
                className="animated-icon cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="relative ">
          <img
            src={hero}
            alt=""
            className="lg:h-[460px] md:h-[450px] h-[380px] object-contain relative lg:-right-4 md:-right-[14rem] -right-[3rem] z-10 aspect-auto"
          />
          <div className="animate-pulse bounce absolute bg-gradient-to-r mask-conic-pear from-purple-200 to-indigo-200 lg:h-[20rem] md:h-[20rem] md:w-[20rem] h-[17rem] w-[17rem] lg:w-[20rem] inset-0 mx-auto my-auto rounded-full overflow-hidden"></div>
        </div>
        <div className="z-10 ">
          <img src={css} alt="" className="animated-icon absolute lg:right-[26rem] md:right-[40rem] md:top-[38rem] lg:top-[24rem] top-[28rem] h-14"/>
          <img src={html} alt="" className="animated-icon absolute lg:right-[28rem] md:right-[42rem] md:top-[30rem] lg:top-[18.5rem] top-[22rem] h-14" />
          <img src={js} alt="" className="animated-icon animated-icon absolute lg:right-[23rem] md:right-[36rem] md:top-[45rem] right-[18rem] lg:top-[29rem] top-[34rem] h-14 z-" />
          <img src={react} alt="" className="animated-icon absolute lg:right-[18rem] right-[13rem] md:right-[28rem] md:top-[45rem] lg:top-[29rem] top-[34rem] h-14 z-10" />
          <img src={tailwindcss} alt="" className="animated-icon absolute lg:right-[13rem] right-[6rem] md:right-[20rem] md:top-[45rem] top-[34rem] lg:top-[29rem] h-14 z-10" />
          <img src={mui} alt="" className="animated-icon absolute lg:right-[8rem] right-[1rem] md:right-[13rem] lg:top-[29rem] md:top-[45rem] top-[34rem] h-14" />
          <img src={nodejs} alt="" className="animated-icon absolute lg:right-[3rem] md:right-[8rem] md:top-[30rem] right-[1rem] top-[22rem] lg:top-[24rem] h-14" />
          <img src={mongodb} alt="" className="animated-icon absolute lg:right-[1rem] right-[1rem] lg:top-[18.5rem] md:right-[9rem] md:top-[38rem] top-[28rem] h-14" />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
