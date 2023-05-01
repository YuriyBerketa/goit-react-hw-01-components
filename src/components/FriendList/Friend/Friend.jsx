import PropTypes from "prop-types";

const status = variant => {
    return variant ? '#FF2818' : '#1EFF18';
};

export const Friend = ({avatar, name, isOnline}) => {
    return (
    <li className="item">
            <span className="status"
            style={{backgroundColor: status(isOnline)}}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{ name }</p>
</li>
);
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}