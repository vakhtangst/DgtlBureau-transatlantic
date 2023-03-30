import { useState } from "react";
import { HandySvg } from "handy-svg";
import Menu from "components/common/Menu/Menu";
import IconButton from "components/ui/IconButton";
import logo from "../../../assets/images/mobile/svg/logo-mobile-header.svg";
import stick from "../../../assets/images/mobile/svg/open-stick.svg";
import cn from "classnames";
import styles from "./header.module.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.header}>
      <HandySvg
        src={logo}
        className={styles.header__logo}
        width="141"
        height="32"
      />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className={styles.openBtn__wrapper}>
        <IconButton
          className={styles.openBtn}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <HandySvg
            src={stick}
            width={22}
            height={3}
            className={cn(styles.openBtn__top, {
              [styles["openBtn__top--open"]]: openMenu,
            })}
          />
          <HandySvg
            src={stick}
            width={22}
            height={3}
            className={cn(styles.openBtn__middle, {
              [styles["openBtn__middle--open"]]: openMenu,
            })}
          />
          <HandySvg
            src={stick}
            width={22}
            height={3}
            className={cn(styles.openBtn__bottom, {
              [styles["openBtn__bottom--open"]]: openMenu,
            })}
          />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
