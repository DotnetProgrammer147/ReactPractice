import React from 'react';


class ApiLoginTest extends React.Component {

    constructor() {
        super()
        this.state = {
            email:'',
            password:''
        }
    }

    handleEmail(text)
    {
        this.setState({email:text.target.value})
    }

    handlePassword(text)
    {
        this.setState({password:text.target.value})
    }

    login()
    {
        let obj={}
        obj.email = this.state.email;
        obj.password = this.state.password;

        fetch('https://localhost:5001/api/Test/Login',
        {
            header:{
                "Content-Type": "application/json"
            },
            method:'POST',
            body:JSON.stringify({obj})
        }
        ).then((response) => response.text())
        .then((data) => console.log(data));;
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
                    <input type='text' className="form-control" onChange={(text) => {this.handleEmail(text)}} placeholder="Email" />
                </div>
                <div className="row form-group">
                    <label className="control-label">Password</label>
                    <input type='password' className="form-control" onChange={(text) => {this.handlePassword(text)}} placeholder="Password" />
                </div>
                <div className="row form-group">
                    <button className="btn btn-success" onClick={this.login}> Submit</button>
                </div>
            </div>
            </form>
        </div>
    }

}


export default ApiLoginTest;