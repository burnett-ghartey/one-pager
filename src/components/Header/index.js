import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import headerBG from "../../images/headerBG.png"
import { slide as Menu } from 'react-burger-menu'
import  menuIcon from "../../images/menu.svg";
import  closeIcon from "../../images/x-circle.svg";

import "./styles.css";

export default function Header() {
  return (
    <>
      <div className="banner">
        <img src={headerBG} alt="banner"/>
      </div>
       <div className="header">
      <div className="container">
        <div className="header_box ">
          <div className="logo_box">
            
              <Link to="/">
                <img src={logo}  alt="logo" />
              </Link>
            
          </div>
          <div className="header_middle">
            <div className="items_wrap">
              <Link to="/">Home</Link>
              <Link to="/">Services</Link>
              <Link to="/">Clients</Link>
              <Link to="/">Industires</Link>
              <Link to="/">About</Link>
            </div>
          </div>
          <div className="header_right">
            <div className="contact_btn">
              <Link to="/">Contact</Link>
            </div>
          </div>
          <div className="mobile_wrapper">
          <Menu customBurgerIcon={ <img src={menuIcon} alt="burger" />} customCrossIcon={ <img src={closeIcon} alt="close" /> }right>
            <Link to="/">Home</Link>
            <Link to="/">Services</Link>
            <Link to="/">Clients</Link>
            <Link to="/">Industries</Link>
            <Link to="/">Contact</Link>
          </Menu>
          </div>
        </div>
      </div>
    </div>
    <div className="hero_ctn-rm container ">
      
        <div className="hero">   
            <div className="hero_content">
              <span>AWS PREMIER CONSULTING PARTNER</span>
              <span>Our customers images the future</span>
              <span className="sm_line"></span>
              <h1>We make it a reality</h1>
              <span>THINKCLOUDNATIVE</span>

        </div>
      </div>
    </div>
    </>
  
   
  );
}
