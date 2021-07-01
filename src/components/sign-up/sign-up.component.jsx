import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle, SignUpDescription, ButtonsBarContainer } from './sign-up.styles';

function SignUp() {

  const [Formdata, setFormdata] = useState(
    {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  )

  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = Formdata;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setFormdata({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormdata(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const { displayName, email, password, confirmPassword } = Formdata;

  return (
    <SignUpContainer>
      <SignUpTitle>I Do Not Have An Account</SignUpTitle>
      <SignUpDescription>Sign up with your email and password</SignUpDescription>
      <form  onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='DISPLAY NAME'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='EMAIL'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='PASSWORD'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='CONFIRM PASSWORD'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
