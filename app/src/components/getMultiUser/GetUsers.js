import React, { useEffect } from "react";
import { GetUsers } from "../../store/actionCreators/UserAction";
import { useDispatch } from "react-redux";

const GetMultiUsers = () => {
    const count = 20;
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch the GetUsers action when the component mounts
        dispatch(GetUsers(count));
    }, [dispatch, count])

    return (
        <div>
        </div>
    );
};

export default GetMultiUsers;
