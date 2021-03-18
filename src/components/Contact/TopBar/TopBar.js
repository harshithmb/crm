import React from 'react';
import {
    ContactsOutlined,
    DownOutlined
  } from '@ant-design/icons';
import styles from "../Content/Content.module.css"

const TopBar = () => {
    return ( <div className="d-flex row">
    <ContactsOutlined className={styles.contactIcon}/> 
    <span className={styles.contactText}>Contacts</span>

    <div className={`d-flex-inline ${styles.sortBy}`}>
    <span className={styles.sortByText}>Sort By:</span>
    <Dropdown overlay={menu} trigger={['click']}>
        <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Date Created <DownOutlined />
        </span>
    </Dropdown>
    </div>
   
</div> );
}
 
export default TopBar;