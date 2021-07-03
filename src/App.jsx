import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './App.css';


import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ForgotPassword from './components/forgot-pass/forgot-pass.component'

import Example from './components/modal/modal.component';

import Contact from './pages/Contact/Contact.page';

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
            <Example />
            <Switch>
                <Route
                    exact
                    path='/signin'
                    render={() =>
                    props.currentUser ? (
                        <Redirect to='/' />
                    ) : (
                        <SignIn />
                    )
                    }
                />
                <Route
                    exact
                    path='/signup'
                    render={() =>
                    props.currentUser ? (
                        <Redirect to='/' />
                    ) : (
                        <SignUp />
                    )
                    }
                />
                <Route exact path='/forgotpassword' component={ForgotPassword} />
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
