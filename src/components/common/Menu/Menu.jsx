import { HandySvg } from "handy-svg";
import PropTypes from "prop-types";
import IconButton from "components/ui/IconButton";
import ButtonLink from "components/ui/ButtonLink/ButtonLink";
import Contacts from "components/common/Contacts";
import NavBar from "components/common/NavBar";
import closeBtn from "../../../assets/images/mobile/svg/close-btn.svg";
import cn from "classnames";
import styles from "./menu.module.css";

const Menu = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={cn(styles.menu, {
        [styles["menu--open"]]: openMenu,
      })}
    >
      <div className={styles.closeBtn__wrapper}>
        <IconButton
          className={styles.closeBtn}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <HandySvg
            src={closeBtn}
            width={18}
            height={18}
            className={styles.closeBtn__icon}
          />
        </IconButton>
      </div>

      <div className={styles.menu__blueButton}>
        <ButtonLink text="Войти в личный кабинет" to="#" color="blue-big" />
      </div>

      <NavBar />

      <div className={styles.address}>
        <Contacts
          address="Екатеринбург"
          tel="+7 (343) 287-94-14"
          mail="ekb.office@transatlantic.pro"
          className={styles.menu__contacts}
        />
        <Contacts
          address="Москва"
          tel="+7 (495) 287-94-14"
          mail="msk.office@transatlantic.pro"
          className={styles.menu__contacts}
        />
      </div>
    </div>
  );
};

Menu.propTypes = {
  openMenu: PropTypes.bool,
  setOpenMenu: PropTypes.func,
};

Menu.defaultProps = {
  openMenu: false,
  setOpenMenu: () => {},
};

export default Menu;
