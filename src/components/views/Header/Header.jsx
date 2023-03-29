import { useState } from "react";
import { HandySvg } from "handy-svg";
import IconButton from "components/ui/IconButton";
import logo from "../../../assets/images/mobile/svg/logo-mobile-header.svg";
import stick from "../../../assets/images/mobile/svg/open-stick.svg";
import closeBtn from "../../../assets/images/mobile/svg/close-btn.svg";
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

      <div className={styles.openBtn__wrapper}>
        <IconButton className={styles.openBtn}>
          <HandySvg
            src={stick}
            width={22}
            height={3}
            className={styles.openBtn__top}
          />
          <HandySvg
            src={stick}
            width={22}
            height={3}
            className={styles.openBtn__middle}
          />
          <HandySvg
            src={stick}
            width={22}
            height={3}
            className={styles.openBtn__bottom}
          />
        </IconButton>
        {/* <IconButton src={closeBtn} width={18} height={18} className={styles.closeBtn} /> */}
      </div>
    </header>
  );
};

export default Header;
