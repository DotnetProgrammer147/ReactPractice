// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Container from './Components/Container';


// function App() {
//   return (
//     <Container/>   
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////////////

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;