import './App.css'
import Profile from './Profile/Profile';
import userData from './Profile/userData.json';
import FriendList from './FriendList/FriendList'
import friendData from './FriendList/friends.json';
import TransactionHistory from './Transactions/TransactionHistory';
import transactions from './Transactions/transactions.json';



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
