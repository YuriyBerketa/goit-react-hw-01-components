// import  user  from './data/user.json';
import data from "./user.json";

export const UserProfile = () => {
    return (
        <div class="profile">
  <div class="description">
    <img
      src={data.avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{data.username}</p>
                <p class="tag">{ data.tag }</p>
    <p class="location">{data.location}</p>
  </div>

  <ul class={data.stats}>
    <li>
      <span class="label">{data.stats.followers}</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">{data.stats.views}</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">{data.stats.likes}</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
    )
}