import React from "react"
import heroimage from "../images/wata.jpg"
import "./style/Hero2.css"

const Hero3 = props =>{
return(
    <React.Fragment>
        <div className="Hero3">
            <div className="Hero3__color_filter" style={{height: props.h}}></div>
            <div className="Hero3__img" style={{height: props.h}}>
                <img src={heroimage} alt="" />

                
            </div>
        </div>

    </React.Fragment>
)

}

export default Hero3;