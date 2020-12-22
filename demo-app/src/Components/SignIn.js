import React from 'react';

class SignIn extends React.Component {
    
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: ''
        }

        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.login = this.login.bind(this);
    }

    Email(event) {
        this.setState({ Email: event.target.value })
    }

    Password(event) {

        this.setState({ Password: event.target.value })

    }

    login(event) {
        //debugger;
        fetch('https://localhost:5001/api/Account/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
            })

    }

    render(){
        return <div style={{marginTop:100}}>
            <form id="loginForm" method="submit" >
                <div className="col-md-6 offset-md-3">
                    <h3>
                        <i className="fa fa-sign-in"></i>
                        <span> Sign In</span>
                    </h3>
                </div>
                <div className="col-md-4 offset-md-4">            
                    <div className="row form-group">
                        <label className="control-label">Email</label>
                        <input type='text' className="form-control" onChange={this.Email} placeholder="Email" />
                    </div>
                    <div className="row form-group">
                        <label className="control-label">Password</label>
                        <input type='Password' className="form-control" onChange={this.Password} placeholder="Password" />
                    </div>
                    <div className="row form-group">
                        <button type="button" className="btn btn-success" onClick={this.login}> Submit</button>
                    </div>
                </div>
            </form>
        </div>
    }
}


export default SignIn;