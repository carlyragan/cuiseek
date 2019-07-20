import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Booking from './components/booking'
import { Row, Col } from 'antd';

class App extends Component{
render(){
  return (
    <div className="App">
    <div className="container">
      <Row>
        <Booking />
      </Row>
    </div>
    </div>
  );
}
}

export default App;
