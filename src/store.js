import dialogsReducer from './reducers/dialogs-reducer';
import postsReducer from './reducers/posts-reducer'


let store = {
    _state: {
        postsData: [
            { id: 1, name: 'Anar', text: 'Hi', likesCount: '0' },
            { id: 2, name: 'Anar', text: 'Vova', likesCount: '0' },
            { id: 3, name: 'Anar', text: '1337', likesCount: '0' },
        ],
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
    },
    getState() {
        return this._state;
    },

    rerenderEntireTree() {
        console.log('state changed')
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {
       this._state.messagesData =  dialogsReducer(this._state.messagesData, action);
       this._state.postsData =  postsReducer(this._state.postsData, action);
       this.rerenderEntireTree(this._state);
    }
}



window.store = store;

export default store;
