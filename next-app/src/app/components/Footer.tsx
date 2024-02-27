import React from 'react';
import { styled } from 'styled-components';

function Footer() {
    return (
        <FooterSection>
            Footer
        </FooterSection>
    );
}

export default Footer;
const FooterSection=styled.footer`
background-color: rgb(69 76 95 / 92%);
display: flex;
justify-content: center;
color: white;
font-size: 1rem;
line-height: 9rem;
`