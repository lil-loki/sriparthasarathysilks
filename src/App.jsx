import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './App.css';


import Header from './components/header/header.component';

import Contact from './pages/Contact/Contact.page';
import Home from './pages/Home/home.page';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';




export const App = (props) => {

    useEffect(() => {
        let unsubscribeFromAuth = null;
        const { setCurrentUser } = props;
        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);    
            userRef.onSnapshot(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
            });
          }    
          setCurrentUser(userAuth);
        });

        return () => {
            unsubscribeFromAuth();
        };
      },[]);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
  
  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });

export default connect(mapStateToProps, mapDispatchToProps)(App)
