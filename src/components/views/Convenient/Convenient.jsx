import ButtonLink from "components/ui/ButtonLink/ButtonLink";
import truck from "../../../assets/images/mobile/truck.png";
import cn from "classnames";
import styles from "./convenient.module.css";

const Convenient = () => {
  return (
    <section className={styles.convenient}>
      <h2 className={styles.convenient__title}>Даже если вы далеко</h2>
      <p
        className={cn(
          styles.convenient__descr,
          styles["convenient__descr--first"]
        )}
      >
        Мы заберем контейнер с грузом и довезем его до железнодорожного пункта
        отправки
      </p>
      <p
        className={cn(
          styles.convenient__descr,
          styles["convenient__descr--second"]
        )}
      >
        Если с вашим населенным пунктом нет жд сообщения, мы организуем доставку
        до ближайщей грузовой станции
      </p>
      <div className={styles.convenient__wrapper}>
        <img className={styles.convenient__image} alt="truck" src={truck} />
      </div>
      <p
        className={cn(
          styles.convenient__descr,
          styles["convenient__descr--third"]
        )}
      >
        Если у вас нет контейнера, мы дадим вам в аренду наш контейнер (20 или
        40 футов) по выгодной цене
      </p>
      <div className={styles.convenient__button}>
        <ButtonLink text="Арендовать контейнер" to="#" color="blue" />
      </div>
    </section>
  );
};

export default Convenient;
