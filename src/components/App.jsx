// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from './profile/Profile'
import userData from './Profile/userData.json';
import FriendList from '../components/FriendList/FriendList'
import friendData from '../components/FriendList/friends.json';

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
      {/* <TransactionHistory items={transactions} />  */}
    </>
  )
}

export default App
