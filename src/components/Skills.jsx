import React, { useCallback, useState } from "react";

import skillsSet from "../utils/data";
import SkillsCard from "./SkillsCard";
import SkillsInfoCard from "./SkillsInfoCard";

const Skills = ({ name }) => {
  const [activeSkill, setActiveSkill] = useState(skillsSet[0].title);

  const handleSkillClick = (title) => {
    setActiveSkill(title);
  };

  const selectedSkill = skillsSet.find((item) => item.title === activeSkill);

  return (
    <section id="skills" className="my-20 mx-[3rem]">
      <h3 className="text-[2rem] font-bold">{name}</h3>
      <div className=" mt-10 lg:flex gap-14">
        <div className="lg:w-[45%] grid grid-cols-2 gap-8 lg:h-[15rem]">
          {skillsSet.map((item) => (
            <SkillsCard
              key={item.title}
              img={item.img}
              title={item.title}
              onClick={() => handleSkillClick(item.title)}
              isActive={activeSkill === item.title}
            />
          ))}
        </div>
        <div className="flex-grow lg:mt-0 mt-10">
          <SkillsInfoCard selectedSkill={selectedSkill} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
