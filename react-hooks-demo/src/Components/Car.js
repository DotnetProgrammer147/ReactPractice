import React from 'react';


class Car extends React.Component{
  constructor(){
    super();
    this.state = {
      car: { 
        brand: '', 
        model: '', 
        color:'', 
        year: 0
      }
    }
    
  }

  //brand: "Ford",
  //model: "Mustang",
  //color: "red",
  //year: 1964

  changeColor = () => {
    this.setState(
      {
        car: {
          brand: "Mercedes",
          model: "Benz",
          color : "blue", 
          year : 1970
        }
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
