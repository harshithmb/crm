import React from 'react';
import { addContact, showModalForm } from "../../actions/actionCreator";
import { connect } from 'react-redux';
import { Form, Input, Button, Modal } from 'antd';
import { getRandomColor } from '../../utils';

const FormModal = (props) => {

  const [form] = Form.useForm();


  const onFinish = (values) => {
    form.resetFields();
    props.setContact({ ...values, color: getRandomColor() })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 14, span: 12 },
  };
  return (
    <>
      <Modal
        title="Add New Contact"
        visible={props.addNewContact}
        footer={null}
        onCancel={() => props.showModal(false)}
      >
        <Form
          {...layout}
          name="basic"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input your Phone Number!' }]}
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
            rules={[{ required: true, message: 'Please input your Company Name!' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="secondary" className="mr-2" onClick={() => props.showModal(false)}>
              Cancel
        </Button>
            <Button type="primary" htmlType="submit">
              Submit
        </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setContact: (data) => dispatch(addContact(data)),
  showModal: (data) => dispatch(showModalForm(data))
})

const mapStateToProps = (store) => ({
  addNewContact: store?.addNewContact,
  contact: store?.contact
})

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);