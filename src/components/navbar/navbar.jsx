import React from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={styles.blockNavbar}>
        <div className = {styles.item}>
            <NavLink to="/profile" activeClassName = {styles.active}>Main</NavLink>
        </div>
        <div className = {styles.item}>
            <NavLink to="/posts" activeClassName = {styles.active}>News</NavLink>
        </div>
        <div className = {styles.item}>
            <NavLink to="/messages" activeClassName = {styles.active}>Messages</NavLink>
        </div>
        <div className = {styles.item}>
            <NavLink to="/users" activeClassName = {styles.active}>Users</NavLink>
        </div>
        <div className = {styles.item}>
            <NavLink to="/music" activeClassName = {styles.active}>Music</NavLink>
        </div>
        <div className = {styles.item}>
            <NavLink to="/settings" activeClassName = {styles.active}>Settings</NavLink>
        </div>
    </nav>

}

export default Navbar;