import clsx from "clsx";
import styles from "../FriendListItem/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendCard}>
      <img src={avatar} alt={`${name} avatar`} width="48" />
      <p>{name}</p>
      <p style={isOnline ? { color: 'green' } : { color: 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;