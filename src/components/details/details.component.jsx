import React from 'react'

import {
    DetailsMainContainer,
    DetailsContainer,
    DetailsText,
    DetailsLink,
    DetailsHead,
    MapContainer
} from './details.styles'


function Details() {
   const mapurl="https://www.google.com/maps/place/Sri+Parthasarathy+Silks+%26+Handlooms/@13.056565,80.275893,18.95z/data=!4m13!1m7!3m6!1s0x3a5266206968f2cd:0xbdcf792b08abbcfb!2s195,+96,+Big+St,+Narayana+Krishnaraja+Puram,+Triplicane,+Chennai,+Tamil+Nadu+600014,+India!3b1!8m2!3d13.0580502!4d80.2756182!3m4!1s0x0:0xbec3554ba1b43d6b!8m2!3d13.0564783!4d80.2756619?hl=en-GB"
    return (
        <DetailsMainContainer>
            <DetailsContainer>
                <DetailsHead>
                    Email:
                </DetailsHead>
                <DetailsText>
                    sriparthasarathysilks@yahoo.com
                </DetailsText>
            </DetailsContainer>
            <DetailsContainer>
                <DetailsHead>
                    Phone:
                </DetailsHead>
                <DetailsText>
                    +91-9840761523
                </DetailsText>
            </DetailsContainer> 
            <DetailsContainer>
                <DetailsHead>
                    Address:
                </DetailsHead>
                <DetailsText>
                    <DetailsLink href={mapurl}>No.195/96. Big Street, Triplicane, Chennai - 600 005, India.</DetailsLink>
                </DetailsText>
            </DetailsContainer>
            <MapContainer onClick={() => {window.location.href = mapurl}}></MapContainer>             
        </DetailsMainContainer>     
 
    )
}

export default Details