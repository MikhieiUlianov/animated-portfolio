import { Link } from "react-router";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    link: "/history",
    id: 1,
    img: "/service1.png",
    title: "История успеха",
    counter: 35,
  },
  {
    link: "/mellstroy-games",
    id: 2,
    img: "/service2.png",
    title: "Mellstroy Games",
    counter: 23,
  },
  {
    link: "/game",
    id: 3,
    img: "/service3.png",
    title: "Мини-игра",
    counter: 46,
  },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          Хотите узнать больше?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <Link to={service.link} key={uuidv4()}>
              <motion.div variants={listVariants} className="service">
                <div className="serviceIcon">
                  <img src={service.img} alt="" />
                </div>
                <div className="serviceInfo">
                  <h2>{service.title}</h2>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
      <div className="sSection right">
        <ComputerModelContainer />
      </div>
    </div>
  );
};

export default Services;
