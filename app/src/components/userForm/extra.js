import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddUsers } from '../../store/actionCreators/UserAction';
import { Input, Button, Form, message, Row, Col, Card } from 'antd';
import DisplayUsers from '../displayUsers/DisplayUsers';
import GetMultiUsers from '../getMultiUser/GetUsers';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const UserForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [getUsersCount, setGetUsersCount] = useState(2); // Initialize the count


  const onFinish = (values) => {
    if (!phoneNumber) {
      message.error('Please enter a valid phone number with a country code');
      return;
    }

    // Password validation: Ensure that the password does not contain any special characters.
    const passwordPattern = /^[a-zA-Z0-9]*$/; // Only letters and digits are allowed.
    if (!passwordPattern.test(values.password)) {
      message.error('Password must not contain special characters');
      return;
    }

    dispatch(AddUsers(values));
    setSubmitted(true);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const newUser = () => {
    form.resetFields();
    setSubmitted(false);
  };

  const handleCountChange = (count) => {
    console.log(count);
    setGetUsersCount(count);
  };


  return (
    <div className="form-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#C8FDF7' }}>
      <Card >
        <div className="submit-form">
          {submitted ? (
            <div>
              <Button type="primary" onClick={newUser}>
                Add Another User
              </Button>
              <Input
                type="number"
                placeholder="Enter user count"
                value={getUsersCount}
                onChange={handleCountChange}
              />
              <Button
                type="primary"
                onClick={() => {
                  // Dispatch GetUsers with the specified count
                  dispatch(GetMultiUsers(getUsersCount));
                  // Show the DisplayUsers component
                }}
              >
                Get Users
              </Button>
              <DisplayUsers />
            </div>
          ) : (
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 15 }} onFinish={onFinish}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please enter a valid email',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: 'Please enter a password' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="role" label="Role">
                <Input />
              </Form.Item>

              <Form.Item name="avatar" label="Avatar">
                <Input />
              </Form.Item>

              <Form.Item
                name="phoneNumber"
                label="Contact"
                style={{ width: '50%' }} // Adjust the width as needed
                labelCol={{ span: 8 }} wrapperCol={{ span: 15 }}
              >
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                />
              </Form.Item>

              <Row justify="center">
                <Col>
                  <Form.Item wrapperCol={{ span: 100 }}>
                    <Button block type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          )}
        </div>
      </Card>
    </div>
  );
};

export default UserForm;


