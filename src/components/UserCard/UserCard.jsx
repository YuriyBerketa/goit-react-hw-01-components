// import  user  from './data/user.json';
import data from "./user.json";

export const UserProfile = ({avatar}) => {
    return (
        <div class="profile">
  <div class="description">
    <img
      src={data.avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{data.username}</p>
    <p class="tag">@{ data.tag }</p>
    <p class="location">{data.location}</p>
  </div>

  <ul class={data.stats}>
    <li>
      <span class="label">Followers </span>
      <span class="quantity">{data.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views </span>
      <span class="quantity">{data.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes </span>
      <span class="quantity">{data.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}