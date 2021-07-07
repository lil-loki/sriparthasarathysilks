import React from 'react'

// import {CatogoryContainer,Catogory,CatogoryImageContainer,CatogoryImage,CatogoryHeading,Catogorydetails} from './catogory-card.styles'

import {CatogoryContainer,CatogoryImageContainer,CatogoryHeading,CatogoryDetails,CatogoryDetail,ButtonContainer,BuyButton} from './catogory-card.styles'

function CatogoryCard(props) {
    return (
        <CatogoryContainer>
            <CatogoryImageContainer></CatogoryImageContainer>
            <CatogoryDetails>
                <CatogoryHeading>Swami Vastrams</CatogoryHeading>
                <CatogoryDetail>Pilliayar Dhotis, Pancha katcham, 24x12 Vastram for Sri Parthasarathy Perumal/Sri Balaji, Amman Sarees, Pavadai,Tiny Deity Vastrams etc.,  in Silk, Art Silk & Cotton.</CatogoryDetail>
                    <ButtonContainer>
                    {/* <Price>$156</Price> */}
                    <BuyButton>View Catalog</BuyButton>
                </ButtonContainer>
            </CatogoryDetails>   
        </CatogoryContainer>

    )
}

// {/* <CatogoryContainer>
// <Catogory>
//     <CatogoryImageContainer>
//         <CatogoryImage src={props.img} alt="no_image"></CatogoryImage>
//     </CatogoryImageContainer>
//     <CatogoryHeading>{props.title}</CatogoryHeading>
//     <Catogorydetails>{props.detail}</Catogorydetails>
// </Catogory>
// </CatogoryContainer> */}

export default CatogoryCard




