import React from 'react';
import {
    ContactsOutlined,
    DownOutlined
  } from '@ant-design/icons';
import styles from "./TopBar.module.css"
import { Menu, Dropdown} from 'antd';
import {sortContacts} from "../../../actions/actionCreator";
import { connect } from 'react-redux';

const menu = (
    <Menu>
      <Menu.Item key="0">
        Date Created
      </Menu.Item>
      <Menu.Item key="1">
        Company
      </Menu.Item>
    </Menu>
  );

const TopBar = ({sortContacts}) => {
    return ( <div className="d-flex row">
    <ContactsOutlined className={styles.contactIcon}/> 
    <span className={styles.contactText}>Contacts</span>

    <div className={`d-flex-inline ${styles.sortBy}`}>
    <span className={styles.sortByText}>Sort By:</span>
    <Dropdown overlay={menu} trigger={['click']}>
        <span className="ant-dropdown-link" onClick={e => {
            e.preventDefault()
            sortContacts(e.target.value)
            }}>
            Date Created <DownOutlined />
        </span>
    </Dropdown>
    </div>
   
</div> );
}

const mapDispatchToProps = (dispatch) => ({
    sortContacts: (data) => dispatch(sortContacts(data))
})

export default connect(null, mapDispatchToProps)(TopBar);