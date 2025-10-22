import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import "./carousel.css";
const InfiniteCarousel = () => {
  return (
    <div className="carouselLogos">
      <motion.div
        className="carouselLogos__track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
      >
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((i) => (
          <div className="carouselLogos__item-main" key={uuidv4()}>
            <img src={`/mell-games.png`} alt="" />
          </div>
        ))}
        {/* Duplicate for seamless looping */}
        {/*  {[1, 2, 3, 4, 5].map((i) => (
          <div className="carousel__item" key={`dup-${i}`}>
            <img src={`/mell-games.png`} alt="" />
          </div>
        ))} */}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
