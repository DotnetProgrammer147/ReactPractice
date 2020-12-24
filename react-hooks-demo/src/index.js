import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Car from './Components/Car'

class Employee extends React.Component{

  state = {counter : 0};

  addEmployee = () => {
    this.setState(
      {
        counter : this.state.counter+1
      }
    );
  }

  

  render(){
    return <div>
      <h1>This is Employee Component...</h1>
      <p>
        <button onClick={this.addEmployee}>Add Employee</button>
      </p>
  <p>Button is clicked <b>{this.state.counter}</b> times</p>
    </div>
  }
}

const element = <Car></Car>

ReactDOM.render(element, document.getElementById("root"));

// ------------------------------------- Class Components ----------------------------------------------------------//

// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     console.log(this.props);
//   }

//   render(){    
//     return <div>
//       <h1>Employee Details...</h1>
//     <p>
//         <label>Employee ID : <b>{this.props.Id}</b> </label><br/>
//         <label>Employee Name : <b>{this.props.Name}</b> </label><br/>
//         <label>Employee Location : <b>{this.props.Location}</b> </label><br/>
//         <label>Employee Salary : <b>{this.props.Salary}</b> </label><br/>
//     </p>
//     {/* <Department DeptName={this.props.DeptName} HeadName = {this.props.HeadName}></Department> */}
//     </div>
//   }

// }

// class Department extends React.Component{
//   render(){
//     return <div>
//       <h1>Department Details...</h1>
//     <p>
//         <label>Dept Name : <b>{this.props.DeptName}</b></label>
//         <label>Head Name : <b>{this.props.HeadName}</b></label>
//     </p>
//     </div> 
//   }
// }

// const element = <Employee Id="101" Name="Ali" Location="Asia" Salary="1234" DeptName = "DCE" HeadName = "BYJ"></Employee>
// ReactDOM.render(element, document.getElementById("root"));
// ------------------------------------- Functional Components ----------------------------------------------------------//
/*
var DisplayEmployeeInfo = (employee) => {
  return <div>
    <h1>Employee Details...</h1>
    <p>
        <label>Employee ID : <b>{employee.Id}</b></label>
        <label>Employee Name : <b>{employee.Name}</b></label>
        <label>Employee Location : <b>{employee.Location}</b></label>
        <label>Employee Salary : <b>{employee.Salary}</b></label>
    </p>
    <Department deptName={employee.deptName} headName = {employee.headName}></Department>
  </div>
}

const Department = (deptInfo) => {
  return <div>
    <p> Dept Name is : <b>{deptInfo.deptName}</b></p>
    <p> Dept Head is : <b>{deptInfo.headName}</b></p>
  </div>
}

const element = <DisplayEmployeeInfo Id="101" Name="Ali" Location="Asia" Salary="1234" deptName = "DCE" headName = "BYJ">

</DisplayEmployeeInfo>

ReactDOM.render(element, document.getElementById("root"));
*/
/*

function DisplayEmployeeInfo(employee){
  return <div>
    <p>
        <label>Employee ID : <b>{employee.Id}</b></label>
        <label>Employee Name : <b>{employee.Name}</b></label>
        <label>Employee Location : <b>{employee.Location}</b></label>
        <label>Employee Salary : <b>{employee.Salary}</b></label>
    </p>
  </div>
}

const element = <DisplayEmployeeInfo Id="101" Name="Ali" Location="Asia" Salary="1234">

</DisplayEmployeeInfo>

ReactDOM.render(element, document.getElementById("root"));
*/


/*
const element = <h1 className="testClass">Welcome to React Programming</h1>

ReactDOM.render(element, document.getElementById("root"));
*/