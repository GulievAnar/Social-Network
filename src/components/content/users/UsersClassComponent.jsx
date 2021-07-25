import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../../assets/1.jpg';
import styles from './users.module.css';


class Users extends React.Component {

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(response => {
    //                 this.props.setUsers(response.data.items);
    //             });
    //     }
    // }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <div className={styles.user}>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={styles.oneUser}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }
}


export default Users;