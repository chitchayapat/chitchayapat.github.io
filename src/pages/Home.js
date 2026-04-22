import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import profileImage from '../assets/images/profile-image.jpg';
import Education from '../components/Education';
import Leadership from '../components/Leadership';
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import CV from '../assets/files/chimtanoo_resume_2023.pdf';

function Home() {
  return (
    <div className="bg-orange-50 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow rounded">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 md:mr-7">
            <h1 className="text-4xl font-bold mb-6">
              <TypeAnimation
                sequence={[
                  'Pat Chimtanoo',
                  5000,
                  'Chitchaya Chimtanoo',
                  5000,
                  'ชิชญา ฉิมธนู',
                  5000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
            <p className="text-gray-600 mb-3">
              Hi! My name is Pat Chimtanoo and I am a first-year Ph.D. student in Actuarial Science within the Department of Statistical Sciences at the University of Toronto. I am co-supervised by Professor Andrei Badescu and Professor Christopher Blier-Wong. I earned a bachelor’s degree in actuarial science from UW-Madison and a master’s in applied statistics from the University of Michigan. My research interests lie in predictive modeling and algorithmic fairness within the field of actuarial science.
            </p>
          </div>
          <div className="md:w-1/4 md:mt-0 mt-4">
            <img src={profileImage} alt="Profile" className="rounded-md h-auto w-full" />
          </div>
        </div>
        <div className="flex mb-2 space-x-3 mt-2">
          <p className="text-gray-600 font-bold">Links:</p>
          <a
            href="https://www.linkedin.com/in/chitchayapat/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:cc.chitchaya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            <MdEmail size={24} />
          </a>
        </div>
        <ul className="flex flex-wrap space-x-4 items-center">
          <p className="text-gray-600 font-bold">Jump to:</p>
          <li>
            <a href="#education" className="text-amber-600 hover:text-amber-700">
              <b>Education</b>
            </a>
          </li>
          <li>
            <a href="#experiences" className="text-amber-600 hover:text-amber-700">
              <b>Work Experiences</b>
            </a>
          </li>
          <li>
            <a href="#projects" className="text-amber-600 hover:text-amber-700">
              <b>Projects</b>
            </a>
          </li>
          <li>
            <a href="#leadership" className="text-amber-600 hover:text-amber-700">
              <b>Leadership and Involvement</b>
            </a>
          </li>
          <li>
            <a href={CV} className="text-amber-600 hover:text-amber-700">
              <b>CV</b>
            </a>
          </li>
        </ul>
        <hr className="my-5" />
        <div id="education">
          <Education />
        </div>
        <hr className="my-5" />
        <div id="experiences">
          <Experiences />
        </div>
        <hr className="my-5" />
        <div id="projects">
          <Projects />
        </div>
        <hr className="my-5" />
        <div id="leadership">
          <Leadership />
        </div>
        <hr className="my-5" />
        <div id="skills">
          <Skills />
        </div>
        <div className="mt-5 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Chitchaya Chimtanoo. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Home;
