import React, { useState } from "react";
import "./SkillsCard.css";

const SkillsCard = ({ img, title, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive && "bg-purple-500"
      } border-[1.5px] relative cursor-pointer rounded-md border-purple-500 flex items-center justify-center lg:h-[100%] h-[7rem]`}
    >
      <img
        src={img}
        alt={title}
        className=" animated-img bg-[#2a2252] h-10 object-contain w-10 border-[1.5px] border-purple-500 p-2 rounded-md absolute -top-4 left-2"
      />
      <div className="">{title}</div>
    </div>
  );
};

export default SkillsCard;
