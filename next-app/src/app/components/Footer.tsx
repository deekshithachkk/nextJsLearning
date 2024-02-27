import React from 'react';
import { styled } from 'styled-components';
import { themeColor } from '../helper/constant';

function Footer() {
    return (
        <FooterSection>
            Footer
        </FooterSection>
    );
}

export default Footer;
const FooterSection=styled.footer`
background-color: ${themeColor.gray};
display: flex;
justify-content: center;
color: ${themeColor.white};
font-size: 1rem;
line-height: 9rem;
`