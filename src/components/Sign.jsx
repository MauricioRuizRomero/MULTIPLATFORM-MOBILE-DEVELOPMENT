import React from "react"
import SignupForm from "./Signupform"
import api from "../libs/api"


class Signup extends React.Component{
    handleChange= event =>{
        this.setState({
            form:{
                ...this.state.form,[event.target.name]: event.target.value
            }
        })
    }

    handleSubmit= async(event)=>{
        event.preventDefault();
        this.setState({loading:true, error:null})
        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false,error:null})
            this.props.history.push("/")
        }catch(error){
            this.setState({loading:false,error:error})
        }
    }

    state = {
        loading : false,
        error: null,
        form:{
            firstName:"",
            lastName:"",
            Email: "",
            Password: "",
            ConfirmPassword:"",

        }
    }

    render(){
        return(
            <React.Fragment>
                <div>
    <SignupForm 
    onChange={this.handleChange}      
    onSubmit={this.handleSubmit} 
    formValues={this.state.form}>
    </SignupForm>
    </div>
            </React.Fragment>
        );
    }
}

export default Signup;