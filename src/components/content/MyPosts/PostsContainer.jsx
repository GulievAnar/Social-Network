
import Posts from './Posts';
import { addPostActionCreater, updateNewPostActionCreater } from '../../../reducers/posts-reducer';
import { connect } from 'react-redux';



// const PostsContainer = (props) => {

//     // let state = props.store.getState();

//     // let onPostChange = (text) => {
//     //     props.store.dispatch(updateNewPostActionCreater(text));
//     // }

//     // let addNewPost = () => {
//     //     props.store.dispatch(addPostActionCreater());
//     // }


//     return <StoreContext.Consumer>{

//         (store) => {
//             let onPostChange = (text) => {
//                 store.dispatch(updateNewPostActionCreater(text));
//             }
        
//             let addNewPost = () => {
//                 store.dispatch(addPostActionCreater());
//             }
            
//             let state = store.getState();
//             return <Posts updateNewPostActionCreater={onPostChange}
//                 addPostActionCreater={addNewPost}
//                 postsData={state.postsReducer}
//                 newTextPost={state.dialogsReducer.newTextPost} />
//         }
//     }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        postsData: state.postsReducer,
        newTextPost: state.postsReducer.newTextPost

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostActionCreater: (text) => {
            dispatch(updateNewPostActionCreater(text));
        },
        addPostActionCreater: () => {
            dispatch(addPostActionCreater());
        }

    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;