import React from "react";
import { projectData } from "../utils/projects";
import github from "../assets/github.png";
import web from "../assets/web.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ name }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed in milliseconds
  };
  return (
    <section id="projects" className="my-28 mx-[3rem]">
      <h3 className="text-[2rem] font-bold">{name}</h3>
      <div className="lg:grid grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <div key={index} className="pt-8">
            <h3 className="text-[20px] font-semibold text-purple-300">
              {project.name}
            </h3>
            <a href={project.link}>
              <div className="border-[1.5px] border-gray-500 shadow-inner rounded-md  mt-6 relative  my-5  max-w-full h-[250px] overflow-hidden   ">
                <Slider {...settings}>
                  {project.images.map((img, index) => (
                    <div key={index}>
                      <img
                        src={img}
                        className="object-cover object-left top-0 left-0 w-full h-[250px]"
                        alt=""
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </a>
            <div className="flex items-center gap-6 mt-4">
              <a
                href={project.github}
                className="cursor-pointer"
                rel="noreferrer"
                target="_blank"
              >
                <img src={github} className="h-7 w-7" alt="" />
              </a>
              <a
                href={project.link}
                className="cursor-pointer"
                rel="noreferrer"
                target="_blank"
              >
                <img src={web} className="h-7 w-7" alt="" />
              </a>
            </div>
            <div className="text-justify pt-5">{project.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
