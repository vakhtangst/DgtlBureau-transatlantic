import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./buttonLink.module.css";

const ButtonLink = ({ text, onClick, to, color }) => {
  return (
    <Link
      to={to}
      className={cn(styles.buttonLink, styles[`buttonLink__${color}`])}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonLink.defaultProps = {
  text: "",
  to: "",
  color: "",
  onClick: () => {},
};

export default ButtonLink;
