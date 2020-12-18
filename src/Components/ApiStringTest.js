import React from 'react';


class ApiStringTest extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Test/GetString';
    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => console.log('This is your data (React) => ', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default ApiStringTest;