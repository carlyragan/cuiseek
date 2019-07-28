import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Request from './components/request'
import { Row, Col } from 'antd';

class App extends Component{
render(){
  return (
    <div className="App">
    <div className="container">
      <Row>
        <Request />
      </Row>
    </div>
    </div>
  );
}
}

export default App;
