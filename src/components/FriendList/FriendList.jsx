import css from "./FriendList.module.css";

import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className={css.friendsContainer}>
    
      <ul className={css.friendsList}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} /> 
        ))}
      </ul>
    </div>
  );
};



export default FriendList;