// import  user  from './data/user.json';
// import data from "./user.json";
import PropTypes from "prop-types";
import css from "./UserCard.module.css";

export const UserProfile = ({avatar, username, tag, location, stats}) => {
    return (
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{ tag }</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers </span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views </span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes </span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
 stats: PropTypes.objectOf(PropTypes.number),
}