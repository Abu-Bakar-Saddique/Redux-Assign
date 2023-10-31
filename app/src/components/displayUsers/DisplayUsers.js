import React, { useState } from 'react';
import { List, Card, Badge, Button, Modal } from 'antd';
import { useSelector } from 'react-redux';
import EditUser from '../editUser/EditUser'; // Import EditUser component here
import RemoveUser from '../deleteUser/DeleteUser';

// ... (previous code)

const DisplayUsers = () => {
  const users = useSelector((state) => state.users);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const showEditModal = (user) => {
    setSelectedUser(user);
    setEditModalVisible(true);
  };

  const showDeleteModal = (user) => {
    setSelectedUser(user);
    setDeleteModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  return (
    <div>
      <h2>User List</h2>
      <List
        grid={{ gutter: 12, column: 4 }}
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            <Badge.Ribbon text={user.id}>
              <Card
                title={user.name}
                style={{ width: 250, height: 420, border: '1px solid skyblue' }}
                actions={[
                  <Button
                    type="primary"
                    onClick={() => showEditModal(user)}
                  >
                    Edit
                  </Button>,
                  <Button type="danger" onClick={() => showDeleteModal(user)}>
                    Delete
                  </Button>,
                ]}
              >
                <p style={{ textAlign: 'center' }}>
                  <img src={user.avatar} alt={user.name} style={{ maxWidth: '80px', height: '80px' }} />
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Role:</strong> {user.role}
                </p>
                <p>
                  <strong>Contact:</strong> {user.phoneNumber}
                </p>
              </Card>
            </Badge.Ribbon>
          </List.Item>
        )}
      />
      {editModalVisible && (
        <Modal
          title="Edit User"
          visible={editModalVisible}
          onCancel={closeEditModal}
          footer={null}
        >
          {/* Render EditUser component with user data and close function */}
          <EditUser user={selectedUser} visible={editModalVisible} onClose={closeEditModal} />
        </Modal>
      )}
      {deleteModalVisible && (
        <RemoveUser
          user={selectedUser} // Pass selectedUser as user
          visible={deleteModalVisible}
          onCancel={closeDeleteModal}
        />
      )}
    </div>
  );
};

export default DisplayUsers;
