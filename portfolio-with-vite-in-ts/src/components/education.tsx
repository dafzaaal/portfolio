import {useEffect, useRef, useState} from 'react';
import { motion, useScroll, useAnimation, useInView, stagger, color, useTransform} from 'framer-motion';
import uofc from "../images/uofc logo.png"
import "../App.css"
import '../css/hover.css';
import filepath from "../assets/certs.pdf";
import {faDownload, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Education() {

    const ref = useRef<HTMLDivElement>(null);

    const [text, setText] = useState("Download My Certificates!");
    const [icon, setIcon] = useState(faDownload);

    const isInView = useInView(ref, {once : true});
    const controls = useAnimation();
    const {scrollY} = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const handleButtonClick = () => {
        setText("Downloaded!");
        setIcon(faThumbsUp)
    };

    useEffect(() => {
        if(isInView) {
            controls.start("animate");
        }
        else {
            controls.start("initial");
        }
    }, [isInView]);


    const parentVariants = {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          transition: {
            duration: 2,
            delayChildren: 0.5,
            staggerChildren: 1.05,
          },
        },
      };
      
      const childVariants = {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          x: 25,
          y: 25,
          transition: {
            duration: 0.5,
          },
        },
      };
      
    
    return(
    
        <>
        <h1 className='educationheader'>Education</h1>
            <div className='education-section'>
            
                <motion.div className='education-flex' ref={ref} variants={parentVariants} initial="initial" animate={controls}>
                    <div className='inside-education-flex'>  

                        <motion.div className='school' variants={childVariants}>
                            <h2>University of Calgary</h2>
                                 <p>Bachelor of Science in Computer Science</p>
                                 <p>GPA: 3.63/4</p>
                                 <img src={uofc}></img>
                        </motion.div>
                        
                        <motion.div className='courses' variants={childVariants}>
                            <h2>Relevant Courses</h2>
                                <p>
                                    Python, Object-Oriented Programming, Machine Learning, Theoretical Foundations of Computer Science 
                                    Database Management Systems, Networking, Operating Systems, Programming Paradigms 
                                </p>
                        </motion.div>


                        <motion.div className='clubs' variants={childVariants}>
                            <h2>Extracirrculars</h2>
                                <p>
                                  <ol className='clubs-list'>
                                    <li>A member of the <span style={{fontWeight : "bold"}}>University of Calgary Undergaduate Society</span></li>
                                    <li>A board member of the <span style={{fontWeight : "bold"}}>Computer Science Information Security Club</span></li>
                                  </ol>
                                    A member of both the University of Calgary Undergraduate Society as well as the Information Security
                                    club!
                                </p>
                        </motion.div>

                        <motion.div className='certificates' variants={childVariants}>
                            <h2>Certificates</h2>
                                <p>
                                  <ol className='certs'>
                                    <li><span style={{fontWeight : "bold"}}>UX Design Principles</span> issued by <span style={{fontWeight : "bold"}}>Google</span> on April 1st, 2021</li>
                                    <li><span style={{fontWeight : "bold"}}>Google Cloud Platform (GCP) Fundamentals</span> issued by <span style={{fontWeight : "bold"}}>Google Cloud</span> on April 2nd, 2021</li>
                                    <li><span style={{fontWeight : "bold"}}>Become a React Developer</span> issued by <span style={{fontWeight : "bold"}}>LinkedIn Learning</span> on April 6th, 2021</li>
                                    <a href={filepath} download="Dawood's Cerificates">
                                      <motion.button 
                                      className='downloadcerts'
                                      whileHover={{
                                        scale : 1.1,
                                        transition : {
                                          type : "spring",
                                          ease: "linear",
                                          duration : 0.35,
                                        }
                                      }}
                                      whileTap={{
                                        scale : 0.65,
                                        transition : {
                                          ease: "linear",
                                          duration : 0.35,
      
                                        }
                                      }}
                                      onClick={handleButtonClick}
                                      >

                                        <FontAwesomeIcon icon={icon} size='lg' className='icons' style={{color: '#000000'}}/>
                                        {text}</motion.button>
                                    </a>
                                    
                                  </ol>
                                </p>
                        </motion.div>

                    </div>
                   
        </motion.div>
      </div>
      </>
    );
}

export default Education;