import React, { useState } from 'react';
import {
  ContactsOutlined,
  DownOutlined
} from '@ant-design/icons';
import styles from "./TopBar.module.css"
import { Menu, Dropdown } from 'antd';
import { sortContacts } from "../../../actions/actionCreator";
import { connect } from 'react-redux';

const TopBar = (props) => {
  const [sortBy, setSortBy] = useState("Name")

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => {
        setSortBy("Name")
        props.sortContacts("name")
      }}>
        Name
      </Menu.Item>
      <Menu.Item key="1" onClick={() => {
        setSortBy("Company")
        props.sortContacts("company")
      }}>
        Company
      </Menu.Item>
    </Menu>
  );
  return (<div className="d-flex row">
    <ContactsOutlined className={styles.contactIcon} />
    <span className={styles.contactText}>Contacts</span>

    <div className={`d-flex-inline ${styles.sortBy}`}>
      <span className={styles.sortByText}>Sort By:</span>
      <Dropdown overlay={menu} trigger={['click']}>
        <span className="ant-dropdown-link">
          {sortBy}{" "}<DownOutlined />
        </span>
      </Dropdown>
    </div>

  </div>);
}

const mapDispatchToProps = (dispatch) => ({
  sortContacts: (data) => dispatch(sortContacts(data))
})

export default connect(null, mapDispatchToProps)(TopBar);