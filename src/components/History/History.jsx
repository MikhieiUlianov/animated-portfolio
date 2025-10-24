import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import "./history.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const History = () => {
  const carouselImages = [
    "/mellstroy.jpeg",
    "/mellstroy.jpeg",
    "/mellstroy.jpeg",
    "/mellstroy.jpeg",
    "/mellstroy.jpeg",
  ];

  return (
    <div className="history">
      {/* CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="historyContent"
      >
        <motion.h1 variants={fadeInUp}>История успеха</motion.h1>

        <motion.div variants={fadeInUp} className="hBlock">
          <h2>2016—2019: Начало карьеры стримера</h2>
          <p>
            Вскоре после поступления в профессиональное училище он бросил учёбу
            и начал создавать игровой контент на YouTube. Меллстрой начал свою
            онлайн-активность с публикации летсплеев по Minecraft, Dota 2 и
            Counter-Strike: Global Offensive. Эти видео не принесли ему широкого
            признания, и позже он изменил формат своего контента,
            сосредоточившись на прямых трансляциях и интерактивном общении со
            зрителями. Чтобы привлечь аудиторию и увеличить число подписчиков,
            Меллстрой часто включал в свои прямые трансляции провокационные
            элементы. Во время трансляций он и участники совершали действия,
            потенциально опасные для здоровья. Он проводил онлайн-сессии в Skype
            и Chatroulette, во время которых взаимодействовал с
            девушками-участницами и побуждал их выполнять различные действия на
            камеру, транслируя отснятый материал на YouTube. Взамен он обещал им
            продвижение в социальных сетях и рекламу их аккаунтов. Через
            некоторое время он сосредоточился на создании пранк-контента, в
            котором знакомился с девушками, выдавая себя за других. Формат
            оказался успешным, и блогер начал получать предложения о рекламе, в
            том числе от онлайн-казино, розыгрышей призов и других акций. В 2020
            году он переехал в Москву, где начал проводить прямые трансляции.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="hBlock">
          <h2>2020: Первый взлёт известности</h2>
          <p>
            2020: Первый взлет известности В 2020 году он снял квартиру в
            комплексе «Москва-Сити», что позволило ему расширить масштаб и
            улучшить качество своих так называемых «трэш-стримов». После роста
            популярности трэш-стримов Меллстроя, он начал получать предложения о
            сотрудничестве от онлайн-казино. Меллстрою активно продвигал их
            рекламу, что вызывало критику со стороны других блогеров. Во время
            своих трансляций он неоднократно признавался, что основными
            источниками его многомиллионных доходов являются реклама и
            партнерские программы онлайн-казино. Во время пандемии COVID-19
            IRL-стримеры приобрели широкую популярность на платформе Twitch.
            Вместо того, чтобы играть в видеоигры, они транслировали свою
            повседневную жизнь и взаимодействовали со зрителями, создавая эффект
            присутствия во время карантина. Меллстрою стал известен своими
            трэш-стримами, которые и принесли ему наибольшую популярность. Он
            вёл многочасовые трансляции из своей квартиры в комплексе
            «Москва-Сити», приглашая таких интернет-знаменитостей, как Эдвард
            Билл, «Руки-Базуки», «Полное ТВ» и VJLink, а также многочисленных
            гостей, и организовывал челленджи с денежными вознаграждениями. К
            середине 2020 года аудитория Mellstroy достигла 500 000 зрителей.
            Атмосферу на вечеринках Mellstroy часто сравнивали с атмосферой
            «Великого Гэтсби».
          </p>
        </motion.div>

        <motion.ul variants={fadeInUp} className="hAchievements">
          <motion.li
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            🏆 <strong>Рекорд по числу зрителей:</strong> в марте 2024 года
            Mellstroy достиг 720 000 зрителей на Kick.
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            💰 <strong>Миллионные выплаты:</strong> в 2024 году он запустил
            конкурс с выплатами на сумму свыше 1 млн $.
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            ❤️ <strong>Благотворительность:</strong> в сентябре 2025 года
            перевёл 6 млн ₽ семье школьницы из Красноярска.
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            🌐 <strong>Собственный проект:</strong> в октябре 2025 года запустил
            новый медиа-проект.
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            🎮 <strong>Mellstroy Game:</strong> совместно с 1Win запущено
            онлайн-казино{" "}
            <a href="https://mellstroy-casinos.com/">
              <em>Mellstroy.game</em>
            </a>{" "}
            в октябре 2025 г.
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            🏠 <strong>Розыгрыш квартир:</strong> с 17 октября по 17 ноября 2025
            проводится TikTok-конкурс #MellstroyGame с 30 квартирами в призы.
          </motion.li>
        </motion.ul>
      </motion.div>

      {/* MAIN IMAGE */}
      <motion.div
        className="historyImage"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.img
          src="/mellstroy.jpeg"
          alt="mellstroy"
          whileHover={{ scale: 1.03, rotate: -0.5 }}
          transition={{ type: "spring", stiffness: 80 }}
        />
      </motion.div>

      {/* CAROUSEL */}
      <motion.div
        className="carousel"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="carousel__track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          whileHover={{
            transition: { duration: 15, ease: "linear" },
          }}
        >
          {[...Array(2)].flatMap(() =>
            carouselImages.map((src) => (
              <div className="carousel__item" key={uuidv4()}>
                <img src={src} alt={`Mellstroy`} />
              </div>
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default History;
