import PropTypes from 'prop-types';
import { StatisticElements } from './StatisticElements';
import css from './Statistics.module.css';

export const Statistic = ({ text, stats }) => {
  return (
    <section className={css.statistics}>
      {text && <h2 className={css.title}>{text}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticElements key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  text: PropTypes.string,
  data: PropTypes.array,
};
