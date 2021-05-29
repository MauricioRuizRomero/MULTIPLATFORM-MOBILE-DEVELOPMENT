import React, { Component } from "react";
import Hero3 from "../../src/components/Hero3"
import "./style/Login.css";

class BadgeForm extends Component {
    render() {
        return(
    
    <React.Fragment>
   <div className="BadgeForm m-5">
  
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label  className="mb-1">
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={this.props.onChange}
                                
                            
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label  className="mb-1">
                                Password
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="password"
                                onChange={this.props.onChange}

                            
                            
                            />
                              <button type="submit" className="Submit__button">
                                Login
                            </button>
                            
                        </div>
                    </form>
                    
                    
                </div>
               
               
                
    </React.Fragment>);
    }
    
}

export default BadgeForm;
 