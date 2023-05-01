import PropTypes from 'prop-types';
import { StatisticElements } from './StatisticElements';

export const Statistic = ({ text, stats }) => {
  return (
    <section className="statistics">
      {text && <h2 className="title">{text}</h2>}
      <ul className="stat-list">
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
