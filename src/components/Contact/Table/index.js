import React from 'react';
import { Table, Avatar } from 'antd';
import { connect } from 'react-redux';
import { setSelectedContact } from "../../../actions/actionCreator"

const ContactTable = ({ contacts, setContact }) => {
  const columns = [
    {
      title: 'Basic Info',
      dataIndex: 'name',
      render: (text, details, index) => {
        let { color, email, fullName } = details
        return <div className="d-flex cursor-pointer" onClick={() => setContact(details)}>
          <Avatar
            style={{
              backgroundColor: color,
              verticalAlign: 'middle',
              marginTop: "8px"
            }} size="large">
            {fullName?.slice(0, 2).toUpperCase()}
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
  return (<>
    {contacts?.length && <Table columns={columns} dataSource={contacts} />}
  </>);
}

const mapDispatchToProps = (dispatch) => ({
  setContact: (data) => dispatch(setSelectedContact(data))
})

const mapStateToProps = (store) => ({
  selectedContact: store?.selectedContact,
  contacts: store?.contacts
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactTable);