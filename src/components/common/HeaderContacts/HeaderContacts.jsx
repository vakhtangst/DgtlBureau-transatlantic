import PropTypes from "prop-types";
import styles from "./headerContacts.module.css";

const HeaderContacts = ({ address, tel, mail, className }) => {
  return (
    <div className={`${styles.headerContacts} ${className}`}>
      <address className={styles.headerContacts__address}>{address}</address>
      <ul className={styles.headerContacts__list}>
        <li className={styles.headerContacts__item}>
          <a href={`mailto:${mail}`} className={styles.headerContacts__mail}>
            {mail}
          </a>
        </li>
        <li className={styles.headerContacts__item}>
          <a href={`tel:${tel}`} className={styles.headerContacts__tel}>
            {tel}
          </a>
        </li>
      </ul>
    </div>
  );
};

HeaderContacts.propTypes = {
  address: PropTypes.string,
  tel: PropTypes.string,
  mail: PropTypes.string,
  className: PropTypes.string,
};

HeaderContacts.defaultProps = {
  address: "",
  tel: "",
  mail: "",
  className: "",
};

export default HeaderContacts;
