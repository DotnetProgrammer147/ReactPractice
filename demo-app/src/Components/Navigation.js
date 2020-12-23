import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <Link class="navbar-brand" to="/"><b>Test Application</b></Link>
          <Link class="nav-link" style={{color:'white'}} to="/Home">Home<span class="sr-only"></span></Link>
          <Link class="nav-link" style={{color:'white'}} to="/Contact">Contact<span class="sr-only"></span></Link>
          <Link class="nav-link" style={{color:'white'}} to="/About">About<span class="sr-only"></span></Link>         
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><Link class="nav-link" to="/SignIn">Login<span class="sr-only"></span></Link></li>
              <li class="nav-item"><Link class="nav-link" to="/SignUp">Register</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Link to="/Footer"></Link>
    </div>
  );
}

export default withRouter(Navigation);