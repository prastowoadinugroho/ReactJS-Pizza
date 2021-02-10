import React from 'react';
import { 
    FaFacebook,
    FaInstagram,
    FaGithub
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrapper,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './footerElement';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink
                            href='/'
                            target='_blank'
                            arial-label='Facebook'
                            >
                            <FaFacebook/>
                            </SocialIconLink>
                            
                            <SocialIconLink
                            href='/'
                            target='_blank'
                            arial-label='Instagram'
                            >
                            <FaInstagram/>
                            </SocialIconLink>
                            
                            <SocialIconLink
                            href='/'
                            target='_blank'
                            arial-label='Github'
                            >
                            <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
