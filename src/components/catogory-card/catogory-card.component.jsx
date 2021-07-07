import React from 'react'

import {CatogoryContainer,Catogory,CatogoryImageContainer,CatogoryImage,CatogoryHeading,Catogorydetails} from './catogory-card.styles'

function CatogoryCard(props) {
    return (
        <CatogoryContainer>
                <Catogory>
                    <CatogoryImageContainer>
                        <CatogoryImage src={props.img} alt="no_image"></CatogoryImage>
                    </CatogoryImageContainer>
                    <CatogoryHeading>{props.title}</CatogoryHeading>
                    <Catogorydetails>{props.detail}</Catogorydetails>
                </Catogory>
        </CatogoryContainer>
    )
}

export default CatogoryCard