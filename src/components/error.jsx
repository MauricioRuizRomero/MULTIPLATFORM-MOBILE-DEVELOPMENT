import React from "react"
import Hero2 from "../components/Hero2"
import "./style/error.css"

const error = props => {
return(
<React.Fragment>
<div className="error">
    <div className="error__content">
        <h1 className="error__title">{props.title|| "404_Error"}</h1>
       
 <h1 className="error__title">{props.title|| "Page not found"}</h1>
    
    </div>
    <Hero2 h={"88vh"}></Hero2>
</div>
</React.Fragment>

);

};
 export default error;