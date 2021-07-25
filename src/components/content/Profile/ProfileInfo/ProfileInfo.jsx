import React from 'react';
import styles from './profileInfo.module.css'

const ProfileInfo = (props) => {
    return <div className={styles.blockProfileInfo}>
        <img src={props.avatar} alt="Avatar" id = {styles.avatar} />
        <p id = {styles.name}>{props.name}</p>
        <p id = {styles.status}>{props.status}</p>
    </div>
}

export default ProfileInfo;