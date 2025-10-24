import { motion } from "framer-motion";
import "./games.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Games = () => {
  return (
    <div className="mellstroyGames">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Mellstroy Game — новый проект 2025 года
      </motion.h1>

      <motion.div
        className="mgBlock"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Что такое Mellstroy Game?</h2>
        <p>
          <strong>Mellstroy Game</strong> — это новейшая разработка от самого
          Меллстроя совместно с <em>1Win</em>. Это уникальная игровая платформа,
          где пользователи могут не только участвовать в розыгрышах, но и
          испытать удачу в серии мини-игр, челленджей и стрим-ивентов.
        </p>
        <p>
          Проект объединил элементы казино, стриминга и соревнований между
          подписчиками. Его цель — создать интерактивную экосистему, где фанаты
          Меллстроя становятся активными участниками контента.
        </p>
      </motion.div>

      <motion.div
        className="mgBlock"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Особенности проекта</h2>
        <ul className="mgHighlights">
          <motion.li whileHover={{ scale: 1.03 }}>
            🎮 <strong>Онлайн-платформа:</strong> доступна на{" "}
            <em>mellstroy.game</em>
          </motion.li>
          <motion.li whileHover={{ scale: 1.03 }}>
            💰 <strong>Призы и розыгрыши:</strong> от 10 000 до 1 000 000 рублей
          </motion.li>
          <motion.li whileHover={{ scale: 1.03 }}>
            🏆 <strong>Турниры:</strong> челленджи между зрителями в прямом
            эфире
          </motion.li>
          <motion.li whileHover={{ scale: 1.03 }}>
            ⚡ <strong>Интеграция с Twitch и Kick:</strong> внутриигровая
            система донатов и ставок
          </motion.li>
          <motion.li whileHover={{ scale: 1.03 }}>
            🔥 <strong>Поддержка сообщества:</strong> активные участники
            получают ранний доступ к эксклюзивным стримам
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        className="mgImage"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src="/mellstroy-game.png" alt="Mellstroy Games" />
      </motion.div>
    </div>
  );
};

export default Games;
