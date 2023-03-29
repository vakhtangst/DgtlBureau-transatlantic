import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./navbar.module.css";

const NavBar = ({ type }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            to="#"
            className={cn(styles.nav__link, styles[`nav__link--${type}`])}
          >
            Услуги
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            to="#"
            className={cn(styles.nav__link, styles[`nav__link--${type}`])}
          >
            Кейсы
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            to="#"
            className={cn(styles.nav__link, styles[`nav__link--${type}`])}
          >
            Контакты
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            to="#"
            className={cn(styles.nav__link, styles[`nav__link--${type}`])}
          >
            Контейнерный парк
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
