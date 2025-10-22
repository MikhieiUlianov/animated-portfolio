import { useEffect, useState } from "react";
import "./quoteBlock.css";

const quotes = [
  "«Главное — быть настоящим!»",
  "«Каждый день — как новый стрим.»",
  "«Не сдавайся, даже если чат против!»",
  "«Настоящая энергия — в эмоциях.»",
  "«Если веришь — сделаешь хайп!»",
];

const QuoteBlock = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <section className="quoteBlock">
      <p>{quote}</p>
    </section>
  );
};

export default QuoteBlock;
