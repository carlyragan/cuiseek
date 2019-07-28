import React, {useState} from 'react';
import { Card, Button } from 'antd';
import 'antd/dist/antd.css';
import { Table, Divider, Tag,} from 'antd';

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    guest: 'John',
    time: 530,
    partysize: '5',
    table: '5',
    email: 'email@gmail.com',
    phonenumber:  '4035878584',
    status: 'confirmed',
    actions: 'Cancel'
  },
  {
    key: '2',
    guest: 'John',
    time: 530,
    partysize: 'New York No. 1 Lake Park',
    table: '5',
    email: 'email@gmail.com',
    phonenumber:  '4035878584',
    status: 'confirmed',
    actions: 'Cancel'
  },
  {
    key: '3',
    guest: 'John',
    time: 530,
    partysize: 'New York No. 1 Lake Park',
    table: '5',
    email: 'email@gmail.com',
    phonenumber:  '4035878584',
    status: 'confirmed',
    actions: 'Cancel'
  },
];


const Bookings = (userInfo, partyInfo ) => {
const [seated, setSeated] = useState(false)
  return(
  <Table dataSource={data}>
      <Column title="Guest" dataIndex="guest" key="1" />
      <Column title="Time" dataIndex="time" key="lastName" />
      <Column title="Party Size" dataIndex="partysize" key="partysize" />
      <Column title="Table" key="table" render = {
        (data) => (
          <div>
          {data.table}
          <br></br>
          <Button
          bsStyle="link"
      onClick={() => setSeated(!seated)}>
          {seated === false ?  'Assign' : 'Change' }
          </Button>
          </div>
        )
      } />
      <Column title="Contact" key="contact" render= {
        (data) => (
          <div>
          <a href="">{data.phonenumber}</a><br/>
          <a href="">{data.email}</a>
          </div>
        )
      }/>
      <Column
      title="Action"
      key="action"
      render={(data) => (
        <span>
          <a href="javascript:">Cancel</a>
          <a href="javascript:;">No Show</a>
          <a href=":;">Close</a>
        </span>
      )}
    />
    <Column/>
  </Table>
)
}
export default Bookings;
