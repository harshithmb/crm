import React from 'react';
import { Table, Avatar } from 'antd';
import { getRandomColor } from '../../../utils';
import { connect } from 'react-redux';

const columns = [
  {
    title: 'Basic Info',
    dataIndex: 'name',
    render: (text, {user}, index) => {
      debugger
        let {fullName, email} = user
        return <div className="d-flex">
  
            <Avatar 
                style={{ 
                    backgroundColor: getRandomColor(), 
                    verticalAlign: 'middle',
                    marginTop: "8px"
                 }} size="large">
                {fullName?.slice(0,2).toUpperCase()}
            </Avatar>
       
      <div className="p-2">
            <div>{fullName}</div>
            <div>{email}</div>
      </div>
      </div>
      },
  },
  {
    title: 'Company',
    dataIndex: 'company',
  },
];

const ContactTable = ({contacts}) => {
  return ( <>
  {contacts?.length && <Table columns={columns} dataSource={contacts} />}
  </> );
}



const mapStateToProps = (store) => ({
  selectedContact: store?.selectedContact,
  contacts: store?.contacts
})

export default connect(mapStateToProps, null)(ContactTable);