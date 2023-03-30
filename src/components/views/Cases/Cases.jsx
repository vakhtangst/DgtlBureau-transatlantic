import { HandySvg } from "handy-svg";
import { Link } from "react-router-dom";
import arrow from "../../../assets/images/mobile/svg/arrow-right.svg";
import lighthouse from "../../../assets/images/mobile/cases/lighthouse.png";
import crane from "../../../assets/images/mobile/cases/crane.png";
import shipFirst from "../../../assets/images/mobile/cases/ship-1.png";
import shipSecond from "../../../assets/images/mobile/cases/ship-2.png";
import cn from "classnames";
import styles from "./cases.module.css";

const Cases = () => {
  return (
    <section className={styles.cases}>
      <h2 className={styles.cases__title}>Наши кейсы</h2>
      <ul className={styles.cases__list}>
        <li className={styles.cases__item}>
          <Link className={styles.cases__link}>
            <div className={styles.cases__wrapper}>
              <h4 className={styles.cases__heading}>Металл 2022</h4>
              <HandySvg
                src={arrow}
                width={11}
                height={11}
                className={styles.cases__icon}
              />
            </div>
            <img
              src={shipSecond}
              alt="ship"
              className={cn(
                styles.cases__image,
                styles["cases__image--shipSecond"]
              )}
            />
          </Link>
        </li>
        <li className={styles.cases__item}>
          <Link className={styles.cases__link}>
            <div className={styles.cases__wrapper}>
              <h4 className={styles.cases__heading}>
                Мы везли груз из Австралии в России
              </h4>
              <HandySvg
                src={arrow}
                width={11}
                height={11}
                className={styles.cases__icon}
              />
            </div>
            <img
              src={crane}
              alt="crane"
              className={cn(styles.cases__image, styles["cases__image--crane"])}
            />
          </Link>
        </li>
        <li className={styles.cases__item}>
          <Link className={styles.cases__link}>
            <div className={styles.cases__wrapper}>
              <h4 className={styles.cases__heading}>
                Самая быстрая грузоперевозка в 2022 году
              </h4>
              <HandySvg
                src={arrow}
                width={11}
                height={11}
                className={styles.cases__icon}
              />
            </div>
            <img
              src={lighthouse}
              alt="lighthouse"
              className={cn(
                styles.cases__image,
                styles["cases__image--lighthouse"]
              )}
            />
          </Link>
        </li>
        <li className={styles.cases__item}>
          <Link className={styles.cases__link}>
            <div className={styles.cases__wrapper}>
              <h4 className={styles.cases__heading}>
                Evergreen в Суэцком канале
              </h4>
              <HandySvg
                src={arrow}
                width={11}
                height={11}
                className={styles.cases__icon}
              />
            </div>
            <img
              src={shipFirst}
              alt="ship"
              className={cn(
                styles.cases__image,
                styles["cases__image--shipFirst"]
              )}
            />
          </Link>
        </li>
      </ul>
      <Link className={styles.cases__button} to="#">
        Посмотреть все
      </Link>
    </section>
  );
};

export default Cases;
