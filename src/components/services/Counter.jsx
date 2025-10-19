import { useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const Counter = ({ from, to, text }) => {
  const [counter, setCounter] = useState(from);
  const ref = useRef();
  const isInView = useInView(ref);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev) => {
        setCounter(Math.floor(prev));
      },
    });

    return () => animation.cancel();
  }, [isInView, from, to]);
  return (
    <motion.div className="counter" ref={ref}>
      <h1>{counter}+</h1>
      <p>{text}</p>
    </motion.div>
  );
};

export default Counter;
