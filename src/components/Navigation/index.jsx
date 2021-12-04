import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/JP Logo.svg";
import "./index.css";

const Navigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="#">
                        <Logo className="logo" />
                    </a>
                </div>

                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option thin" onClick={closeMobileMenu}>
                        <a href="#">Personal</a>
                    </li> 
                    <li className="option thin" onClick={closeMobileMenu}>
                        <a href="#">Business</a>
                    </li>

                </ul>
                
            </div>
            <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Home</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">About Us</a>
                    </li>
                    <li className=" option" onClick={closeMobileMenu}>
                        <a href="#">
                            Blog
                        </a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Developer</a>
                    </li><li className="option" onClick={closeMobileMenu}>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            <ul className="signin-up">
                <li onClick={closeMobileMenu}>
                    <a href="" className="signup-btn">
                        Account
                    </a>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <span>Close</span>
                ) : (
                    <span>Menu</span>
                )}
            </div>
        </div>
    );
};

export default Navigation;