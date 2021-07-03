import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const SignInContainer = styled.div`
  width: 400px;
  height:500px;
  display: flex;
  flex-direction: column;
  ${'' /* border: 1px solid black; */}
  margin:auto;
  ${'' /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5); */}
  background-color: white;
  position:relative;
  ${'' /* top:20px; */}
  
`;

export const SignInTitle = styled.h2`
  margin: 30px auto 0px;
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

export const SignUpAndForgotPassContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  margin:20px auto;
`;

export const SignUpAndForgotPassText = styled.span`
  text-decoration: underline;
  color:blue;
  cursor: pointer;
  
`;

export const SignUpAndForgotPassLink = styled(Link)`
  text-decoration: underline;
  color:blue;
  
`;