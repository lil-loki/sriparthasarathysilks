import React from 'react'

import {
    ContactMainContainer,
    ContactContainer,
    ContactTitleContainer,
    ContactTitle,
    Contactdescription
} from './Contact.style'

import Feedback from '../../components/feedback-form/feedback-form.components'
import Details from '../../components/details/details.component'

function Contact() {
    return (
        <ContactMainContainer>
            <ContactTitleContainer>
                <ContactTitle>Contact Us</ContactTitle>
                <Contactdescription>
                Get in touch and we'll get back to you as soon as we can.  We look forward to hearing from you!
                </Contactdescription>
            </ContactTitleContainer>
            <ContactContainer>
                <Feedback />
                <Details />
            </ContactContainer>
        </ContactMainContainer>
    )
}

export default Contact
