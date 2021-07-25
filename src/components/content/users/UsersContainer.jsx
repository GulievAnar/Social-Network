import { followActionCreater, setUsersActionCreater, unfollowActionCreater } from '../../../reducers/users-reducer';
import Users from './Users';
import UsersClassComponent from './UsersClassComponent';
import {connect} from 'react-redux';




let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreater(userId));
        },
        unFollow: (usersId) => {
            dispatch(unfollowActionCreater(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreater(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);