import styled from 'styled-components';

export const MainContainer =styled.div`
  position: relative;
  height: 100%;
  width:100%;
  background: linear-gradient(to bottom, rgba(146, 135, 187, 0.8) 0%, rgba(0,0,0,0.6) 100%);
  transition: opacity 0.1s, transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
  transform: scale(1);
`;

export const SignUpContainer = styled.div`
  width: 400px;
  height:500px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin:auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  background-color: white;
  position:relative;
  top:20px;
`;

export const SignUpTitle = styled.h2`
  margin: 30px auto 0px;
`;

export const SignUpDescription = styled.span`
  margin: 10px auto 10px;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 95%;
  margin:auto;
`;
