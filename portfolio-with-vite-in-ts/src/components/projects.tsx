import ts from "../svgs/typescript.svg";
import react from "../svgs/react-2.svg";
import express from "../svgs/expressjs.svg";
import axios from "../svgs/axios.svg"
import mysql from "../svgs/mysql.svg";
import python from "../svgs/python.svg";
import sqlite from "../svgs/sqlite.svg";
import flask from "../svgs/flask.svg";
import vuejs from "../svgs/vuejs.svg";
import tailwind from "../svgs/tailwind.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {motion, useAnimation, useInView} from "framer-motion";
import {useEffect, useRef} from "react";

export default function Projects() {

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once : true});
    const controls = useAnimation();

    const parentVariants = {
        initial : {
            opacity : 0,
            x : 100,
            y : 0,
        },
        animate : {
            opacity : 1,
            x : 0,
            y : 0,
            transition : {
                delayChildren : 0.5,
                staggerChildren : 1,
            },
        },
    };

    const childVariants = {
        initial : {
            opacity : 0,
            x : 1000,
        },
        animate : {
            opacity : 1,
            x : 0,
            transition : {
                duration : 0.35,
                type : "spring",
                damping: 10,        // dampness controls bounc-y ness of it, a higer number makes it less bouncy
                mass: 0.75,         // is the mass of the object (how heavy) a lower mass makes it feel more light and hence more responsive
                stiffness: 125,     // controls how stiff the spring-y motion is, a higher stiffness makes the animation more rigid and snappier
            }
        }
    };

    useEffect(() => {
        if(isInView) {
            controls.start("animate");
        }
        else {
            controls.start("initial");
        }
    }, [isInView]);


    return (
        <>
            <div className="project-container">
                <h1 className="headers"><span style={{color : "#2772EF"}}>Projects</span></h1>


                <motion.div className="project-flex" ref={ref} variants={parentVariants} initial="initial" animate={controls}>




                    <motion.div className="project" variants={childVariants}>
                        <h2 className="h2">NewsGenius</h2>
                        <p>
                            <ul>
                                <li>Developed a Full-Stack Authentication System using React, TypeScript, Axios, NewsAPI, Express and MySQL</li>
                                <li>Implemented functionality for users to input search terms and select preferred languages and fetched relevant news
                                    articles via RESTful requests.</li>
                                <li>Demonstrated proficiency in API integration, data retrieval and user interface design to provide tailored news
                                    content.</li>
                                    <br />
                                <span className="img-span">
                                    <img src={ts} style={{width: "32px", height : "32px"}}></img>
                                    <img src={react} style={{width: "35px", height : "35px"}}></img>
                                    <img src={axios} style={{width: "35px", height : "35px"}}></img>
                                    <img src={express} style={{width: "65px", height : "35px"}}></img>
                                    <img src={mysql} style={{width: "55px", height : "30px"}}></img>
                                </span>
                                <br />
                                <a href='https://github.com/dafzaaal/article-generator' target='_blank'>
                                    <button className='githubbutton' style={{marginTop: "60px"}}> <FontAwesomeIcon icon={faGithub} size='lg' className='icons'/>Check it Out on GitHub!</button>
                                </a>
                            </ul>
                        </p>
                    </motion.div>

                    <motion.div className="project" variants={childVariants}>
                        <h2 className="h2">Better D2L</h2>
                        <p>
                            <ul>
                                <li>Developed a full-stack web application using Flask and Vue.js with tailwind for the UI.</li>
                                <li>Used SQLite3 database to store a student’s course related information such as exam dates and assignment deadlines.</li>
                                <li>Created an interactive interface to allow the player to easily access and maneuver the interface.</li>
                                    <br />
                                <span className="img-span">
                                    <img src={python} style={{width: "32px", height : "38px"}}></img>
                                    <img src={vuejs} style={{width: "35px", height : "35px"}}></img>
                                    <img src={flask} style={{width: "90px", height : "35px"}}></img>
                                    <img src={sqlite} style={{width: "90px", height : "35px"}}></img>
                                    <img src={tailwind} style={{width: "50px", height : "35px"}}></img>
                                </span>
                                <br />
                                <a href='https://github.com/dafzaaal/article-generator' target='_blank'>
                                    <button className='githubbutton' style={{marginTop: "60px"}}> <FontAwesomeIcon icon={faGithub} size='lg' className='icons'/>Check it Out on GitHub!</button>
                                </a>
                            </ul>
                        </p>
                    </motion.div>










                </motion.div>
            </div>
        </>
    );
}