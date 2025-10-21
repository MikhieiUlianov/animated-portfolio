import { motion } from "framer-motion";
import "./socials.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const socials = [
  {
    name: "Instagram",
    link: "https://instagram.com/mellstroy",
    icon: "/socials/instagram.png",
  },
  {
    name: "TikTok",
    link: "https://tiktok.com/@mellstroy",
    icon: "/socials/tiktok.png",
  },
  {
    name: "Kick",
    link: "https://kick.com/mellstroy987",
    icon: "/socials/kick.png",
  },
  {
    name: "Mellstroy Games",
    link: "https://mellstroy.games",
    icon: "/socials/mell-games.png",
  },
];

const Socials = () => {
  return (
    <div className="socials">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        Следите за Mellstroy
      </motion.h1>
      <motion.div
        className="socialsGrid"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <div className="socialIcon">
              <img src={social.icon} alt={social.name} />
            </div>
            <div className="socialName">{social.name}</div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Socials;
