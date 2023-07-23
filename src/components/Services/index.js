import './styles.css'
import ai_ic from "../../images/ai_ic.png"
import code_ic from "../../images/code_ic.png"
import chart_ic from "../../images/chart_ic.png"
import profession_ic from "../../images/profession_ic.png"
import cpu_ic from "../../images/cpu_ic.png"
import modern_ic from "../../images/modern_ic.png"
import upload_ic from "../../images/upload_ic.png"
import graph_ic from "../../images/graph_ic.png"
import process_ic from "../../images/process_ic.png"

export default function Services() {
  return (
    <div className="services">
        <div className="bg_service">
            <div className="circle_wrapper">
                <div className="bg_circle"></div>
            </div>
            
        </div>
        <div className="container">
            <div className="service_section">
                <div className="service_header">
                    <h1>Our Services</h1>
                    <div className="mb_35">
                    <span>Lorem ipsum dolor sit amet consectetur adipiscing elit <br/>
interdum ullamcorper sed pharetra sene.</span>
                    </div>
                </div>
                <div className="service_grid m10">
                    <div className="service_grid_item">
                        <img src={code_ic} alt="" />
                        <span className="service-name">Cloud Application<br/>
Development</span>
                    </div>
                    <div className="service_grid_item">
                        <img src={cpu_ic} alt="" />
                        <span className="service-name">IoT<br/>
Devices</span>
                    </div>
                    <div className="service_grid_item">
                        <img src={chart_ic} alt="" />
                        <span className="service-name">Cloud Cost<br/>
Optimization</span>
                    </div>
                    <div className="service_grid_item">
                        <img src={process_ic} alt="" />
                        <span className="service-name">Managed Cloud<br/>
Operations</span>
                    </div>
                    <div className="service_grid_item">
                        <img src={upload_ic} alt="" />
                        <span className="service-name">Cloud<br/>
Adoption</span>
                    </div>
                    <div className="service_grid_item">
                        <img src={graph_ic} alt="" />
                        <span className="service-name">Data &<br/>
Analytics</span>
                    </div>
                    <div className="service_grid_item">
                        <img src={modern_ic} alt="" />
                        <span className="service-name">Application<br/>
Modernization</span>
                    </div>
                    <div className="service_grid_item">
                        <img src={profession_ic} alt="" />
                        <span className="service-name">Professional Services<br/>
On-Demand</span>
                    </div>
            
                    <div className="service_grid_item">
                        <img src={ai_ic} alt="" />
                        <span className="service-name">AI & Machine<br/>
Learning</span>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}
