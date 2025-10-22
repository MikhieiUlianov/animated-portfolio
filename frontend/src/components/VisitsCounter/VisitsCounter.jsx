/* import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import "./visitsCounter.css";

const VisitCounter = () => {
  const [backendVisits, setBackendVisits] = useState(0);
  const [animatedVisits, setAnimatedVisits] = useState(0);
  const ref = useRef();
  const isInView = useInView(ref);

  useEffect(() => {
    fetch("http://localhost:5000/visits", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setBackendVisits(data.visits))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    const animation = animate(0, backendVisits, {
      duration:
        backendVisits < 10
          ? 1
          : backendVisits < 30
          ? 2
          : backendVisits > 50
          ? 3
          : 4,
      ease: "easeOut",
      onUpdate: (prev) => setAnimatedVisits(Math.floor(prev)),
    });

    return () => animation.cancel();
  }, [backendVisits]);
  return (
    <div className="visitsCounter">
      <h2>
        🌟<span> Total Visits:</span>
      </h2>
      <p className="visitsCounter-number">{animatedVisits}</p>
    </div>
  );
};

export default VisitCounter;
 */ import { useEffect, useState } from "react";
import { animate } from "motion/react";
import "./visitsCounter.css";

const VisitCounterSection = () => {
  const [backendVisits, setBackendVisits] = useState(0);
  const [animatedVisits, setAnimatedVisits] = useState(0);

  // Fetch visits from backend
  useEffect(() => {
    fetch("http://localhost:5000/visits", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setBackendVisits(data.visits))
      .catch((err) => console.error(err));
  }, []);

  // Animate counter
  useEffect(() => {
    const animation = animate(animatedVisits, backendVisits, {
      duration: Math.min(4, backendVisits / 10),
      ease: "easeOut",
      onUpdate: (value) => setAnimatedVisits(Math.floor(value)),
    });

    return () => animation.cancel();
  }, [backendVisits]);

  return (
    <div className="counterSection">
      <div className="counterContent">
        <h1 className="counterTitle">🌟 Всего посещений</h1>
        <p className="counterNumber">{animatedVisits}</p>
        <p className="counterSubtitle">
          Пользователей посетили этот сайт и присоединились к путешествию!
        </p>
      </div>
    </div>
  );
};

export default VisitCounterSection;
