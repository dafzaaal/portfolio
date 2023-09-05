import { useState } from "react";
import Particle from "./Particle";
import react from "react";
import axios from "axios";
import { FaRegHandPointDown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";


export default function Contact() {

    const variants = {
        whileHover : {
            scale : 1.1,
            transition : {
                type : "spring",
                duration : 0.5,
                mass : 1,
            },
        },
        whileTap : {
            scale : 0.85,
            tranistion : {
                type : "spring",
            }
        }
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleNameChange(event : React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleSubjectChange(event : React.ChangeEvent<HTMLInputElement>) {
        setSubject(event.target.value);
    }

    function handleEmailChange(event : React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleMessageChange(event : React.ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value);
    }

    function sendEmail() {
        const headers = {
            "name" : {name},
            "email" : {email},
            "subject" : {subject},
            "message" : {message},
        }

        axios.post
        

    }


    return (
        <>
            <div className="contact-container">
                <h1 className="headers" style={{color : "#2772EF"}}>Send me an E-mail!</h1>


                   <div className="email-container">
                        
                    
                        <div className="email-form-flex">
                            <form className="email-form">
                            <h3>Fill out the form below!<span style={{marginLeft : "10px"}}><FaRegHandPointDown/></span></h3>
                                <input type="text" placeholder="Enter your name..." onChange={handleNameChange}></input>
                                <input type="text"  placeholder="Enter your e-mail..." onChange={handleSubjectChange}></input>
                                <input type="text"  placeholder="Enter e-mail subject..." onChange={handleEmailChange}></input>
                                <textarea placeholder="Enter message..." onChange={handleMessageChange}></textarea>
                                <motion.button variants={variants} whileHover="whileHover" whileTap="whileTap">Send!</motion.button>
                            </form>
                        </div>    


                    </div> 
            </div>

        </>
    );
}