import React from 'react';


class SignIn extends React.Component {

    render(){
        return <div style={{marginTop:200}}>
            <div className="col-md-6 offset-md-3">
                <h3>
                    <i className="fa fa-sign-in"></i>
                    <span> Sign In</span>
                </h3>
            </div>
            <div className="col-md-4 offset-md-4">            
                <div className="row form-group">
                    <label className="control-label">User Name</label>
                    <input className="form-control" placeholder="User Name" />
                </div>
                <div className="row form-group">
                    <label className="control-label">Password</label>
                    <input className="form-control" placeholder="Password" />
                </div>
            </div>
        </div>
    }

}


export default SignIn;