import React,{useState} from 'react'

import {Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

import {ModalHeaderMainContainer,ModalHeaderSignIn,ModalHeaderSignUp,ModalHeaderCustom} from './modal.styles'


function Example() {
    const [modalState, setModalState] = useState(false);
    const [signInSignUpState, setSignInSignUpState] = useState(true);
  
    const handleClose = () => setModalState(false);
    const handleShow = () => setModalState(true);

    const handleSignIn = () => setSignInSignUpState(false);
    const handleSignUp= () => setSignInSignUpState(true);



  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
  
        <Modal
          show={modalState}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <ModalHeaderCustom>
          <ModalHeaderMainContainer>
            <ModalHeaderSignIn onClick={handleSignUp} signInSignUpState={signInSignUpState}>Sign In</ModalHeaderSignIn>
            <ModalHeaderSignUp onClick={handleSignIn} signInSignUpState={signInSignUpState}>Sign Up</ModalHeaderSignUp>    
          </ModalHeaderMainContainer>
          </ModalHeaderCustom>
          <Modal.Body>
          {signInSignUpState?<SignIn />:<SignUp />}            
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

export default Example;