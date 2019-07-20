import React, {Component} from 'react';
import { Card, Row, Col, InputNumber, Input, Button} from 'antd';
import 'antd/dist/antd.css';

export default class UserInfo extends Component {
    render() {
        return (
          <>
    <Row>
      <Col span={10}><h1>Booking Request</h1></Col>
      <Col span={6} offset={6}><Button type="danger">Reject Booking</Button></Col>
    </Row>

<div className='user-info'>
    <Card style={{ width: 300 }}>
      <p><b>Name:  {this.props.userInfo.name}</b></p>
      <p><b>Email:   {this.props.userInfo.email}</b></p>
      <p><b>Phone Number:  {this.props.userInfo.phonenumber}</b></p>
    </Card>,
 </div>
 </>
)
    }
}
