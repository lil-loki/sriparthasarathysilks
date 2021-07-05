import styled from 'styled-components';

import  Map  from '../../assets/map.PNG';

export const DetailsMainContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin:0px auto;
    width:50%;
    
`;

export const DetailsContainer = styled.div`
border-bottom:2px solid black;
`;

export const DetailsText = styled.div`
    font-family: 'Open Sans Condensed';
    font-size:18px;
    padding-bottom:10px;
`;

export const DetailsHead = styled.h4`
    margin:5px auto;
`;

export const DetailsLink = styled.a`
    font-family: 'Open Sans Condensed';
    color:blue;
`;

export const MapContainer = styled.div`
    background: url(${Map});
    height:150px;
    width:300px;
    margin-top:20px;
    border:2px solid black;
    cursor:pointer;
`;
