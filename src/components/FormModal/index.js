import React, { useEffect, useState } from 'react';
import { Form, Input, Modal } from 'antd';
import {addContact} from "../../actions/actionCreator";
import { connect } from 'react-redux';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


const FormModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(props.addNewContact);

  useEffect(() => setIsModalVisible(props.addNewContact), props.addNewContact)
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Modal title="Add New Contact" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[{ required: true, message: 'Please input your Full Name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input your Phone!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please input your Address!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Company"
        name="company"
        rules={[{ required: true, message: 'Please input your Company!' }]}
      >
        <Input />
      </Form.Item>
    </Form>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setContact: (data) => dispatch(addContact(data))
})

const mapStateToProps = (store) => ({
  addNewContact: store?.addNewContact
})

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);