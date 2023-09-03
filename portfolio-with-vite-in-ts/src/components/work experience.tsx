import {useEffect, useRef} from 'react';
import { motion, useScroll, useAnimation, useInView, stagger, color, useTransform} from 'framer-motion';
import "../App.css"
import '../css/hover.css';

export default function Experience() {

    const targetRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset : ["start end", "end end"],
    });

    const YTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [100, 0],
    )


    // scrollY [array of values mapped form] [array of values mapped to] ex. [0, 0.5, 1] [1, 0.5, 0] --> if the scrollYprogress is 0 meaning its at the beginning on your container
    /* 
        then the opacity is 1 meaning its viewable
        when the progress is 0.5 meaning its halfway scrolled through the container, the opacity becomes 0.5
        when we've reached 100% or 1 this means we've reached the bottom of our container hence making it now invisible

    */
    const opacity = useTransform(scrollYProgress, [0.85, 1], [0.85, 1]);
    const scale = useTransform(scrollYProgress, [0.85, 1], [0.85, 1]);

    return(
        <>
        <h1 className="exp-header" style={{color: '#000000'}}><span style={{color: '#2772EF'}}>Work</span> Experience</h1>

        
        <div className='work-exp-section' >
            
                <motion.div className='first-work-exp' style={{opacity, scale, y : YTransform}}>
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
                        </ul>
                        </div>

                        <div className='date'>
                        <h4>May 2023 - Sept. 2023 <br /> Ottawa, Ontario</h4>
                        <div>
                            <h3>Technologies Used</h3>
                        </div>
                        </div>


                        

                    </div>
                </motion.div>




                <motion.div className='second-work-exp' style={{opacity, scale}}>
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
                        </ul>
                        </div>

                        <div className='date'>
                        <h4>May 2023 - Sept. 2023 <br /> Ottawa, Ontario</h4>
                        <div>
                            <h3>Technologies Used</h3>
                        </div>
                        </div>
                    </div>
                </motion.div>






                <motion.div className='third-work-exp' style={{opacity, scale}}>
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
                        </ul>
                        </div>

                        <div className='date'>
                        <h4>May 2023 - Sept. 2023 <br /> Ottawa, Ontario</h4>
                        <div>
                            <h3>Technologies Used</h3>
                        </div>
                        </div>


                        

                    </div>
                </motion.div>
















          </div>
          </>
    );
}