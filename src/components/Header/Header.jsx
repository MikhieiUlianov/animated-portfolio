import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "История", path: "/history" },
    { name: "Mellstroy Game", path: "/mellstroy-game" },
    { name: "Мини-игра", path: "/game" },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="headerLogo">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Mellstroy<span>Hub</span>
        </motion.h2>
      </div>

      <nav className="navLinks">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            {({ isActive }) => (
              <motion.span
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                )}
              </motion.span>
            )}
          </NavLink>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
