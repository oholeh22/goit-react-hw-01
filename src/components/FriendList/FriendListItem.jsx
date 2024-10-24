import clsx from "clsx";
import styles from "./FriendList.module.css";

const FriendListItem = ({ friend }) => { 
  const statusClass = friend.isOnline ? styles.isOnline : styles.isOffline;
 
  return (
    <li className={styles.friendCard}>
      <div>
        <img
          className={styles.friendImg}
          src={friend.avatar}
          alt={`${friend.name}'s avatar`}
          width="48"
        />
        <p className={styles.friendName}>{friend.name}</p>
        <p className={clsx(styles.friendStatus, statusClass)}>
          {friend.isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;