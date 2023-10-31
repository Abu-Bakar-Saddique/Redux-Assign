import React from 'react';
import { Modal, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { DeleteUser } from '../../store/actionCreators/UserAction';

const RemoveUser = ({ user, visible, onCancel }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
      // Use user.id to get the user's ID
      dispatch(DeleteUser(user.id));
      onCancel();
    };

    return (
      <Modal
        title="Delete User"
        open={visible} // Use visible instead of open
        onCancel={onCancel}
        footer={[
          <Button key="cancel" onClick={onCancel}>
            Cancel
          </Button>,
          <Button key="delete" type="danger" onClick={handleDelete}>
            Delete
          </Button>,
        ]}
      >
        <p>Are you sure you want to delete this user?</p>
      </Modal>
    );
};

  
export default RemoveUser;
