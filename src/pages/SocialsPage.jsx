import InfiniteCarousel from "../components/Carousel/Carousel";
import Socials from "../components/Socials/Socials";
import "../components/Socials/socials.css";

const SocialsPage = () => {
  return (
    <>
      <Socials />;
      <div className="carousel">
        <InfiniteCarousel />
      </div>
    </>
  );
};

export default SocialsPage;
