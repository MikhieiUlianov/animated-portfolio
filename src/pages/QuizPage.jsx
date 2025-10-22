import InfiniteCarousel from "../components/Carousel/Carousel";
import Quiz from "../components/Quiz/Quiz";
import "../components/Quiz/quiz.css";
import { Helmet } from "react-helmet";

const QuizPage = () => {
  return (
    <>
      <Helmet>
        <title>Quiz Game</title>
        <meta
          name="description"
          content="A short quiz game about mellstroy's facts."
        />
        <meta property="og:title" content="Quiz Game" />
        <meta
          property="og:description"
          content="A short quiz game about mellstroy's facts."
        />
        <meta property="og:image" content="/quiz-og-image.png" />
      </Helmet>
      <div className="carouselLogos short">
        <InfiniteCarousel />
      </div>
      <Quiz />
    </>
  );
};

export default QuizPage;
