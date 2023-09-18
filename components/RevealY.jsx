import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const RevealY = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref,{once: false });
  const startAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      startAnimation.start("visible");
    }
  }, [inView, startAnimation]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={startAnimation}
        viewport={{once:false}}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {" "}
        {children}
      </motion.div>
    </div>
  );
};

export default RevealY;
