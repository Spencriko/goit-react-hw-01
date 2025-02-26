import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={ styles.item}>
      <img src={avatar} alt="Avatar" width="64" />
      <p className={ styles.name}>{name}</p>
      <p className={isOnline ? styles.statusOnline : styles.statusOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;