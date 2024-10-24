import styles from "./Profile.module.css";

const Profile = (props) => {
  return ( 
    <div className={styles.profileCard}>
      <div className={styles.mainCard}>
        <img className={styles.imgProfile}
          src={props.image}
          alt={`${props.name}'s photo`} 
        />
        <p className={styles.nameProfile}>{props.name}</p>
        <p className={styles.tagProfile}>&#64;{props.tag}</p>
        <p className={styles.locationProfile}>{props.location}</p>
      </div>

      <ul className={styles.listStats}>
        <li className={styles.listStatsElem}>
          <span>Followers</span>
          <span className={styles.followers}>{props.stats.followers}</span>
        </li>
        <li className={styles.listStatsElem}>
          <span>Views</span>
          <span className={styles.views}>{props.stats.views}</span>
        </li>
        <li className={styles.listStatsElem}>
          <span>Likes</span>
          <span className={styles.likes}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;