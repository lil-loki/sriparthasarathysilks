import React,{useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  SignInDescription,
  ButtonSpacer,
  ForgotPassContainer,
  ForgotPassText,
  Google
} from './sign-in.styles';

function SignIn({setForgotPassState}) {

  const [Formdata,setFormdata]=useState(
    {
      email: '',
      password: ''
    }
  )


  

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = Formdata;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormdata({ email: '', password: '' });
    } catch (error) {
      console.log(error)
      if(error.code==='auth/wrong-password'){
        alert("Password is Wrong!!!! Please Check Your Password.")
      }
      else if(error.code==='auth/user-not-found'){
        alert("User Does Not Exist!!! Please Sign Up or Check Your Email Id.")
      }
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setFormdata(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const { email, password } = Formdata;

  return (
      <SignInContainer>
        <SignInTitle>SIGN IN</SignInTitle>
        <SignInDescription>Sign in with your email and password</SignInDescription>

        <form onSubmit={handleSubmit} autoComplete="off">
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='EMAIL'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='PASSWORD'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <ButtonSpacer>(Or)</ButtonSpacer>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              <Google/>Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
          <ForgotPassContainer>
            <ForgotPassText onClick={()=>{setForgotPassState(true)}}>Forgot Password</ForgotPassText>
          </ForgotPassContainer>
        </form>
      </SignInContainer>
    );
}

export default SignIn;
