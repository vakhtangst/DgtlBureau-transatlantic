import { HandySvg } from "handy-svg";
import FooterContacts from "components/common/FooterContacts copy/FooterContacts";
import NavBar from "components/common/NavBar";
import logo from "../../../assets/images/mobile/svg/logo-mobile-header.svg";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <HandySvg
        src={logo}
        className={styles.footer__logo}
        width="115"
        height="27"
      />
      <NavBar type={"footer"} />
      <div className={styles.address}>
        <FooterContacts
          address="Екатеринбург"
          tel="+7 (343) 287-94-14"
          mail="ekb.office@transatlantic.pro"
          className={styles.address__contacts}
        />
        <FooterContacts
          address="Москва"
          tel="+7 (495) 287-94-14"
          mail="msk.office@transatlantic.pro"
          className={styles.address__item}
        />
      </div>
      <div className={styles.privasy}>
        <span className={styles.privasy__policy}>
          Политика конфиденциальности
        </span>
        <span className={styles.privasy__company}>
          Транспортная компания ООО «Трансатлантик»
        </span>
      </div>
    </footer>
  );
};

export default Footer;
