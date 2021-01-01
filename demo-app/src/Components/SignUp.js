import React from 'react';
import { Link } from "react-router-dom";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            FullName: '',
            DoB: '',
            Email: '',
            Gender: '',
            Password: '',
            ConfirmPassword:''
        }

        this.FullName = this.FullName.bind(this);
        this.DoB = this.DoB.bind(this);
        this.Email = this.Email.bind(this);
        this.Gender = this.Gender.bind(this);
        this.Password = this.Password.bind(this);        
        this.ConfirmPassword = this.ConfirmPassword.bind(this);        
        
        this.Register = this.Register.bind(this);
    }

    FullName(event) {
        this.setState({ FullName: event.target.value })
    }

    DoB(event) {
        this.setState({ DoB: event.target.value })
    }

    Gender(event) {
        this.setState({ Gender: event.target.value })
    }

    Email(event) {
        this.setState({ Email: event.target.value })
    }

    Password(event) {
        this.setState({ Password: event.target.value })
    }

    ConfirmPassword(event) {
        this.setState({ ConfirmPassword: event.target.value })
    }

    Register(event) {
        //debugger;
        fetch('https://localhost:5001/api/Account/Register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FullName: this.state.FullName,
                DoB: this.state.DoB,
                Gender: this.state.Gender,
                Password: this.state.Password,
                Email: this.state.Email,
                ConfirmPassword: this.state.ConfirmPassword
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
            })
    }
    
    render(){
        return <div style={{marginTop:100}}>
            <form id="signUpForm" method="submit">
                <div className="col-md-8 offset-md-2">
                    <h2>
                        <i className="fa fa-user-plus"></i>
                        <span> Sign Up</span>
                    </h2>
                    <hr />
                </div>                
                <div className="col-md-6 offset-md-3">
                    <div className="row form-group">
                        <div className="col-md-6">
                            <label className="control-label"><b>Full Name</b></label>
                            <input className="form-control" placeholder="Full Name" onChange={this.FullName}/>
                        </div>
                        <div className="col-md-6">
                            <label className="control-label"><b>Date of Birth</b></label>
                            <input pattern="{0:dd-MM-YYY}" className="form-control" onChange={this.DoB} placeholder="Date of Birth" />
                        </div>                        
                    </div>
                    <div className="row form-group">
                        <div className="col-md-6">
                                <label className="control-label"><b>Gender</b></label>
                                <input className="form-control" placeholder="Gender" onChange={this.Gender}/>
                                {/* <select className="form-control">
                                    <option selected disabled>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>                                    
                                </select>  */}
                        </div>
                        <div className="col-md-6">
                            <label className="control-label"><b>Email</b></label>
                            <input className="form-control" onChange={this.Email} placeholder="Email" />
                        </div> 
                    </div>
                    <div className="row form-group">
                        <div className="col-md-6">
                            <label className="control-label"><b>Password</b></label>
                            <input type="password" className="form-control" onChange={this.Password} placeholder="Password" />
                        </div>
                        <div className="col-md-6">
                            <label className="control-label"><b>Confirm Password</b></label>
                            <input type="password" className="form-control" onChange={this.ConfirmPassword} placeholder="Confirm Password" />
                        </div> 
                    </div>
                    <br />
                    <div class="row form-group">
                        <div className="col-md-12">
                            <Link class="btn btn-primary" to="/SignIn">
                                Already have an account
                            </Link>
                            <button type="button" onClick={this.Register} className="btn btn-success pull-right">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    }
}


export default SignUp;