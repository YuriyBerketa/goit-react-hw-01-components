// import  user  from './data/user.json';
// import data from "./user.json";
import PropTypes from "prop-types";

export const UserProfile = ({avatar, username, tag, location, stats}) => {
    return (
        <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">@{ tag }</p>
    <p class="location">{location}</p>
  </div>

  <ul class={stats}>
    <li>
      <span class="label">Followers </span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views </span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes </span>
      <span class="quantity">{stats.likes}</span>
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