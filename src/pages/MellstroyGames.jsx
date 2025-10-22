import { Helmet } from "react-helmet-async";
import InfiniteCarousel from "../components/Carousel/Carousel";
import Games from "../components/Games/Games";

const MellstroyGames = () => {
  return (
    <>
      <Helmet>
        <title>Mellstroy Games | Interactive 3D Projects</title>

        <meta
          name="description"
          content="Explore Mellstroy Games: interactive 3D projects and fun experiences built with React and Three.js."
        />

        <meta
          property="og:title"
          content="Mellstroy Games | Interactive 3D Projects"
        />
        <meta
          property="og:description"
          content="Explore Mellstroy Games: interactive 3D projects and fun experiences built with React and Three.js."
        />
        <meta property="og:image" content="/mellstroy-og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mellstroy.games" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mellstroy Games | Interactive 3D Projects"
        />
        <meta
          name="twitter:description"
          content="Explore Mellstroy Games: interactive 3D projects and fun experiences built with React and Three.js."
        />
        <meta name="twitter:image" content="/mellstroy-og-image.png" />
      </Helmet>
      <InfiniteCarousel />
      <Games />;
    </>
  );
};

export default MellstroyGames;
