import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Form, Input, Button, message, Select } from 'antd'; // Import Select
import { UpdateUser } from '../../store/actionCreators/UserAction';

const EditUser = ({ user, visible, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      phoneNumber: user.phoneNumber,
      avatar: user.avatar,
    });
  }, [user, form]);

  const onFinish = (values) => {
    // Extract user ID from the user object
    const { id, ...userData } = user;

    // Merge the updated data with the user data
    const updatedUser = { ...userData, ...values };

    // Dispatch the UpdateUser action with the user's ID and updated data
    dispatch(UpdateUser({ id, data: updatedUser }));

    message.success('User updated successfully');
    onClose();
  };

  return (
    <Modal
      title="Edit User"
      open={visible} 
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password />
        </Form.Item>
        <Form.Item name="role" label="Role">
          <Select defaultValue={user.role}> {/* Use Select for the Role field */}
            <Select.Option value="customer">Customer</Select.Option> {/* Define options */}
            <Select.Option value="admin">Admin</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="phoneNumber" label="Phone Number">
          <Input />
        </Form.Item>
        <Form.Item name="avatar" label="Avatar">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUser;
