import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../components/initialData/InitialData";
import { AddUsers, UpdateUser, DeleteUser, GetUsers } from "../actionCreators/UserAction";

const userSlice = createSlice({
  name: "users",
  initialState: UserData,
  reducers: {
    addUser(state, action) {
      // code here
    },
    getAllUsers(state, action) {
      // Your getAllUsers logic here
    },
    removeUser(state, action) {
      // Your removeUser logic here
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(AddUsers.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("data saved at DB");
    });
    builder.addCase(AddUsers.pending, (state, action) => {
      console.log("data sent, waiting for server response");
    });
    builder.addCase(AddUsers.rejected, (state, action) => {
      console.log("Bad response on request");
    });


    // states for Update user data
    builder.addCase(UpdateUser.fulfilled, (state, action) => {
      // Find the user in the state by their id
      const userId = action.meta.arg.id;
      const updatedUserData = action.payload;

      // Update the user's data in the state
      const userIndex = state.findIndex(user => user.id === userId);
      if (userIndex !== -1) {
        state[userIndex] = { ...state[userIndex], ...updatedUserData };
        console.log('User updated successfully');
      }
    });
    builder.addCase(UpdateUser.pending, (state, action) => {
      console.log('Updating user, waiting for server response');
    });
    builder.addCase(UpdateUser.rejected, (state, action) => {
      console.log('Failed to update user');
    });


    // states for delete user 
    builder.addCase(DeleteUser.fulfilled, (state, action) => {
      // Handle successful deletion
      console.log(`User with ID ${action.meta.arg} deleted successfully`);
      
      // Remove the deleted user from the state
      const deletedUserId = action.meta.arg;
      return state.filter((user) => user.id !== deletedUserId);
    });
  
    builder.addCase(DeleteUser.pending, (state, action) => {
      console.log('Deleting user, waiting for server response');
    });
  
    builder.addCase(DeleteUser.rejected, (state, action) => {
      console.log('Failed to delete user');
    });
    

    // States for Get users
    builder.addCase(GetUsers.fulfilled, (state, action) => {
      // Handle successful retrieval of multiple users
      console.log('Users retrieved successfully');
      return action.payload; // Assuming the payload is an array of users
    });
  
    builder.addCase(GetUsers.pending, (state, action) => {
      console.log('Fetching users, waiting for server response');
    });
  
    builder.addCase(GetUsers.rejected, (state, action) => {
      console.log('Failed to fetch multiple users');
    }); 
  },
});

export default userSlice.reducer;
