import React, {Component} from 'react';
import { Card, Row, Col, InputNumber, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import UserInfo from './userInfo';
import PartyInfo from './partyInfo';
import Bookings from './bookings';
const userInfo = {
  name: "Carly",
  email: "carlyrags@gmail.com",
  phonenumber: "4032781880"
}

const partyInfo = {
  requestTime: "6:00",
  partySize: "10",
  name: "Carly"
}
export default class Request extends Component {
render() {
  return(
    <>
    <PartyInfo partyInfo={partyInfo} />
    <UserInfo userInfo={userInfo}/>
    <Bookings userInfo={userInfo}/>
    </>
  )
}
}
