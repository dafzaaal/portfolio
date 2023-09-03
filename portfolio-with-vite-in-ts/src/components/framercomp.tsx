import { motion, useScroll, useAnimation, useInView, useTransform} from "framer-motion";
import {useEffect, useRef} from 'react';

export default function FramerMotionComponent() {

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    const controls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
            delayChildren: 0.5,
            staggerChildren: 0.5,
          },
        },
      };
      
      const childVars = {
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
      
    
    return(
        <>
            <motion.div ref={ref} variants={vars} initial="initial" animate={controls} style={{opacity}}>
                <motion.h1 variants={childVars}>Child 1</motion.h1>
                <motion.h1 variants={childVars}>Child 2</motion.h1>
                <motion.h1 variants={childVars}>Child 3</motion.h1>
            </motion.div>
        </>
    );
}