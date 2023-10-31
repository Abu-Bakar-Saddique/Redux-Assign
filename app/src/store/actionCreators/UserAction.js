import { createAsyncThunk } from "@reduxjs/toolkit";
import userEndPoints from "../../services/UserApis";

export const AddUsers = createAsyncThunk(
    "User/create",
    async (data) => {
        const response = await userEndPoints.create(data);
        return response.data; // No need for response.json()
    }
);


export const UpdateUser = createAsyncThunk(
    "User/update", 
    async ({ id, data }) => {
        const response = await userEndPoints.edit(id,data);
        return response.data;
    }
)


export const DeleteUser = createAsyncThunk(
    "User/delete",
    async(id) => {
        const response = await userEndPoints.remove(id);
        return response.data;
    }
)


export const GetUsers = createAsyncThunk(
    "User/GetMultipleUesrs",
    async(count) => {
        console.log(count);
        const response =  await userEndPoints.retrieve(count);
        return response.data;
    }
)