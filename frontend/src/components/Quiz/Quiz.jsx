import { useState } from "react";
import { motion } from "framer-motion";
import "./quiz.css";

const questions = [
  {
    question: "Какое настоящее имя Меллстроя?",
    options: ["Андрей Бурим", "Вадим Поле", "Дмитрий Иванов", "Иван Петров"],
    answer: 0,
  },
  {
    question: "В каком году Меллстрой начал свою карьеру стримера?",
    options: ["2015", "2016", "2017", "2018"],
    answer: 0,
  },
  {
    question: "Какая платформа стала основной для стримов Меллстроя?",
    options: ["Twitch", "YouTube", "Kick", "Trovo"],
    answer: 2,
  },
  {
    question: "Сколько зрителей было на стриме Меллстроя в марте 2024 года?",
    options: ["500,000", "600,000", "700,000", "720,000"],
    answer: 3,
  },
  {
    question: "Какой рекорд установил Меллстрой в марте 2024 года?",
    options: [
      "Самый длинный стрим",
      "Наибольшее количество зрителей на одном стриме",
      "Самая большая сумма пожертвований",
      "Самый быстрый рост подписчиков",
    ],
    answer: 1,
  },
];

// Добавляем массив фактов!
const facts = [
  "Меллстрой проводил стримы длиной более 12 часов!",
  "Первый стрим был на платформе Kick.",
  "Любимый жанр игр Меллстроя — киберпанк и стратегии.",
  "Меллстрой активно поддерживает игровое сообщество через мини-ивенты.",
  "На одном из стримов было более 700,000 зрителей.",
];

const TriviaQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [fact, setFact] = useState(facts[0]);

  const handleOptionClick = (index) => {
    if (selected !== null) return;
    setSelected(index);

    if (index === questions[current].answer) {
      setScore(score + 1);
    }

    setFact(facts[Math.floor(Math.random() * facts.length)]);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  if (showResult) {
    return (
      <div className="quizContainer">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="quizResult"
        >
          <h2>
            Ваш результат: {score} / {questions.length}
          </h2>
          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setSelected(null);
              setShowResult(false);
            }}
          >
            Попробовать снова
          </button>
        </motion.div>
      </div>
    );
  }

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="quizContainer">
      <div className="quizProgressBar">
        <motion.div
          className="progressFill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        key={current}
        className="quizCard"
      >
        <h2>{q.question}</h2>
        <div className="options">
          {q.options.map((opt, idx) => (
            <motion.button
              key={idx}
              className={`option ${
                selected === idx ? (idx === q.answer ? "correct" : "wrong") : ""
              }`}
              onClick={() => handleOptionClick(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {opt}
            </motion.button>
          ))}
        </div>
        <div className="randomFact">
          <strong>Факт:</strong> {fact}
        </div>
      </motion.div>
    </div>
  );
};

export default TriviaQuiz;
