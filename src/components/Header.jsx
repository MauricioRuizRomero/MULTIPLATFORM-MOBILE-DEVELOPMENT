import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"
import topimage from '../images/choco.png'

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">

                    <Link to="/">
                    <img src= {topimage} alt="logo"/>
                    </Link>

                </div>
            </React.Fragment>

        );
    }
}

export default Header;