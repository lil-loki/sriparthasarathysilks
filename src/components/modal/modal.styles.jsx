import styled,{css} from 'styled-components';

import {Modal} from 'react-bootstrap';


const activeStyles = css`  
  background:white;
`;

const inactiveStyles = css`
  background:#ccc; 
`;

export const ModalHeaderCustom = styled(Modal.Header)`
   padding:0;
   height:50px;
   display:flex;
   align-items: center;
   justify-content: center;
`;

export const ModalHeaderMainContainer = styled.div`
  display: flex;
  flex:row;
  width:100%;
`;

const getStyles1 = ({ signInSignUpState }) => {
    if (signInSignUpState) {
      return activeStyles;
    }
    else{
        return inactiveStyles;
    }
  };

const getStyles2 = ({ signInSignUpState }) => {
    if (signInSignUpState) {
      return inactiveStyles;
    }
    else{
        return activeStyles;
    }
  };

export const ModalHeaderSignIn = styled.div`
  width:50%;
  height:50px;
  cursor:pointer;
  display:flex;
  justify-content: center;
  align-items: center;
  ${getStyles1}
`;

export const ModalHeaderSignUp = styled.div`
  width:50%;
  height:50px;
  cursor:pointer;
  display:flex;
  justify-content: center;
  align-items: center;
  ${getStyles2}
`;

export const Optiondiv = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color:black;
  font-size: 20px ;
`;