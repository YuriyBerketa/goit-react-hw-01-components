import PropTypes from "prop-types";


export const StatisticElements = ({label, percentage}) => {
    return (
        <li className="item">
      <span className="label"> {label}%</span>
      <span className="percentage"> {percentage}%</span>
    </li>
    )
}

StatisticElements.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}