import React from 'react';
import { Table, Avatar } from 'antd';
import { getRandomColor } from '../../../utils';

const columns = [
  {
    title: 'Basic Info',
    dataIndex: 'name',
    render: (text, {user}, index) => {
        let {name, email} = user
        return <div className="d-flex">
  
            <Avatar 
                style={{ 
                    backgroundColor: getRandomColor(), 
                    verticalAlign: 'middle',
                    marginTop: "8px"
                 }} size="large">
                {name?.slice(0,2).toUpperCase()}
            </Avatar>
       
      <div className="p-2">
            <div>{name}</div>
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

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    user: { name: `Henry ${i}`, email: `${i}@gmail.com` },
    company: `Company ${i}`,
  });
}

class ContactTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
  }
}

export default ContactTable