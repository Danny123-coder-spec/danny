import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex my-28 px-[3rem] justify-between">
      <h3 className="lg:text-[2rem] text-[1.5rem] font-semibold underline">
        Dannydev
        
      </h3>
      <div>
        <div className="flex items-center gap-5 ">
          <a
            href="https://github.com/Danny123-coder-spec/"
            target="blank"
            // rel="noopener noreferrer"
          >
            <IoLogoGithub size={25} className=" cursor-pointer" />
          </a>
          <a href="">
            <BsFillTelephoneFill size={25} className=" cursor-pointer" />
          </a>
          <a href="">
            <CgMail size={25} className=" cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-boadu-b2779a243/"
            target="blank"
            // rel="noopener noreferrer"
          >
            <IoLogoLinkedin size={25} className=" cursor-pointer" />
          </a>
        </div>
        <div className="flex items-center pt-6 gap-2">
          <FaLocationDot size={22}/>
          <div>Accra, Ablekumah Olebu</div>
        </div>
       
        <a href="https://eu.docworkspace.com/d/sILzszpbxAYCj2K4G"><div className="underline font-semibold pl-9 pt-4">Check resume</div></a>
      </div>
    </div>
  );
};

export default Footer;
