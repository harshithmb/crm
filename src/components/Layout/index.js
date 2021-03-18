import React from 'react';
import { Layout, Menu, Button } from 'antd';
import {
    DesktopOutlined,
    MenuOutlined,
    FileOutlined,
    ContactsOutlined,
    SearchOutlined,
    BellOutlined
} from '@ant-design/icons';
import styles from "./Layout.module.css"
import ContentPage from '../Contact/Content/';
import { connect } from 'react-redux';
import { getContacts, showModalForm } from '../../actions/actionCreator';
import { contactsAPI } from "../../utils";

const { Header, Content, Sider } = Layout;
class SiderMenu extends React.Component {

    componentDidMount() {
        this.props.dispatchContacts(contactsAPI)
    }

    render() {
        let { selectedContact, showModal } = this.props;
        return (

            <Layout style={{ minHeight: '100vh' }}>
                <Sider theme="dark" collapsed={true}>
                    <div className={styles.logo}>
                        <MenuOutlined style={{ color: "#fff", fontSize: "20px" }} />
                    </div>
                    <Menu className={styles.menu} defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<ContactsOutlined className={styles.menuIcon} />} />
                        <Menu.Item key="2" icon={<DesktopOutlined className={styles.menuIcon} />} />
                        <Menu.Item key="3" icon={<FileOutlined className={styles.menuIcon} />} />
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className={styles.siteLayoutBg} style={{ padding: 0 }}>
                        <div><SearchOutlined className={styles.searchIcon} /></div>
                        <div className={styles.rightSideItems}>
                            <Button type="ghost" className={styles.addBtn} onClick={() => showModal(true)}>+ ADD</Button>
                            {selectedContact?.fullName}
                            <BellOutlined className={styles.bellIcon} />
                        </div>
                    </Header>

                    <Content style={{ margin: '0 16px' }}>
                        <ContentPage />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatchContacts: (data) => dispatch(getContacts(data)),
    showModal: (data) => dispatch(showModalForm(data))
})

const mapStateToProps = (store) => ({
    selectedContact: store?.selectedContact
})

export default connect(mapStateToProps, mapDispatchToProps)(SiderMenu);