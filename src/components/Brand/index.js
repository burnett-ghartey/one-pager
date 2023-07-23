import './styles.css'
import logo1 from "../../images/Logo1.png"
import logo2 from "../../images/Logo2.png"
import logo3 from "../../images/Logo3.png"
import logo4 from "../../images/Logo4.png"
import logo5 from "../../images/Logo5.png"

import React from 'react'

export default function Brand() {
  return (
    
    <div className="brand">
        <div className="container">
            <div className="brand_flex">
                <div className="brand_headline">
                    <span>We are</span><br/>
                    <span style={{fontWeight: "bold"}}>Featured in</span>
                </div>
                <div className="brand_item_list">
                     <div className="brand_items">
                    <img src={logo1} alt="" />
                </div>
                <div className="brand_items">
                    <img src={logo2} alt="" />
                </div>
                <div className="brand_items">
                    <img src={logo3} alt="" />
                </div>
                <div className="brand_items">
                    <img src={logo4} alt="" />
                </div>
                <div className="brand_items">
                    <img src={logo5} alt="" />
                </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}
