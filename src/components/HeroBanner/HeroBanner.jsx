import { motion } from "framer-motion";
import "./heroBanner.css";

const HeroBanner = () => {
  return (
    <section className="heroBanner">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mellstroy Games
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Проверь, насколько хорошо ты знаешь легендарного стримера 💜
      </motion.p>

      <motion.div
        className="glowLine"
        initial={{ width: 0 }}
        animate={{ width: "80%" }}
        transition={{ delay: 0.6, duration: 1 }}
      />
    </section>
  );
};

export default HeroBanner;
