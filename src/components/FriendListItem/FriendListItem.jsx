import s from './FriendListItem.module.css';



const FriendsListItem = ({ avatar, name, isOnline }) => {
  // const { avatar, name, isOnline } = friend;  
  return (
        <div className={s.cardFriends}>
        <img className={s.imageAvatar} src={avatar} alt="Avatar" />
        <p className={s.friendName}>{name}</p>
        <p className={s.friendStatus}>{isOnline ? <span className={s.greenText}>Online</span> : <span className={s.redText}>Offline</span>}</p>
      </div>
    );
  };
  
  export default FriendsListItem;