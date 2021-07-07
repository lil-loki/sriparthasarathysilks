import styled from 'styled-components';

export const CatogoryContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: auto;
`;

export const Catogory = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255);
    ${'' /* border-radius: 5px; */}
    ${'' /* box-shadow: 0 2px 5px #ccc; */}
    width: 300px;
    margin: 16px;
    border:2px solid black;

    &:hover{
        transform: scale(1.1);
    }
`;

export const CatogoryImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const CatogoryImage = styled.img`
    width: 300px;
    height: 200px; 
`;

export const CatogoryHeading = styled.h3`
    font-size: 2em;
    text-align: center;
`;

export const Catogorydetails = styled.span`
    font-size: 1.2em;
    text-align: center;
`;