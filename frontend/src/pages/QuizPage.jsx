import InfiniteCarousel from "../components/Carousel/Carousel";
import Quiz from "../components/Quiz/Quiz";
import "../components/Quiz/quiz.css";

const QuizPage = () => {
  return (
    <>
      <div className="carouselLogos short">
        <InfiniteCarousel />
      </div>
      <Quiz />
    </>
  );
};

export default QuizPage;
