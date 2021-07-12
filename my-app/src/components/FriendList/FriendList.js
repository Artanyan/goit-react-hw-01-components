import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <div className={styles.container}>
        <ul className={styles.list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
            <li className={styles.item} key={id}>
                <span className={isOnline ? styles.online : styles.offline}></span>
                <img className={styles.avatar} src={avatar} alt={name} width="48" />
                <p className={styles.name}>{name}</p>
            </li>)
            )}
        </ul>
    </div>
);

FriendList.defaultProps = {
    
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
}.isRequired;


export default FriendList;