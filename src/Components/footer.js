import React from "react";
import Logo from "../media/LogoFooter.svg";
import FBIcon from "../media/facebookFooter.svg";
import InstagramIcon from "../media/instagramFooter.svg";
import DiscordIcon from "../media/discordFooter.svg";
import "../Stylesheet/footer.css";

const footer = () => {
  return (
    <div className="footerMainDiv">
      <div className="footerDisplay1366Div">
        <div className="footerIntroDiv">
          <img src={Logo} className="footerIntroLogo" alt="img" />
          <span className="footerIntroBody">
            A platform using which you can assess your notes from any corner of
            the world.
          </span>
        </div>
        <div className="footerLinksDiv">
          <div className="footerLinksSocialDiv">
            <img src={FBIcon} className="footerFBLogo" alt="img" />
            <img
              src={InstagramIcon}
              className="footerInstagramLogo"
              alt="img"
            />
            <img src={DiscordIcon} className="footerDiscordLogo" alt="img" />
          </div>
          <div className="footerLinksCompanyDiv">
            <a
              href="https://www.termsfeed.com/live/4d3702e0-93ce-4422-bd98-18ea3df0a2b0"
              target="_blank"
              className="footerLinkPrivacyPolicy footerLinkCompany"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.termsfeed.com/live/26cbf946-5217-4ec4-aa9d-d1943eb39ce9"
              target="_blank"
              className="footerLinkSecurity footerLinkCompany"
            >
              Cookie Policy
            </a>
            <a
              href="https://www.termsfeed.com/live/ee824d0b-57a7-4438-9535-cc4f20bd1697"
              target="_blank"
              className="footerLinkTermsOfService footerLinkCompany"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div className="footerContactDiv">
          <span className="footerContactTitle">Contact</span>
          <div className="footerContactContent"><span className="footerContactEmail">
              <a href="mailto:kamutalamanisai26@gmail.com" >Email: Kamutalamanisai26@gmail.com</a><br/>
              <a href="mailto:gangamshivakumar01@gmail.com">Email: gangamshivakumar01@gmail.com</a><br/>
            </span>
            <span className="footerContactPhone">Phone: +91 8500536885<br/>
            Phone: +91 8500823589</span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
