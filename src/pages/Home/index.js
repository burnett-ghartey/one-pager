import About from "../../components/About";

import Brand from "../../components/Brand";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Services from "../../components/Services";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer";

import './styles.css'


const Home = () => {
  return (
    <div className="home">
      {/* <Banner /> */}
      <Header />
      {/* <div className="container">
        <div className="hero">   
            <div className="hero_content">
              <span>AWS PREMIER CONSULTING PARTNER</span>
              <span>Our customers images the future</span>
              <span class="sm_line"></span>
              <h1>We make it a reality</h1>
              <span>THINKCLOUDNATIVE</span>

        </div>
      </div>
     </div> */}
     <About/>
     <Services/>
     <Brand/>
     <Testimonial />
     <Contact />
     <Footer />
    </div>
  );
};

export default Home;
