import user from "../data/user.json";
import  {UserProfile}  from "./UserCard";



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
    </div>
  )
}

export default App;