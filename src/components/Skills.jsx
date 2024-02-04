
import { motion } from 'framer-motion';
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3, FaGitSquare, FaHtml5, FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiMysql, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      skillName: "JavaScript",
      icon: TbBrandJavascript,
      color: "#f0db4f",
    },
    {
      skillName: "React",
      icon: FaReact,
      color: "#61dafb",
    },
    {
      skillName: "Java",
      icon: FaJava,
      color: "#007396",
    },
    {
      skillName: "Python",
      icon: FaPython,
      color: "#3776ab",
    },
    {
      skillName: "HTML5",
      icon: FaHtml5,
      color: "#e34f26",
    },
    {
      skillName: "CSS",
      icon: FaCss3,
      color: "#264de4",
    },
    {
      skillName: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06b6d4",
    },
    {
      skillName: "Git",
      icon: FaGitSquare,
      color: "#f05032",
    },
    {
      skillName: "MySQL",
      icon: SiMysql,
      color: "#4479a1",
    },
  ];

  return (
    <section className="bg-gray-50 py-3 px-2">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="text-3xl font-bold mb-8"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white p-2 rounded-md shadow-md cursor-pointer"
            >
              <p className="flex items-center justify-center gap-2 text-lg font-bold mb-2"><skill.icon  className='text-xl' color={skill.color}/>{skill.skillName}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
