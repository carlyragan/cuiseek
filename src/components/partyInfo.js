import React, {Component} from 'react';
import { Card, Row, Col, InputNumber, Input, Button} from 'antd';
import 'antd/dist/antd.css';

const {TextArea} = Input;

export default class PartyInfo extends Component {

  onChange = value => {
    console.log('changed', value);
  }

  render() {
    console.log(this.props);
    return(
      <div className='party-info'>
        <Card style={{ width: 600 }} bordered={false} >
          <p><b>Request Time: {this.props.partyInfo.requestTime}</b></p>
          <p><b>Party Size: {this.props.partyInfo.partySize}</b></p>
          <Card style={{width: 550 }}>
            <p><b>Optionally, you can specify a table for {this.props.partyInfo.name}</b></p>
            <p>Table:  <InputNumber min={1} max={1000} defaultValue={0} onChange={this.onChange} ></InputNumber></p>
            <p>Notes:
            <TextArea rows={6}></TextArea>
            </p>
            <Button type="primary">Save & Accept Booking</Button>
          </Card>
        </Card>
      </div>
    )
  }
}
