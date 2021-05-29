import React from "react"
import Heroimage from "../images/fish.jpg"
import "./style/Hero2.css"

const Hero2 = props =>{
return(
    <React.Fragment>
        <div className="Hero2">
            <div className="Hero2__color_filter" style={{height: props.h}}></div>
            <div className="Hero2__img" style={{height: props.h}}>
                <img src={Heroimage} alt="" />

                
            </div>
        </div>

    </React.Fragment>
)

}

export default Hero2;