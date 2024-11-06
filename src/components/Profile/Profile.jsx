// TODO -create profile component
import s from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <div>
          <img className={s.avatar} src={user.avatar} alt='User Avatar'/>
          <p className={s.userName}>{user.username}</p>
          <p className={s.userTag}>@{user.tag}</p>
          <p className={s.location}>{user.location}</p>
        </div>
        <ul className={s.statsTable}>
          <li className={s.statsBox}>
            <span className={s.stats}>Followers</span>
            <span className={s.boldStats}>{user.stats.followers}</span>
          </li>
          <li className={s.statsBox}>
            <span className={s.stats}>Views</span>
            <span className={s.boldStats}>{user.stats.views}</span>
          </li>
          <li className={s.statsBox}>
            <span className={s.stats}>Likes</span>
            <span className={s.boldStats}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;