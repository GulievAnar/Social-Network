import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../dialogs.module.css';

const DialogsItem = (props) => {
    let path = '/messages/' + props.id;
    return <div className={styles.dialogsItems}>
            <div className={styles.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    
}

export default DialogsItem