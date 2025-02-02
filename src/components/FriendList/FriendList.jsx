import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.friendListItem}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline}/>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;