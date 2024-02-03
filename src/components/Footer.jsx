

const Footer = () => {
  const toolsUsed = ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'React Hook Form'];

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; Allan Abok {new Date().getFullYear()} | Tools Used: {toolsUsed.join(', ')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
