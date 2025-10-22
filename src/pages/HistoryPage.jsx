import { Helmet } from "react-helmet";
import InfiniteCarousel from "../components/Carousel/Carousel";
import History from "../components/History/History";

const HistoryPage = () => {
  return (
    <>
      <Helmet>
        <title>Mellstroy | Company History & Milestones</title>

        <meta
          name="description"
          content="Discover the history of Mellstroy: our milestones, achievements, and journey in creating 3D interactive projects and games."
        />

        <meta
          property="og:title"
          content="Mellstroy | Company History & Milestones"
        />
        <meta
          property="og:description"
          content="Discover the history of Mellstroy: our milestones, achievements, and journey in creating 3D interactive projects and games."
        />
        <meta property="og:image" content="/mellstroy-history-og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mellstroy.games/history" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mellstroy | Company History & Milestones"
        />
        <meta
          name="twitter:description"
          content="Discover the history of Mellstroy: our milestones, achievements, and journey in creating 3D interactive projects and games."
        />
        <meta name="twitter:image" content="/mellstroy-history-og.png" />
      </Helmet>

      <div>
        <InfiniteCarousel />
        <History />
      </div>
    </>
  );
};

export default HistoryPage;
