import { useRef } from "react";
import "./portfolio.css";
import { motion, useInView } from "motion/react";
import { v4 as uuidv4 } from "uuid";

const items = [
  {
    title: "Instagram",
    link: "https://instagram.com/mellstroy",
    img: "/socials/instagram.png",
    desc: "Следите за Mellstroy, чтобы видеть закулисные обновления и эксклюзивные анонсы!",
  },
  {
    title: "Tik-Tok",
    link: "https://tiktok.com/@glavstroy",
    img: "/socials/tiktok.png",
    desc: "Смотрите веселые клипы, короткие подборки и вирусные моменты!",
  },
  {
    title: "Kick",
    link: "https://kick.com/mellstroy987",
    img: "/socials/kick.png",
    desc: "Присоединяйтесь к стримам и общайтесь с Mellstroy в реальном времени.",
  },
  {
    title: "Mellstroy Games",
    link: "https://mellstroy.games",
    img: "/socials/mell-games.png",
    desc: "Изучайте все его игры, проекты и новые релизы.",
  },
  {
    title: "Telegram",
    link: "https://t.me/mellstroy",
    img: "/socials/telegram.png",
    desc: "Присоединяйтесь к сообществу и получайте свежие обновления мгновенно!",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>Перейти</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="pWrapper">
      <h2 className="pTitle">Начать следить за Mellstroy:</h2>
      <div className="portfolio">
        {items.map((item) => (
          <ListItem item={item} key={uuidv4()} />
        ))}
      </div>{" "}
    </div>
  );
};

export default Portfolio;
