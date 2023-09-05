import { useRef, useEffect } from 'react';
import './App.css';
import './css/hover.css';
import { motion, useAnimation, useInView} from "framer-motion";
import Particle from "./components/Particle.tsx";
import resumepath from "./assets/Dawood Afzaal Resume.pdf";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faGoogle} from '@fortawesome/free-brands-svg-icons';
import Education from "./components/education.tsx";
import Experience from './components/work experience.tsx';
import FramerMotionComponent from './components/framercomp.tsx';
import Scroll from './components/scroll.tsx';
import Projects from './components/projects.tsx';
import Contact from './components/contact.tsx';
 
function App() {

  const eduRef = useRef(null);
  const isEducationInView = useInView(eduRef, {once : true});

  const mainControls = useAnimation();

  useEffect(() => {
    if(isEducationInView) {
      mainControls.start("visible");

    }
  }, [isEducationInView]);
  
  const introAnimation = {
    initial : {
      opacity: 0,
      x: 20,
      y: 20,
    },
    animate : {
      opacity: 1,
      x: 0,
      y: 0,
      transition : {
        delay: 0.5,
      },
    }
  };

  



  return (
    <> 
    <div className='wrapper'>

      <Particle />
        <div className="header">
              <div>
              </div>
              <div className='resumebtn'>
                <a href={resumepath} download="Dawood's Resume">
                  <button className='hvr-radial-in'>Download My Resume!</button>
                </a>
              </div>
          </div>


          <motion.div className='introduction' variants={introAnimation} initial="initial" animate="animate">

            <h1>
              <span className='hello-span'>Hello!</span> I'm Dawood Afzaal
              </h1>

              <h2>
                An Undergraduate Computer Science Student and Programmer!
              </h2>
              <p>
              Hello! I am a passionate fourth-year undergraduate student majoring in Computer Science at the University of Calgary. 
              With a strong foundation in programming and a curiosity for cutting-edge technologies, I have embarked on an exciting 
              journey to explore the ever-evolving world of computer science. Over the past few years, my academic pursuits have been 
              driven by a desire to understand complex algorithms, develop innovative software solutions, and contribute to the dynamic 
              field of technology. 
              <br />
              <br />
              I am dedicated to applying my knowledge and skills to real-world challenges, collaborating with fellow 
              students, and continuously seeking opportunities to grow as a computer scientist. As I approach the culmination of my undergraduate 
              studies, I am eager to take on new challenges and make meaningful contributions to the world of technology.
              <br />
              <br />
              Currently I'm interested in learning more full stack development and am closely working with TypeScript, React, Express and MySQL! You can checkout
              my current projects on my GitHub page using the button below!
              </p>

              <div className='socials'>
                <a href='https://github.com/dafzaaal' target='_blank'>
                  <button className='githubbtn' > <FontAwesomeIcon icon={faGithub} size='lg' className='icons'/>GitHub</button>
                </a>

                <a href='https://www.linkedin.com/in/dawood-afzaal-36933b1a5/' target='_blank'>
                  <button className='linkedinbtn'> <FontAwesomeIcon icon={faLinkedin} size='lg' className='icons' style={{color: '#ffffff'}}/>LinkedIn</button>
                </a>
                
                
                <button className='emailbtn'><FontAwesomeIcon icon={faGoogle} style={{color: "#ff2e2e",}} className='icons' />E-mail Me!</button>
              </div>
              
          </motion.div>
      </div>

      <Education />

      <Experience />

      <Projects />

      <Contact />


      <footer className='footer'>
        
        <div>
          <h3>Dawood Afzaal</h3>
        </div>


        <div>
          <a href="https://github.com/dafzaaal" target='_blank'>
            <FontAwesomeIcon className='icons' size='2xl'  icon={faGithub} style={{color: "#ffffff"}}></FontAwesomeIcon>
          </a>

          <a href='https://www.linkedin.com/in/dawood-afzaal-36933b1a5/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin}className='icons' size='2xl' style={{color: "#ffffff", marginLeft : "10px"}}/>
          </a>
        </div>


      </footer>




          
    </>
  )
}

export default App
