import './App.css'
import Profile from './profile/Profile';
import userData from './profile/userData.json';
import FriendList from './friendList/FriendList'
import friendData from './friendList/friends.json';
import TransactionHistory from './transactions/TransactionHistory';
import transactions from './transactions/transactions.json';



function App() {
 

  return (
    <>
       <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {<FriendList friends={friendData} /> }
      {<TransactionHistory items={transactions} />}
    </>
  )
}

export default App
