import "./styles.css";
import logo from "../../images/logo.png"
import aws from "../../images/aws.png"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import youtube from "../../images/youtube.png"
import twitter from "../../images/twitter.png"
import footerBG from "../../images/footerBG.png"
import apple from "../../images/apple.png"
import android from "../../images/android.png"


export default function Footer() {
  return (
    <div className="footer m200">
      {/* <div className="footer_bg">
        <img src={footerBG} alt="" />
      </div> */}
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer1">
            <div className="footer_elements">
              <div className="footer_logo">
                <div className="logo_wrap">
                     <img src={logo} alt="" />
                </div>
              </div>
              <div className="partner">
                <img src={aws} alt="" />
              </div>
              <div className="social">
                <img src={facebook} alt="" />
                <img src={youtube} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
            <div className="footer_elements">
              <h2>Explore</h2>
              <span class="footer_element_line"></span>
              <span>Services</span>
              <span>About Us</span>
              <span>Partners</span>
            </div>
            <div className="footer_elements">
              <h2>Contact Us</h2>
              <span className="footer_element_line"></span>
              <span>info@synetia.com</span>
              <span>+233 123456789</span>
            </div>
            <div className="footer_elements">
              <div className="mobile_platform">
                <span>Download</span>
                <h2>Its suitable to all<br/> devices and screens</h2>
                <span>
                  It is a long established fact that a reader will be distracted
                  layout.
                </span>
                <div className="platform_buttons m10">
                  <div className="ios">
                    <img src={apple} alt="" />
                    <span>App Store</span>
                  </div>
                  <div className="playstore">
                    <img src={android} alt="" />
                    <span>Playstore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer2">
            <span className="footer2_line"></span>
            <p>Copyright © Synetia | 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
