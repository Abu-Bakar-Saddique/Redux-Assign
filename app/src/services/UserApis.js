import http from "../components/commonURL/Url";

const create = data => {
    return http.post("/users", data); 
};


const remove = id => {
    return http.delete(`/users/${id}`); 
};

const retrieve = count => {
    return http.get(`/users?limit=${count}`);
};
    
const edit = (id,data) => {
    return http.put(`/users/${id}`,data);
};


const userEndPoints = {
    create,
    retrieve,
    edit,
    remove,
}


export default userEndPoints