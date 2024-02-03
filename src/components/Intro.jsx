import { motion } from 'framer-motion';
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="bg-gray-50  text-black py-16 w-full px-5">
      {/* <div className='bg-[url('src/assets/images/pl.jpg')]'></div> */}
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="text-4xl font-bold mb-4"
        >
          Hello, I&apos;m Allan Abok
        </motion.h1>
        <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <img
              src="/static/images/allan.jpg"
              alt="Allan&apos;s portrait"
              width="192"
              height="192"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            😊
          </motion.span>
        </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="text-lg"
        >
        <p className="mb-3">
        I am currently an undergraduate{" "}
        <span className="font-medium">Computer Science</span>, I am pursuing my
        passion for programming. I enrolled at Maseno University where I am learning to be a{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, JavaScript, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">industrial attachment</span> in order to
        get industry required skills.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Practical Networking</span>.
      </p>
        </motion.p>
      </div>
      <a
          className="bg-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-50 cursor-pointer dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60" />
        </a>
    </section>
  );
};

export default Intro;

