import React from "react";
import "./styles.css";
import Photo from "../../images/Photo.jpg";
import Photo2 from "../../images/Photo2.jpg";
import Tablet from "../../images/tablet.jpg";
import DoubleRings from "../../images/doubleRings.png"

export default function About() {
  return (
    
    <div className="about">
      <div className="double_rings">
      {/* <img src={DoubleRings} alt=""/> */}
    </div>
      <div className="container">
        <div className="about_description">
          <h2>About our company</h2>
          <div className="m10">
            <span>
            Lorem ipsum dolor sit amet consectetur adipiscing elit
            <br /> interdum ullamcorper sed pharetra sene.
          </span>
          </div>
          
        </div>
        <div className="about_grid">
          <div className="about_pic">
            <img src={Photo} alt="team" />
          </div>
          <div className="about_pic">
            <img src={Photo2} alt="people" />
          </div>
        </div>
        <div className="what_we_do">
          <h3>What we do</h3>
          <div className="wwdo_content">
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using.
            </span>
            <span>
              Content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </span>
          </div>
        </div>
        <div className="mission">
          <div className="mission_left">
            <h2>Our Mission</h2>
            <div className="mission_content m10">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra Ld
                eu aliquet diam lorem viverra at justo. Nulla odio nequefjf
                gravida in pharetra egestas. Ac id sagittis at morbi interdum
                nibh diam sagittis et.
              </span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id
                eu aliquet diam lorem viverra at justo. Nulla odio nequesg
                gravida in pharetra egestas.
              </span>
            </div>
          </div>

          <div className="mission_right">
            <div className="mi_pic">
              <img src={Tablet} alt="team" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
