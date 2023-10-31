import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slice/SignupSlice';

const store = configureStore({
    reducer: {
        users: userSlice, // Use the correct slice name
    },
});

export default store;
