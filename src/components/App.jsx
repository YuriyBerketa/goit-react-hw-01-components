import user from "../data/user.json";
import  {UserProfile}  from "./UserCard";
import { Statistic } from "./Statistic";
import data from "../data/data.json";
import friends from "../data/friends";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";
// import { TransactionItem } from "./TransactionHistory/TransactionItem";
import transactions from "../data/transactions.json";


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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

    </div>
  )
}

export default App;