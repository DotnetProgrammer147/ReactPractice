import React from 'react';


class Car extends React.Component{
  constructor(){
    super();
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    }
  }

  changeColor = () => {
    this.setState(
      {
        brand: "Mercedes",
        color : "blue", 
        year : 1970
      }
    );
  }



  render(){
    return <div>
      <h2>My {this.state.brand} New</h2>
      <p>
        It is a {this.state.color} {this.state.model} from {this.state.year}
      </p>
      <button onClick={this.changeColor}>Change</button>
    </div>
  }
}


export default Car;
