import React from "react";
import "./SKillsInfoCard.css";

const SkillsInfoCard = ({ selectedSkill }) => {
  return (
    <div className=" border-[1.5px] h-[23rem] border-purple-500 rounded-md bg-[#16112F59] bg-opacity-[0.398rem]">
      <div className="skills-info">
        <h4 className="">{selectedSkill.title}</h4>
        <div className=" p-[2rem]">
          {selectedSkill.skills.map((skill) => (
            <div>
              <div
                key={skill.skill}
                className="flex items-center justify-between"
              >
                <span>{skill.skill}</span>
                <div className="text-[1rem] font-500 text-[#dd8cfa]">
                  {skill.percentage}
                </div>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress" style={{width:skill.percentage}}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsInfoCard;
