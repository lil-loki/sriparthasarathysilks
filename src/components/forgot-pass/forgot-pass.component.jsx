import React,{useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';

import {
    ButtonsBarContainer,
    ForgotPasswordContainer,
    ForgotPasswordDescription,
    ForgotPasswordTitle,
    BackContainer,
    BackText
  } from './forgot-pass.styles';

function ForgotPassword({setForgotPassState}) {
    const [email, setEmail] = useState('')

    const handleChange = event => {
        setEmail(event.target.value)
     };

    const handleSubmit = async (event)=>{
        event.preventDefault();
        await auth.sendPasswordResetEmail(email)
        .then(alert("Password Reset Link Is Sent To Email Id"))
        .then(setForgotPassState(false))
        .catch((error) => {
            alert(error.message)
          });
    }

     return (
        <ForgotPasswordContainer>
          <ForgotPasswordTitle>FORGOT PASSWORD</ForgotPasswordTitle>
          <ForgotPasswordDescription>Enter Your Email Id</ForgotPasswordDescription>
          <form onSubmit={handleSubmit} autoComplete="off">
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              label='EMAIL'
              required
            />
            <ButtonsBarContainer>
              <CustomButton type='submit'>Reset Password</CustomButton>
            </ButtonsBarContainer>
          </form>
          <BackContainer>
            <BackText onClick={()=>{setForgotPassState(false)}}>Back</BackText>
          </BackContainer>
        </ForgotPasswordContainer>
      );
}

export default ForgotPassword;