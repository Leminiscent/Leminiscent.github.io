import { useState } from 'react';
import { Code, Gamepad2, Layout, Server, Star } from 'lucide-react';
import SkillBar from './SkillBar';

import headshot from '../assets/headshot.webp';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  // Skills data
  const frontendSkills = [
    { name: 'JavaScript/TypeScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Bootstrap', level: 85 },
  ];

  const backendSkills = [
    { name: 'C/C++', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'REST APIs', level: 85 },
    { name: 'SQL', level: 90 },
    { name: 'NoSQL', level: 85 },
  ];

  const gameDevSkills = [
    { name: 'Unity', level: 90 },
    { name: 'C#', level: 85 },
    { name: 'Lua/LÖVE', level: 80 },
    { name: 'Game Design', level: 90 },
    { name: 'Physics', level: 85 },
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Linux/Unix', level: 80 },
    { name: 'Docker', level: 75 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Testing', level: 90 },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left column - About Me */}
            <div className="md:w-2/5">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-2">About Me</span>
                <div className="h-1 bg-indigo-600 dark:bg-indigo-400 flex-grow ml-4"></div>
              </h2>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
                <div className="aspect-w-1 aspect-h-1 mb-6 mx-auto max-w-[240px]">
                  <img
                    src={headshot}
                    alt="Profile avatar"
                    className="rounded-full object-cover shadow-lg"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 text-center">
                  Lemuel Nogueira
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-6 text-center">
                  Software Engineer & Game Developer
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  My journey into software engineering began with a childhood fascination with video games, particularly RPGs and strategy games.
                  I was always curious about how these worlds were created, which prompted me to begin learning how to code.
                  What began as a hobby eventually turned into a strong passion for software development.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Outside of programming, I find inspiration in literature, particularly philosophy, psychology, fantasy, and science fiction.
                  Reading improves both my creativity and critical thinking.
                  I also enjoy board and video games that require me to strategize and collaborate with others.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Fitness is an important aspect of my life.
                  To further my understanding of physical health and the human body, I obtained an ACE personal training certification.
                  Strength training is a regular part of my routine, and it helps me maintain discipline and balance in everything I do.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Whether I'm coding, reading, or training, I strive to combine logical thinking and creativity.
                  That mindset shapes how I approach both my work and my personal development, as I am constantly looking for ways to improve and create something worthwhile.
                </p>
              </div>

              <div className="flex justify-center">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-all duration-300 transform hover:translate-y-px flex items-center"
                >
                  <span>View Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right column - Skills */}
            <div className="md:w-3/5">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-2">My Skills</span>
                <div className="h-1 bg-indigo-600 dark:bg-indigo-400 flex-grow ml-4"></div>
              </h2>

              {/* Tabs */}
              <div className="flex mb-8 border-b border-gray-200 dark:border-gray-700">
                <button
                  className={`py-3 px-5 flex items-center text-sm font-medium focus:outline-none ${activeTab === 'skills'
                    ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('skills')}
                >
                  <Star className="h-5 w-5 mr-2" />
                  <span>Skills</span>
                </button>

                <button
                  className={`py-3 px-5 flex items-center text-sm font-medium focus:outline-none ${activeTab === 'frontend'
                    ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('frontend')}
                >
                  <Layout className="h-5 w-5 mr-2" />
                  <span>Frontend</span>
                </button>

                <button
                  className={`py-3 px-5 flex items-center text-sm font-medium focus:outline-none ${activeTab === 'backend'
                    ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('backend')}
                >
                  <Server className="h-5 w-5 mr-2" />
                  <span>Backend</span>
                </button>

                <button
                  className={`py-3 px-5 flex items-center text-sm font-medium focus:outline-none ${activeTab === 'gamedev'
                    ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('gamedev')}
                >
                  <Gamepad2 className="h-5 w-5 mr-2" />
                  <span>Game Dev</span>
                </button>
              </div>

              {/* Tab content */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
                {activeTab === 'skills' && (
                  <div>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Layout className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                        <span>Frontend</span>
                      </h3>
                      <div className="space-y-4">
                        {frontendSkills.map((skill, index) => (
                          <SkillBar
                            key={index}
                            name={skill.name}
                            level={skill.level}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Server className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                        <span>Backend</span>
                      </h3>
                      <div className="space-y-4">
                        {backendSkills.map((skill, index) => (
                          <SkillBar
                            key={index}
                            name={skill.name}
                            level={skill.level}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Gamepad2 className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                        <span>Game Development</span>
                      </h3>
                      <div className="space-y-4">
                        {gameDevSkills.map((skill, index) => (
                          <SkillBar
                            key={index}
                            name={skill.name}
                            level={skill.level}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Code className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                        <span>Other Skills</span>
                      </h3>
                      <div className="space-y-4">
                        {otherSkills.map((skill, index) => (
                          <SkillBar
                            key={index}
                            name={skill.name}
                            level={skill.level}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'frontend' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Layout className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                      <span>Frontend</span>
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Modern JavaScript Frameworks</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          I primarily use React, focusing on building modular, maintainable components and designing clean, scalable user interfaces.
                          I enjoy using React's flexibility to create applications that are both structured and creative.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">CSS and Styling</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Styling is an important aspect of bringing a project to life.
                          I use modern CSS techniques such as Flexbox, Grid, and animations to create layouts that are both natural and intuitive.
                          I am also familiar with frameworks such as Tailwind CSS, Bootstrap, and Styled Components, depending on the requirements of the project.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Performance Optimization</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Performance is important both for the user experience and for creating something that feels polished.
                          I use techniques such as code splitting, lazy loading, and image optimization to improve application responsiveness and efficiency.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Responsive Design</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          I believe that good design should naturally adapt to the device being viewed on.
                          I create responsive layouts that work consistently across mobile, tablet, and desktop devices, giving users a consistent experience regardless of how they access a project.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'backend' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Server className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                      <span>Backend</span>
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Programming and Development</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          My work in backend development centers around C++ and Python, where I focus on building systems that are both efficient and maintainable.
                          I approach backend challenges as opportunities to apply core software engineering principles, designing solutions that balance structure and adaptability.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Databases and Data Management</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Strong backend systems depend on thoughtful data management.
                          I have experience working with relational databases such as PostgreSQL and MySQL, where I design logical schemas, write efficient queries, and prioritize data integrity as part of building applications that can grow and evolve over time.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Machine Learning and Automation</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          My interest in problem-solving extends into machine learning and automation.
                          Using Python libraries such as scikit-learn, TensorFlow, and pandas, I apply data-driven methods to enhance system capabilities, automate tasks, and find new approaches to complex challenges.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Version Control and Software Quality</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Every project I work on is grounded in clean version control practices and a commitment to software quality.
                          I use Git to manage collaborative and individual workflows, and I incorporate unit and integration testing to create codebases that are reliable, scalable, and ready to support future development.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'gamedev' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Gamepad2 className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                      <span>Game Development</span>
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Game Engines and Frameworks</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          I primarily use Unity with C# and have developed both 2D and 3D games, focusing on solid technical foundations and innovative mechanics.
                          I've also created games in Lua using the LÖVE framework and Python with Pygame.
                          I enjoy working on small, self-contained projects that revolve around core gameplay mechanics.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Game Design and Systems</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          I approach game design with a focus on providing meaningful player experiences.
                          My work includes designing levels, balancing game mechanics, and developing systems that encourage player engagement across different genres and platforms.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Graphics, Animation, and Visual Effects</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          I enjoy bringing games to life with visual details such as sprite animation, particle systems, and visual scripting.
                          I see graphics implementation not only as a way to improve aesthetics, but also as a tool for reinforcing gameplay and atmosphere.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Physics, AI, and World Interaction</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          I build interactive worlds through the implementation of physics systems, collision handling, and AI behavior.
                          I have experience developing intelligent NPCs and pathfinding algorithms that help create more dynamic and immersive environments.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;