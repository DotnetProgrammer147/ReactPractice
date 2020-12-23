import { render } from "@testing-library/react";
import React from "react";

class Contact extends React.Component {
  render(){
    return <div>
            <div class="col-md-8 offset-md-2" style={{marginTop:100}}>
                <h1>Contact Information</h1>
            </div>
        </div>
  }
}

export default Contact;