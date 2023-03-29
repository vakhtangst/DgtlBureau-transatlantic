import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ text, className, onClick }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: "",
  className: "",
  onClick: () => {},
};

export default Button;
