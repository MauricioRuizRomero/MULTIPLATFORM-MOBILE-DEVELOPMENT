import React from "react"
import "./style/Signupform.css"

class Signupform extends React.Component{
    

    render(){
        return(
            <React.Fragment>
            
            <div className="Signupform">
                <form onSubmit="">
                <div className="form-group mb-2">
                    <label className="mb-1">First Name(s)</label>
                    <input type="text" className="form-control" name="firstName" onChange={this.props.onChange} value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group mb-2">
                    <label className="mb-1">Last Name(s)</label>
                    <input type="text" className="form-control" name="lastName" onChange={this.props.onChange} value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group mb-2">
                    <label className="mb-1">Email</label>
                    <input type="email" className="form-control" name="Email" onChange={this.props.onChange} value={this.props.formValues.Email}/>
                    </div>
                    <div className="form-group mb-2">
                    <label className="mb-1">Password</label>
                    <input type="password" className="form-control" name="Password" onChange={this.props.onChange} value={this.props.formValues.Password}/>
                    </div>
                    <div className="form-group mb-2">
                    <label className="mb-1">Confirm Password</label>
                    <input type="password" className="form-control" name="ConfirmPassword" onChange={this.props.onChange} 
                    value={this.props.formValues.ConfirmPassword}/>
                    <button type="submit" className="Signupbtn">Sign up</button>
                    </div>
                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default Signupform;