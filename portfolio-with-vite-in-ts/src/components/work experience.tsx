import {useEffect, useRef} from 'react';
import { motion, useScroll, useAnimation, useInView, stagger, color, useTransform} from 'framer-motion';
import {FaPython} from "react-icons/fa";
import "../App.css"
import '../css/hover.css';
import {transform} from "@svgr/core";
import python from "../svgs/python.svg";
import react from "../svgs/react-2.svg";
import docker from "../svgs/docker.svg";
import git from "../svgs/git.svg";
import jenkins from "../svgs/jenkins.svg";
import kubernetes from "../svgs/kubernetes.svg";
import csharp from "../svgs/csharp.svg";
import circleci from "../svgs/circle ci.svg";
import sap from "../svgs/sap.svg";
import playwright from "../svgs/playwright.svg"

export default function Experience() {

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once : true});
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
            delayChildren: 0.25,
            staggerChildren: 0.85,
          },
        },
      };
      
      const childVariants = {
        initial: {
          x: 30,
          y : 30,
          opacity: 0,
        },
        animate: {
          x : 0,
          y : 0,
          opacity: 1,
        },
      };

    // scrollY [array of values mapped form] [array of values mapped to] ex. [0, 0.5, 1] [1, 0.5, 0] --> if the scrollYprogress is 0 meaning its at the beginning on your container
    /* 
        then the opacity is 1 meaning its viewable
        when the progress is 0.5 meaning its halfway scrolled through the container, the opacity becomes 0.5
        when we've reached 100% or 1 this means we've reached the bottom of our container hence making it now invisible

    */

    return(
        <>
        <h1 className="exp-header" style={{color: '#2772EF'}}>Work Experience</h1>

        
        <motion.div className='work-exp-section'  variants={parentVariants} initial="initial" animate={controls} ref={ref} >
            
                <motion.div className='work-exp' variants={childVariants}>
                <div className='first-work-exp-flex'>
                    <div>
                        <h2>Nokia</h2>
                        <h3>DevOps Engineer Co-op</h3>
                        <ul>
                            <li> Automated the build process of a Docker image by leveraging Docker labels with the printevn command.</li>
                            <li>
                            Implemented GitLab Integration to create and push a Git tag whenever a newer version of the image was generated 
                            ensuring version control and traceability.
                            </li>
                            <li>Integrated over 80+ company repositories with Jira by creating a python script to automate the process using the Gitlab API</li>
                            <br />
                            <span className='img-span'>
                                <img src={python} style={{width : "39px", height : "44px"}}></img>
                                <img src={jenkins} style={{width: "39px", height : "44px"}}></img>
                                <img src={docker} style={{width: "39px", height : "44px"}}/>
                                <img src={git} style={{width: "39px", height : "44px"}}/>
                                <img src={kubernetes} style={{width: "41px", height : "42px"}}/>
                            </span>
                                
                            
                        </ul>
                        </div>

                        <div className='date'>
                        <h4>May 2023 - Sept. 2023 <br /> Ottawa, Ontario</h4>
                        </div>


                        

                    </div>
                </motion.div>




                <motion.div className='second-work-exp' variants={childVariants}>
                <div className='first-work-exp-flex'>
                    <div>
                        <h2>Nokia</h2>
                        <h3>DevOps Engineer Co-op</h3>
                        <ul>
                            <li> 
                                Utilized Docker and python Poetry to containerize and enhance existing python applications, resulting in a 35% improvement in dependency management and resource allocation.
                            </li>

                            <li>
                                Implemented version control using Poetry commands, leading to an 80% reduction in collisions when pulling artifacts from JFrog
                            </li>

                            <li>Streamlined the build and deployment of Docker images to JFrog by automating the process using JCasC</li>

                            <li>Orchestrated automated testing triggered by merge request on Gitlab through JCasC and web-hooks</li>
                            <br />
                            <span className='img-span'>
                                <img src={python} style={{width : "39px", height : "44px"}}></img>
                                <img src={jenkins} style={{width: "39px", height : "44px"}}></img>
                                <img src={docker} style={{width: "39px", height : "44px"}}/>
                                <img src={git} style={{width: "39px", height : "44px"}}/>
                                <img src={kubernetes} style={{width: "41px", height : "42px"}}/>
                            </span>
                        </ul>

                        </div>

                        <div className='date'>
                        <h4>Sept. 2022 - Dec. 2022 <br /> Ottawa, Ontario</h4>
                        </div>
                    </div>
                </motion.div>






                <motion.div className='third-work-exp' variants={childVariants}>
                <div className='first-work-exp-flex'>
                    <div>
                        <h2>Nutrien</h2>
                        <h3>IT Digital Delivery Co-op</h3>
                        <ul className='p'>
                            <li> Optimized Circle CI builds through testing, consistently identifying stable builds ahead of schedule</li>
                            <li>
                                 Validated API endpoints against HANA database, ensuring accurate and reliable data interactions using Postman for API testing.
                            </li>
                            <li>Contributed to the design, construction, and maintenance of software modules.</li>
                            <li>Conducted efficient UI testing across multiple platforms and devices using Browser Stack</li>
                            <br />
                            <span className='img-span'>
                                <img src={sap} style={{width : "70px", height : "35px"}}></img>
                                <img src={playwright} style={{width : "70px", height : "35px"}}></img>
                                <img src={circleci} style={{width : "35px", height : "35px"}}></img>
                                <img src={csharp} style={{width : "70px", height : "35px"}}></img>
                            </span>
                        </ul>
                        </div>

                        <div className='date'>
                        <h4>Jan. 2022 - Sept. 2022 <br /> Calgary, AB</h4>
                        </div>


                        

                    </div>
                </motion.div>
















          </motion.div>
          </>
    );
}