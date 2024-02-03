
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Git',
    'MySQL',
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
              <p className="text-lg font-bold mb-2">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
