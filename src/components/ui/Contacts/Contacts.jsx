import PropTypes from "prop-types";
import styles from "./contacts.module.css";

const Contacts = ({ address, tel, mail, className }) => {
  return (
    <div className={`${styles.contacts} ${className}`}>
      <address className={styles.contacts__address}>{address}</address>
      <ul className={styles.contacts__list}>
        <li className={styles.contacts__item}>
          <a href={`mailto:${mail}`} className={styles.contacts__mail}>
            {mail}
          </a>
        </li>
        <li className={styles.contacts__item}>
          <a href={`tel:${tel}`} className={styles.contacts__tel}>
            {tel}
          </a>
        </li>
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  address: PropTypes.string,
  tel: PropTypes.string,
  mail: PropTypes.string,
  className: PropTypes.string,
};

Contacts.defaultProps = {
  address: "",
  tel: "",
  mail: "",
  className: "",
};

export default Contacts;
