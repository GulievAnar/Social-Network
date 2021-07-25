import React from 'react';
import Post from './Post/Post';
import styles from './posts.module.css';



const Posts = (props) => {

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostActionCreater(text);
    }

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPostActionCreater(text);
        newPostElement.current.value = '';
    }

    let postElements = props.postsData.postsData.map((item, index) => {
        return <Post key={index} name={item.name} id={item.id} text={item.text} likesCount={item.likesCount} />
    })

    return <div className={styles.blockPosts}>
        <p>Posts</p>
        <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="30" rows="10"></textarea>
        <button onClick={addNewPost}>Add</button>
        {postElements}
    </div>
}

export default Posts;