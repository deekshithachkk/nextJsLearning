import React from "react";
import { styled } from "styled-components";
import { themeColor } from "../helper/constant";
import { FiFacebook, FiLinkedin, FiMail, FiMapPin, FiPhone, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <FooterSection
      id="footer"
      
    >
      <div className="flex flex-col h-50  p-8 space-x-2 justify-center">
      <div className="flex space-x-12 align-center justify-center">
        <FiPhone className="text-2xl hover:text-yellow-300 text-yellow-50" />
        <FiMail className="text-2xl hover:text-yellow-300 text-yellow-50" />
        <FiMapPin className="text-2xl hover:text-yellow-300 text-yellow-50" />
      </div>
      <div className="text-center">
        <p className="leading-10 text-yellow-50">
          Land behold it created good saw after she'd Our set living. Signs
          midst dominion creepeth morning laboris nisi ufsit aliquip.
        </p>
      </div>
      <div className="flex space-x-12 align-center justify-center">
        <FiTwitter className="text-1xl text-yellow-50 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300" />
        <FiFacebook className="text-1xl text-yellow-50 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300"/>
        <FiLinkedin className="text-1xl text-yellow-50 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300"/>
      </div>
      </div>
    </FooterSection>
  );
}

export default Footer;
const FooterSection = styled.footer`
  background-color: ${themeColor.gray};
`;
