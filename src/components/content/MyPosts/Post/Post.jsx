import React from 'react';
import styles from './post.module.css';

const Post = (props) => {
    

    
    return <div className={styles.blockPost}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.text}>{props.text}</p>
    </div>
}

export default Post;