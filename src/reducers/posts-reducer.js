const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, name: 'Anar', text: 'Hi', likesCount: '0' },
        { id: 2, name: 'Anar', text: 'Vova', likesCount: '0' },
        { id: 3, name: 'Anar', text: '1337', likesCount: '0' },
        
    ],
    newTextPost: '',
}

const postsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                name: 'Anar',
                text: state.newTextPost,
                likesCount: 0
            }
            let newState = {...state};
            newState.postsData = [...state.postsData];
            newState.postsData.push(newPost);
            newState.newTextPost = '';
            return newState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let newState = {...state};
            newState.newTextPost = action.newText;
            return newState;
        }
        default: 
            return state;
    }
}

export let addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}

export let updateNewPostActionCreater = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default postsReducer;