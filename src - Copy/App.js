import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Components/Car'

function App() {
  return (   
      <Provider store={store}>
        <Container maxWidth = "lg"></Container>
        <Car />
      </Provider>
  );
}

export default App;
