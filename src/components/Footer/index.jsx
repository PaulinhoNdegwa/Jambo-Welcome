
import { ReactComponent as JPLogo } from '../../assets/JP Logo.svg';
import { ReactComponent as FacebookLogo } from '../../assets/Group 117.svg';
import { ReactComponent as TwitterLogo } from '../../assets/Group 116.svg';
import { ReactComponent as InstagramLogo } from '../../assets/Group 4045.svg';

import './index.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper-footer">
                <div className="links">
                    <a href="#" className="link">Home</a>
                    <a href="#" className="link">Services</a>
                    <a href="#" className="link">Tariffs</a>
                    <a href="#" className="link">Contacts</a>
                    <a href="#" className="link">About Us</a>
                </div>
                <div className="links">
                    <a href="#" className="link">Media</a>
                    <a href="#" className="link">Blog</a>
                    <a href="#" className="link">Careers</a>
                    <a href="#" className="link">Developers</a>
                    <a href="#" className="link">Fintech</a>
                </div>
                <div className="links">
                    <a href="#" className="link">Investors</a>
                    <a href="#" className="link">FAQs</a>
                    <a href="#" className="link">Partners</a>
                    <a href="#" className="link">Privacy Policy</a>
                    <a href="#" className="link">Terms and conditions</a>
                </div>
                <div className="regulators">

                </div>
            </div>
            <hr />
            <div className="lower-footer">
                <div className="jambo">
                    <JPLogo className="jambo-logo" />
                    <span>2021 &copy; JamboPay.</span>
                </div>
                <div className="socials">
                    <FacebookLogo className="social-logo"/>
                    <TwitterLogo className="social-logo" />
                    <InstagramLogo className="social-logo" />
                </div>
            </div>
        </div>
    );
}

export default Footer;