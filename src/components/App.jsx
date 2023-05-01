import user from "../data/user.json";
import  {UserProfile}  from "./UserCard";
import { Statistic } from "./Statistic";
import { StatisticElements } from "./Statistic/StatisticElements";
import data from "../data/data.json";


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

    </div>
  )
}

export default App;