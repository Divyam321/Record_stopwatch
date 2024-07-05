import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-gray-100">
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Divyam Rawat
          </motion.h1>
          <nav className="flex space-x-4">
            {['About', 'Skills', 'Projects'].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <section id="about" className="my-12 bg-cover bg-center rounded-lg shadow-lg p-8" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
          <div className="flex flex-col md:flex-row items-center">
            <motion.img 
              src="https://media.licdn.com/dms/image/D5603AQFmuJl-etiVlQ/profile-displayphoto-shrink_400_400/0/1711536765648?e=1725494400&v=beta&t=LDIDUURLPwbJ4gY4MD-o6u1Ef9Itgp1KRUCG74qpkTg"  // Placeholder image URL
              alt="Divyam Rawat" 
              className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mb-4 md:mb-0 md:mr-8"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50 }}
            />
            <div>
              <motion.h2 
                className="text-2xl font-bold mb-4 text-yellow-300"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-lg font-light bg-gray-800 bg-opacity-75 p-4 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                Hi, I'm <span className="font-bold text-yellow-300">Divyam Rawat</span>, a passionate web developer skilled in <span className="font-bold text-yellow-300">HTML, CSS, JavaScript, React, TailwindCSS, Bootstrap, MongoDB, MySQL, Python, C++, ExpressJS,</span> and <span className="font-bold text-yellow-300">NodeJS</span>. I love creating beautiful and functional web applications.
              </motion.p>
            </div>
          </div>
        </section>

        <section id="skills" className="my-12">
          <motion.h2 
            className="text-2xl font-bold mb-4 text-yellow-300"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 20, delay: 0.2 }}
          >
            Skills
          </motion.h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'Bootstrap', 'MongoDB', 'MySQL', 'Python', 'C++', 'ExpressJS', 'NodeJS'].map((skill, index) => (
              <motion.li 
                key={skill} 
                className="p-4 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded transform transition hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </section>

        <section id="projects" className="my-12">
          <motion.h2 
            className="text-2xl font-bold mb-4 text-yellow-300"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
          >
            Projects
          </motion.h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example project */}
            <motion.div 
              className="bg-violet-950 text-black shadow-lg rounded p-4 transform transition hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">Project Title</h3>
              <p className="mb-2 text-gray-600">Brief description of the project.</p>
              <div className="flex justify-between mt-4">
                <a href="#" className="text-blue-500 hover:underline">GitHub Link</a>
                <a href="#" className="text-blue-500 hover:underline">Deployed Link</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 text-center shadow-lg">
        <p>© 2024 Divyam Rawat. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
