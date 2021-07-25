const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_ACTION_CREATER = 'UPDATE-NEW-MESSAGE-ACTION-CREATER';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Anar' },
        { id: 2, name: 'Vova' },
        { id: 3, name: 'Danya' },
    ],

    messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you ?' },
        { id: 3, message: 'My name is Anar' },
    ],
    newTextPost: '',
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newTextPost,
            }
            let newState = { ...state }
            newState.messagesData = [...state.messagesData];
            newState.messagesData.push(newMessage);
            return newState;
        }
        case UPDATE_NEW_MESSAGE_ACTION_CREATER: {
            let newState = { ...state };
            newState.newTextPost = action.newText;
            return newState;
        }
        default:
            return state;
    }

}

export let updateNewMessageActionCreater = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_ACTION_CREATER,
        newText: text
    }
}

export let addMessageActionCreater = () => {
    return {
        type: ADD_MESSAGE
    }
}

export default dialogsReducer;