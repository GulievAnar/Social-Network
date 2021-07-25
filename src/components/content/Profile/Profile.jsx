import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return <div className={styles.blockProfile}>
        <ProfileInfo name = "Anar" avatar = "https://sun9-26.userapi.com/s/v1/ig2/FUoaYcspk9aVbnsTwN3Hkdq77Ks_DtASPXPtAkWBdIg2ykdtQXtekBK8lWy33h_XqlFFptQz_FmxOfls2J8pGNXt.jpg?size=200x0&quality=96&crop=0,161,954,954&ava=1" status = "Im happy" />
    </div>
}

export default Profile;