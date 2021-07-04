import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const SignInContainer = styled.div`
  width: 400px;
  height:450px;
  display: flex;
  flex-direction: column;
  margin:auto;
  background-color: white;
  position:relative;
  
`;

export const SignInTitle = styled.h2`
  margin: 0px auto 0px;
`;

export const SignInDescription = styled.span`
  margin: 10px auto 10px;
`;

export const ButtonSpacer = styled.span`
  margin: 10px auto 10px;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 95%;
  margin:auto;
`;

export const ForgotPassContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  margin:20px auto;
`;


export const ForgotPassText = styled.span`
  text-decoration: underline;
  color:blue;
  cursor: pointer;
  
`;