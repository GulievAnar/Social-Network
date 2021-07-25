const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    // users: [
    //     { id: 1, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s88-c-k-c0x00ffffff-no-rj', followed: true, name: 'Anar Guliev', status: 'I m boss', location: 'Almaty' },
    //     { id: 2, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s88-c-k-c0x00ffffff-no-rj', followed: false, name: 'Vladimir Lubnin', status: 'I love Tarkov', location: 'Saints-Peterburg' },
    //     { id: 3, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s88-c-k-c0x00ffffff-no-rj', followed: false, name: 'Danya Pimenov', status: 'I love Skate', location: 'Saints-Peterburg' },
    // ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default: 
            return state
    }
}

export let followActionCreater = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export let unfollowActionCreater = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersActionCreater = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;