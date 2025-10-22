import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Самый популярный блогер!",
            1000,
            "Делаю самые сумасшедшие события!",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          //omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/hero.webp" alt="" />
    </motion.div>
  );
};

export default Speech;
