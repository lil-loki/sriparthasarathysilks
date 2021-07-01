import React,{useState} from 'react'

import firebase,{firestore } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component'
import TextArea from '../form-input-textarea/form-input-textarea.component'
import CustomButton from '../custom-button/custom-button.component'

import {FormContainer,ButtonsBarContainer} from './feedback-form.styles'

function Feedback() {
    const [Formdata,setFormdata]=useState(
        {
            name:'',
            email: '',
            message:''
        }
      )

    const handleSubmit =  async event => {
        event.preventDefault();
        const messagesRef = firestore.collection('messages');
        await messagesRef.add({
            name: name,
            email:email,
            message: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          })
        setFormdata(
            {
                name:'',
                email: '',
                message:''
            }
        );

    };
    
    const handleChange = event => {
        const { value, name } = event.target;    
        setFormdata(prevState => ({
            ...prevState,
            [name]: value
        }));
      };

    const {name,email,message}=Formdata;
    return (
        <FormContainer>
        <form onSubmit={handleSubmit} autoComplete="off">
            <FormInput
                name='name'
                type='text'
                handleChange={handleChange}
                value={name}
                label='NAME'
                required
            />
            <FormInput
                name='email'
                type='email'
                value={email}
                handleChange={handleChange}
                label='EMAIL'
                required
            />
            <TextArea
                name='message'
                type='password'
                value={message}
                handleChange={handleChange}
                label='MESSAGE'
                rows={4}
                required
            />
            <ButtonsBarContainer>
            <CustomButton type='submit'> SUBMIT </CustomButton>
            </ButtonsBarContainer>
        </form>            
        </FormContainer>
    )
}

export default Feedback
