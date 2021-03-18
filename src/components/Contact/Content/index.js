import React from 'react';

import styles from "./Content.module.css";
import { Menu, Dropdown, Input, Button } from 'antd';
import Table from '../Table';
import Card from '../Card';
import TopBar from '../TopBar/TopBar';


const { Search } = Input;

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


const onSearch = value => console.log(value);

const ContentPage = () => {
    return ( <div className="m-4">
        <TopBar/>

         {/* Contact Bar*/}
        <div className="row m-4">
            <Search placeholder="Search Contacts" onSearch={onSearch} style={{ width: 200 }} />
            <Button type="primary ml-3">+ Add Contact</Button>
        </div>

        <div className="row m-4">
            <div className="col-5">
                <Table/>
            </div>
            <div className="col-7">
                <Card/>
            </div>
        </div>
        
    </div> );
}
 
export default ContentPage;