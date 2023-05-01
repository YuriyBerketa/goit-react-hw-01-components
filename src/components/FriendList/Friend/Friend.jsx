import PropTypes from "prop-types";
import css from "./Friend.module.css";

const status = variant => {
    return variant ? '#FF2818' : '#1EFF18';
};

export const Friend = ({avatar, name, isOnline}) => {
    return (
    <li className={css.item}>
            <span className={css.status}
            style={{backgroundColor: status(isOnline)}}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="60" />
            <p className={css.name}>{ name }</p>
</li>
);
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}