import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink to="#" className={styles.nav__link}>
            Услуги
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="#" className={styles.nav__link}>
            Кейсы
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="#" className={styles.nav__link}>
            Контакты
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="#" className={styles.nav__link}>
            Контейнерный парк
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
