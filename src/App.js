import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import {  Route } from 'react-router-dom';
import Profile from './components/content/Profile/Profile';
import PostsContainer from './components/content/MyPosts/PostsContainer';
import DialogsContainer from './components/content/dialogs/DialogsContainer';
import UsersContainer from './components/content/users/UsersContainer';
// store={props.store}

function App() {
  return (
    
      <div className="App">
        <Header />
        <div className="blockContent">

          {/* <Route path='/profile' component={Profile} /> */}
          {/* <Route path='/posts' component={Posts} />
          <Route exact path='/messages' component={Dialogs} /> */}

          <Route path='/profile' render={() => <Profile />} />
          <Route path='/posts' render={() => <PostsContainer  />} />
          <Route exact path='/messages' render={() => <DialogsContainer />} />
          <Route exact path='/users' render={() => <UsersContainer />} />
        </div>
        <Navbar />


      </div>
    

  );
}

export default App;
