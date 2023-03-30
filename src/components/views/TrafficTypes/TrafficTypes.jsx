import auto from "../../../assets/images/mobile/transportation/auto.png";
import rail from "../../../assets/images/mobile/transportation/rail.png";
import shipping from "../../../assets/images/mobile/transportation/shipping.png";
import styles from "./trafficTypes.module.css";

const TrafficTypes = () => {
  return (
    <section className={styles.traffic}>
      <h2 className={styles.traffic__title}>
        Полный цикл без участия владельца груза
      </h2>
      <p className={styles.traffic__descr}>
        Сокращаем время в пути, благодаря оптимальной стыковке железнодорожного
        и морского расписания
      </p>
      <ul className={styles.traffic__list}>
        <li className={styles.traffic__item}>
          <p className={styles.traffic__subheading}>
            Первая и последняя миля цикла
          </p>
          <h2 className={styles.traffic__heading}>Авто перевозки</h2>
          <img src={auto} alt="auto" className={styles.traffic__img} />
        </li>
        <li className={styles.traffic__item}>
          <p className={styles.traffic__subheading}>
            Более 75% внутреннего грузооборота
          </p>
          <h2 className={styles.traffic__heading}>ЖД перевозки</h2>
          <img src={rail} alt="rail" className={styles.traffic__img} />
        </li>
        <li className={styles.traffic__item}>
          <p className={styles.traffic__subheading}>
            19 внешнеторговых и каботажных морских линий
          </p>
          <h2 className={styles.traffic__heading}>Морские перевозки</h2>
          <img src={shipping} alt="shipping" className={styles.traffic__img} />
        </li>
      </ul>
    </section>
  );
};

export default TrafficTypes;
