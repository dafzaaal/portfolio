import { motion, useScroll, useAnimation, useInView} from "framer-motion";
import {useEffect, useRef} from 'react';

export default function FramerMotionComponent() {

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


    const vars = {
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
      
      const childVars = {
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
            <motion.div ref={ref} variants={vars} initial="initial" animate={controls}>
                <motion.h1 variants={childVars}>Child 1</motion.h1>
                <motion.h1 variants={childVars}>Child 2</motion.h1>
                <motion.h1 variants={childVars}>Child 3</motion.h1>
            </motion.div>
        </>
    );
}