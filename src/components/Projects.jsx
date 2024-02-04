import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Currency Converter",
      description:
        "The project idealy imitate the common currency exchange softwares, so I tried to make it as unique as possible by applying some features that have learnt recently like localStorage",
      link: "https://github.com/abok-cymk/currency-conversion.git",
      imageURL: "/static/images/currency-converter.png",
      altMsg: "Project I worked on about currency converter",
    },
    {
      title: "Movie App",
      description:
        "This movie app I have created using an API, it allows users to search for movies using movie titles as keywords then the movie list is display and also there is pagination",
      link: "https://github.com/abok-cymk/movie-app2.git",
      imageURL: "/static/images/movie-app.png",
      altMsg: "Project using API to fetch movies and display",
    },
    {
      title: "Temperature Control",
      description:
        "The temperature basically imitates temperature conditions where at specific temperatures the background of the temperature display changes built using vanilla JS, CSS and HTML",
      link: "https://github.com/abok-cymk/temperature-control-app.git",
      imageURL: "/static/images/temp-control.png",
      altMsg: "Project for temperature control app",
    },
  ];

  return (
    <section className="bg-gray-200 py-16 mb-0">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="text-3xl font-bold mb-8"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 mb-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white p-2 rounded-md shadow-md mb-0"
            >
              <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                className="text-gray-700 text-[1.55rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 cursor-pointer"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare />
                <img
                  src={project.imageURL}
                  alt={project.altMsg}
                  className="mt-4 w-full h-64 object-cover object-top border-collapse rounded-t-lg shadow-2xl hidden sm:block"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
