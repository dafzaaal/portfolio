import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from 'react';

export default function Scroll() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.25, 0.5, 0.75, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.25, 0.5, 0.75, 1]);

    const YTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [100, 0],
    );



    return (
        <>
            <div>
                <h1>Scroll Stuff</h1>
                <motion.div
                    ref={ref}
                    style={{
                        opacity,
                        y: YTransform,
                        originY: 1, // Set the originY to 1 (bottom) to make it animate from the bottom
                    }}
                >
                    <motion.div>
                        <h1>Item 1</h1>
                    </motion.div>

                    <motion.div>
                        <h1>Item 2</h1>
                    </motion.div>

                    <motion.div>
                        <h1>Item 3</h1>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
