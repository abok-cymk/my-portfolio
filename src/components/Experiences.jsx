import { motion } from 'framer-motion';

const Experiences = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Update in the Future',
      year: '2024 - Present',
      description: `Exploring the huge and dynamic world of software development is something I am excited about as a budding software engineer. My journey entails learning a variety of skills in web technologies, software engineering ideas, and programming languages since I'm eager to learn and develop. My knowledge of JavaScript, React, Node.js, Python, and other topics is always being refined.

      My desire to comprehend and resolve intricate issues drives me, and I enjoy taking on tasks that require me to learn new things and hone my coding skills. In order to improve my practical experience, I am committed to learning about new technologies, getting up to date on industry trends, and taking part in coding projects.
      .`,
    },
    {
      title: 'Industrial Attachment',
      company: 'Not yet Attended',
      year: 'April-August 2024',
      description: `As a Computer Science student, I am actively seeking an industrial attachment opportunity to apply and enhance my academic knowledge in a real-world setting. Eager to acquire hands-on experience, I am open to training in various industry skills. With a solid foundation in computer science principles and a passion for learning, I am ready to contribute and grow within a dynamic work environment. Excited about the prospect of gaining practical insights and refining my skills, I am enthusiastic about the opportunity to contribute positively to a forward-thinking organization.`,
    },
    {
      title: 'Teaching Volunteer',
      company: 'Nyalunya Secondary School',
      year: 'August 2021-August 20/2023',
      description: `Volunteering at my former high school during my long holidays break was a fulfilling experience where I had the opportunity
      to teach Math, Chemistry and Business Studies. I enjoyed sharing my knowledge with students, making complex concepts
      accessible. Teaching these subjects allowed me to contribute to their academic growth while gaining valuable communication and leadership skills.
      It was a rewarding experience to see students grasp challenging topics in their studies.
      Overall, volunteering at my former school was not only gratifying but also enhanced my passion for education and helping others succeed.`,
    },
  ];

  return (
    <section className="bg-gray-100 py-8 px-2">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="text-3xl font-bold mb-8"
        >
          My Experience
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white p-4 rounded-md shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
              <p className="text-gray-600 mb-2">{experience.company}</p>
              <p className="text-gray-600 mb-2">{experience.year}</p>
              <p className="text-gray-700">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
