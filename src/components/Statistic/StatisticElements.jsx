import PropTypes from "prop-types";
import { getRandomHexColor } from "./getRandomHexColor";
import css from './Statistics.module.css';

export const StatisticElements = ({label, percentage}) => {
    return (
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}> {label}</span>
      <span className={css.percentage}> {percentage}%</span>
    </li>
    )
}

StatisticElements.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}