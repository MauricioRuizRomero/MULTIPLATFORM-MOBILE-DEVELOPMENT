import React, { Component } from "react";
import "./style/Badge.css";

class Badge extends React.Component {
    render() {
        return(
    
    <React.Fragment>
        <div className="Badge m-5 flex-column">
            <div className="Badge__header">
                <img src={this.props.header_picture} alt="header_background" />
        </div>
            <div className="Badge__userInfo container mt-5 mb-1">
               <div className="Badge__userImage">
                    <img src={this.props.profile_picture} alt="Profile_picture" />
                </div>
                
                <h4 className="text-center mt-5">
                    {this.props.name} <i>{this.props.age}</i></h4>
                <p className="text-center">{this.props.city}</p>
                </div>
        <div className="Badge__info container pt-3">  
        <div className="row">
            <div className="col">
                <h4 className="text-center fw bold">{this.props.life}</h4>
                <p className="text-center">HP</p>


            </div>
            <div className="col">

            <h4 className="text-center fw bold">{this.props.strenght}</h4>
                <p className="text-center">STR</p>
                </div>
            <div className="col">

            <h4 className="text-center fw bold">{this.props.magic}</h4>
                <p className="text-center">MP</p>


            </div>
        </div>
            </div>
                </div>


    </React.Fragment>);
    }
}

export default Badge;
 