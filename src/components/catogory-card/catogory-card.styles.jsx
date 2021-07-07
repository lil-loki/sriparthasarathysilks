import styled,{css} from 'styled-components';

// export const CatogoryContainer = styled.div`
//     display: flex;
//     flex-flow: row wrap;
//     margin: auto;
// `;

// export const Catogory = styled.div`
//     display: flex;
//     flex-direction: column;
//     background: rgb(255, 255, 255);
//     ${'' /* border-radius: 5px; */}
//     ${'' /* box-shadow: 0 2px 5px #ccc; */}
//     width: 300px;
//     margin: 16px;
//     border:2px solid black;

//     &:hover{
//         transform: scale(1.1);
//     }
// `;

// export const CatogoryImageContainer = styled.div`
//     display: flex;
//     justify-content: center;
// `;

// export const CatogoryImage = styled.img`
//     width: 300px;
//     height: 200px; 
// `;

// export const CatogoryHeading = styled.h3`
//     font-size: 2em;
//     text-align: center;
// `;

// export const Catogorydetails = styled.span`
//     font-size: 1.2em;
//     text-align: center;
// `;


export const CatogoryContainer = styled.div`
    position:relative;
    width:300px;
    height:450px;
    box-shadow:0 10px 15px rgba(181,181,181,1);
    background:#f0f0f0;

    &:hover{
        transform: scale(1.1);
    }
`;


export const CatogoryImageContainer = styled.div`
    width:300px;
    height:230px;
    background:url("http://sriparthasarathysilks.com/wp-content/uploads/2016/10/Parthasarathy_Final_Picture-1-150x150.jpg") -2px 0 / cover;    
`;

export const CatogoryDetails = styled.div`
    ${'' /* background:#21222d; */}
    ${'' /* border-radius:0 30% 0 0; */}
    padding:0.8rem;
    background:#1a1f58;

`;

export const CatogoryDetail = styled.p`
    font-size: 1em;
    color:#fff;
    margin:0;
    text-align:justify;
`;

export const CatogoryHeading = styled.span`
    color:#fff;
    font-size: 1.8rem;
`;

export const ButtonContainer = styled.div`
    height:65px;
    display:flex;
    align-items:center;
`;

export const Price = styled.span`
    font-weight:300;
    font-size:1.2rem;
    color:#fff;
    margin:auto;
`;


const buttonStyles = css`
    position:relative;
    border:none;
    outline:none;
    background:#35353f;
    color:#fff;
    height:40px;
    border-radius:50px;
    font-size:0.9rem;
    width:160px;
    margin:auto;

    &::before{
        content:"";
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        border:1px solid #35353f;
        height:45px;
        transition:0.3s;
        width:165px;
        border-radius:50px;
    }

    &:hover:before{
        border-color:#fff;
    }
`;

export const BuyButton = styled.button`
    ${buttonStyles}
`;


