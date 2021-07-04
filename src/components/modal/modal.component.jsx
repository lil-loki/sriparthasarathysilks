import React,{useState} from 'react'

import {Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import ForgotPassword from '../forgot-pass/forgot-pass.component';

import {ModalHeaderMainContainer,ModalHeaderSignIn,ModalHeaderSignUp,ModalHeaderCustom,Optiondiv} from './modal.styles'


function AuthModal() {
    const [modalState, setModalState] = useState(false);
    const [signInSignUpState, setSignInSignUpState] = useState(true);
    const [forgotPassState, setForgotPassState] = useState(false);
  
    const handleClose = () => setModalState(false);
    const handleShow = () => setModalState(true);

    const handleSignIn = () => {
      setSignInSignUpState(true);
      setForgotPassState(false);      
    };
    const handleSignUp= () => setSignInSignUpState(false);



  
    return (
      <>
        <Optiondiv onClick={handleShow}>
          SIGN IN
        </Optiondiv>
  
        <Modal
          show={modalState}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <ModalHeaderCustom>
          <ModalHeaderMainContainer>
            <ModalHeaderSignIn onClick={handleSignIn} signInSignUpState={signInSignUpState}>Sign In</ModalHeaderSignIn>
            <ModalHeaderSignUp onClick={handleSignUp} signInSignUpState={signInSignUpState}>Sign Up</ModalHeaderSignUp>    
          </ModalHeaderMainContainer>
          </ModalHeaderCustom>
          <Modal.Body>
          {signInSignUpState?forgotPassState?<ForgotPassword setForgotPassState={setForgotPassState}/>:<SignIn setForgotPassState={setForgotPassState} />:<SignUp />}            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AuthModal;