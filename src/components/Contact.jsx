import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaPaperPlane } from "react-icons/fa";
import emailjs from 'emailjs-com'; // import EmailJS

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();
  const form = useRef(); // create a form reference

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const sendEmail = async (event) => {
    // create a function to send the email
    event.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, event.target, `${import.meta.env.VITE_USER_ID}`);
      if(response.status === 200) {
        setName('');
        setEmail('');
        setMessage('');
        console.log('Message sent successfully!');
      }
      else {
        throw new Error(`Failed to send message: ${response.text}`);
      }
    } catch(error) {
      setError(error.message);
    } finally {
      setIsLoading(false)
    }
    emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_USER_ID}`)
      .then((result) => {
        console.log(result.text); // handle success
      }, (error) => {
        console.log(error.text); // handle error
      });
  };

  const onSubmit = (data) => {
    // Handle form submission here (e.g., send email, store data, etc.)
    console.log('Form data:', data);
    sendEmail(); // call the email sending function
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="text-3xl font-bold mb-8"
        >
          Contact Me
        </motion.h2>
        <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:allanabok18@gmail.com">
          allanabok18@gmail.com
        </a>{" "}
        or through this form.
      </p>

      {error && (
          <motion.div className="text-red-500 mb-4" animate={{ y: [0, 10, 0], duration: 0.3 }}>
            {error}
          </motion.div>
        )}
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <motion.div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <motion.input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleInputChange}
              name="name"
              animate={{ scale: isLoading ? 0.9 : 1 }}
            />
          </motion.div>

          <motion.div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <motion.input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={handleInputChange}
              name="email"
              animate={{ scale: isLoading ? 0.9 : 1 }}
            />
          </motion.div>
          <motion.div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <motion.textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              className="shadow appearance-none border rounded-md py-2 px-3 w-full h-32 focus:outline-none"
              value={message}
              onChange={handleInputChange}
            ></motion.textarea>
          </motion.div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex items-center gap-1"
            >
              <span>Submit</span>
              <FaPaperPlane className="text-xs opacity-70" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
