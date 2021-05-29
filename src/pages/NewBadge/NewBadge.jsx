import React from "react";
import Badge from "../../components/Badge";
import Hero from "../../components/Hero";
import BadgeForm from "../../components/BadgeForm";
import"./NewBadge.css";
import api from "../../libs/api";

class NewBadge extends React.Component{

        state ={
            loading : false,
            error: null,
            form:{
                header_picture:"",
                profile_picture:"",
                name:"",
                age:"",
                city:"",
                life:"",
                strenght:"",
                magic:"",
            },
        };


        handleChange = event =>{
            this.setState({
                form:{
                    ...this.state.form,
                    [event.target.name]: event.target.value
                }
             })
            }

handleSubmit = async (event) =>{
    event.preventDefault();
    this.setState({loading:true, error:null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/")
        }   
            catch (error){
                this.setState({loading:false, error: error})

        }

}

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <Badge
                        header_picture = {this.state.form.header_picture || "https://steamuserimages-a.akamaihd.net/ugc/850473863875506364/147EF97F0CE30BE722DFE4848A196C1947449E89/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"}
                        profile_picture = {this.state.form.profile_picture || "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0597de8-ff97-4135-9d69-5735bed780f1/d4u7r13-3daa5132-42d2-4012-a428-74b22283501e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MwNTk3ZGU4LWZmOTctNDEzNS05ZDY5LTU3MzViZWQ3ODBmMVwvZDR1N3IxMy0zZGFhNTEzMi00MmQyLTQwMTItYTQyOC03NGIyMjI4MzUwMWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8o5Px3W-hhow0cOPMmoIyMOxrnBk3KcMZBTp4JmQodg" } 
                        name = {this.state.form.name || "Cloud Strife"}
                        age = {this.state.form.age || "24" }
                        city = {this.state.form.city || "Nibelheim"}
                        life = {this.state.form.life || "9508"}
                        strenght = {this.state.form.strenght || "100"}
                        magic = {this.state.form.magic || "100"}

                        
                        
                        >
                        

                        </Badge>

                    </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}>

                            </BadgeForm>
                         </div>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge;