import front from "../assets/front.png";
import back from "../assets/back.png";
import tools from "../assets/tools.png";
import pencil from "../assets/pencil.png";

const skillsSet = [
  {
    id: 1,
    img: front,
    title: "Frontend",
    skills: [
      {
        skill: "HTML5",
        percentage: "95%",
      },
      {
        skill: "CSS3",
        percentage: "90%",
      },
      {
        skill: "Javascript",
        percentage: "85%",
      },
      {
        skill: "React",
        percentage: "85%",
      },
    ],
  },
  {
    id: 2,
    img: back,
    title: "Backend",
    skills: [
      {
        skill: "Nodejs",
        percentage: "90%",
      },
      {
        skill: "Expressjs",
        percentage: "90%",
      },
    ],
  },
  {
    id: 3,
    img: tools,
    title: "Tools",
    skills: [
      {
        skill: "Git & Github",
        percentage: "85%",
      },

      {
        skill: "Visual Studio Code",
        percentage: "85%",
      },
      {
        skill: "Responsive Design",
        percentage: "75%",
      },
    ],
  },
  {
    id: 4,
    img: pencil,
    title: "Soft Skills",
    skills: [
      {
        skill: "Problem-solving",
        percentage: "80%",
      },
      {
        skill: "Collaboration",
        percentage: "85%",
      },
      {
        skill: "Attention to detail",
        percentage: "80%",
      },
      {
        skill: "Leadership",
        percentage: "80%",
      },
    ],
  },
];

export default skillsSet;
