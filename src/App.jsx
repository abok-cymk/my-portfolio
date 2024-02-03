import './App.css'
import Contact from './components/Contact'
import Intro from './components/Intro'
import { useEffect, useState } from 'react'
import Navbar from './components/NavBar'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      localStorage.setItem('portfolioData', JSON.stringify(data));
      setData(data);
    };

    const storedData = localStorage.getItem('portfolioData');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetchData();
    }
  }, []);
  return (
    <main className='container mx-auto text-center bg-gray-50'>
      <Navbar />
      <Intro data={data.intro} />
      <Projects />
      <Experiences />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
