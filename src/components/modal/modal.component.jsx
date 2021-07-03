import React,{useState} from 'react'

import {Button,Modal} from 'react-bootstrap';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function Example() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSignIn = () => setShow1(false);
    const handleSignUp= () => setShow1(true);



  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          {show1?<SignIn />:<SignUp />}            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleSignIn}>
              Close
            </Button>
            <Button variant="primary"   onClick={handleSignUp}>Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Example;