
import { updateNewMessageActionCreater, addMessageActionCreater } from '../../../reducers/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';



// const DialogsContainer = (props) => {
    // let state = props.store.getState();


    // let onMessageChange = (text) => {
    //     store.dispatch(updateNewMessageActionCreater(text));
    // }

    // let addNewMessage = () => {
    //     store.dispatch(addMessageActionCreater());
    // }


//     return <StoreContext.Consumer>{

//         (store) => {
//             let onMessageChange = (text) => {
//                 store.dispatch(updateNewMessageActionCreater(text));
//             }
        
//             let addNewMessage = () => {
//                 store.dispatch(addMessageActionCreater());
//             }
            
//             let state = store.getState();
//             return <Dialogs updateNewMessageActionCreater={onMessageChange} addMessageActionCreater={addNewMessage} dialogsData={state.dialogsReducer.dialogsData} messagesData={state.dialogsReducer.messagesData} />
//         }
//     }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsReducer.dialogsData,
        messagesData: state.dialogsReducer.messagesData,
        newTextPost: state.dialogsReducer.newTextPost

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageActionCreater: (text) => {
            dispatch(updateNewMessageActionCreater(text));
        },
        addMessageActionCreater: () => {
            dispatch(addMessageActionCreater());
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;