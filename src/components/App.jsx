import user from "../data/user.json";
import  {UserProfile}  from "./UserCard";
import { Statistic } from "./Statistic";
import { StatisticElements } from "./Statistic/StatisticElements";
import data from "../data/data.json";
import friends from "../data/friends";
import { FriendList } from "./FriendList";


function App() {
  return (
    <div>
      <UserProfile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic text="Upload stats" stats={data} />
      <FriendList friends={friends} />;

    </div>
  )
}

export default App;