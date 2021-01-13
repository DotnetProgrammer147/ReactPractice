import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Components/Container';
import Car from './Components/Car';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navigation from './Components/Navigation';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>   
        <Route path="/SignIn" exact component={() => <SignIn />} />
        <Route path="/SignUp" exact component={() => <SignUp />} />
        <Route path="/Home" exact component={() => <Home />} />
        <Route path="/Contact" exact component={() => <Contact />} />
        <Route path="/About" exact component={() => <About />} />
      </Switch>
    </Router>  
  );
}

export default App;
/////////////////////////////////////////////////////////////////////

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navigation from "./Components/Navigation";
// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navigation />
//         <Switch>
//           <Route path="/" exact component={() => <Home />} />
//           <Route path="/about" exact component={() => <About />} />
//           <Route path="/contact" exact component={() => <Contact />} />
//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;