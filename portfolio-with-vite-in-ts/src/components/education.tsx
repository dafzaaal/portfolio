import {useEffect, useRef} from 'react';
import { motion, useScroll, useAnimation, useInView, stagger, color, useTransform} from 'framer-motion';
import uofc from "../images/uofc logo.png"
import "../App.css"
import '../css/hover.css';

function Education() {
    const ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(ref);
    const controls = useAnimation();

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
            staggerChildren: 0.5,
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
                                    A member of both the University of Calgary Undergraduate Society as well as the Information Security
                                    club!
                                </p>
                        </motion.div>

                    </div>
                   
        </motion.div>
      </div>
      </>
    );
}

export default Education;