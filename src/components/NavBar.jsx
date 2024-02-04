// import { motion } from "framer-motion";
// const links = [
//   {
//     name: "Home",
//     hash: "#home",
//   },
//   {
//     name: "Projects",
//     hash: "#projects",
//   },
//   {
//     name: "Experience",
//     hash: "#experience",
//   },
//   {
//     name: "Skills",
//     hash: "#skills",
//   },
//   {
//     name: "Education",
//     hash: "#education",
//   },
//   {
//     name: "Contact",
//     hash: "#contact",
//   },
// ];
// const Navbar = () => {
//   return (
//     <header className="z-[999] relative">
//       <motion.div
//         className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-gray/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
//         initial={{ y: -100, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }}
//       ></motion.div>

//       <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
//         <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-200 sm:w-[initial] sm:flex-nowrap sm:gap-5">
//           {links.map((link) => (
//             <motion.li
//               className="h-3/4 relative
//               flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
//               key={link.hash}
//               initial={{ y: -100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//             >{link.name}</motion.li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { motion } from "framer-motion";
import { useState } from "react";
// import HamburgerIcon from "./HamburgerIcon"; // you need to import or create a hamburger icon component
import { CgFormatLeft } from "react-icons/cg";

const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // state variable to track menu open or closed status
  const variants = {
    // framer-motion variants to animate navbar links
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-md backdrop-blur-md sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:py-0">
        <button
          className="block ml-4 sm:hidden" 
          onClick={() => setIsOpen(!isOpen)} 
        >
          <CgFormatLeft className="absolute top-0 left-0"/>
        </button>
        <motion.ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-200 sm:w-[initial] sm:flex-nowrap sm:gap-5 sm:ml-0"
          animate={isOpen ? "open" : "closed"} 
          variants={variants} 
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 relative flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {link.name}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;

