import quotes from "../../images/quotes.svg";
import star from "../../images/Star.svg";
import profile from "../../images/profile_av.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import tmlBG1 from "../../images/tmlBG1.png"
import tmlBG2 from "../../images/tmlBG2.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

import "./styles.css";

export default function Testimonial() {
  return (
    <div className="testimonial m100">
      <div className="testimonal-bg-left">
        <img src={tmlBG1} alt="" />
      </div>
      <div className="testimonal-bg-right">
        <img src={tmlBG2} alt="" />
      </div>
      {/* <div className="top_left_circle"></div>
      <div className="bottom_right_circle"></div> */}
      <div className="container">
        <div className="testimonial_headline">
          <div className="testimonial_title">Testimonial</div>
          <h2 className="testimonial_name">Trusted by millions of creators.</h2>
        </div>
        <div className="testimonial_slider m35">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="testimonial_slide">
                <img src={quotes} alt="" />
                <span className="testimonial_details">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage .
                </span>

                <div className="testimonial_by m10">
                  <img src={profile} alt="" />
                  <span>Kenny Smith</span>
                  <span>
                    <em>Developer</em>
                  </span>
                  <img src={star} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial_slide">
                <img src={quotes} alt="" />
                <span className="testimonial_details">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage .
                </span>

                <div className="testimonial_by m10">
                  <img src={profile} alt="" />
                  <span>Kenny Smith</span>
                  <span>
                    <em>Developer</em>
                  </span>
                  <img src={star} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="testimonial_pi m100">
          <div className="perf_wrap">
            <div className="perf_item">
              <div>
                100<span>M</span>
              </div>
              <div>Client Satisfaction</div>
            </div>
            <div className="perf_item">
              <div>
                24 <span>h</span>
              </div>
              <div>Expert Support Team</div>
            </div>
            <div className="perf_item">
              <div>
                98 <span>K+</span>
              </div>
              <div>Sales Count</div>
            </div>
            <div className="perf_item">
              <div>
                208<span>+</span>
              </div>
              <div>Client Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
