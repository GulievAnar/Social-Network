import React from 'react';
import styles from './dialogs.module.css';
import DialogsItem from './dialogItems/DialogItems';
import MessagesItem from './messagesItems/MessagesItem';



const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageActionCreater(text);
    }

    let addNewMessage = (text) => {
        props.addMessageActionCreater(text);
        newMessageElement.current.value = '';
    }

    let dialogsElement = props.dialogsData.map((item, index) => {
        return <DialogsItem key={index} id={item.id} name={item.name} />
    })

    let messagesElement = props.messagesData.map((item, index) => {
        return <MessagesItem key={index} id={item.id} message={item.message} />
    })
    return <div className={styles.blockDialogs}>
        <div className={styles.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={styles.blockMessages}>
            {messagesElement}
            <textarea onChange={onMessageChange} ref={newMessageElement} id="" cols="30" rows="10"></textarea>
            <button onClick={addNewMessage}>Отправить</button>
        </div>
    </div>
}

export default Dialogs;