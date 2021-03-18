import React from 'react';
import { Input, Button } from 'antd';
import Table from '../Table';
import Card from '../Card';
import TopBar from '../TopBar/TopBar';
import FromModal from '../../Modal/Modal'
import { showModalForm } from "../../../actions/actionCreator";
import { connect } from 'react-redux';
const { Search } = Input;

const onSearch = value => console.log(value);

const ContentPage = (props) => {
    return (<div className="m-4">
        <TopBar />

        {/* Contact Bar*/}
        <div className="row m-4">
            <Search placeholder="Search Contacts" onSearch={onSearch} style={{ width: 200 }} />
            <Button type="primary ml-3" onClick={() => props.addNewContact(true)}>+ Add Contact</Button>
        </div>

        <div className="row m-4">
            <div className="col-5">
                <Table />
            </div>
            <div className="col-7">
                <Card />
            </div>
        </div>
        {<FromModal />}

    </div>);
}

const mapDispatchToProps = (dispatch) => ({
    addNewContact: (data) => dispatch(showModalForm(data))
})

export default connect(null, mapDispatchToProps)(ContentPage);