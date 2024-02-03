
import { motion } from 'framer-motion';

const Education = () => {
  const educationDetails = [
    {
      level: 'Bachelor of Science in Computer Science',
      school: 'Maseno University',
      year: '2021 - 2025',
    },
    {
      level: 'Secondary Level',
      school: 'Nyalunya Mixed Secondary School',
      year: '2017 - 2020',
    },
    {
      level: 'Primary Level',
      school: 'Kindu R.C Primary School',
      year: '2010 - 2016',
    },
    
  ];

  return (
    <section className="bg-gray-200 py-16 px-2">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="text-3xl font-bold mb-8"
        >
          My Education
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {educationDetails.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white p-4 rounded-md shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{education.level}</h3>
              <p className="text-gray-600 mb-2">{education.school}</p>
              <p className="text-gray-600">{education.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
