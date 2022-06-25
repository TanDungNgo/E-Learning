import Api from "./baseApi"

const getAllStudents = () => {
    return Api.get("/students");
};
const login = (formData) => {
    return Api.post("/users/login",formData)
    
};
export const UserService = {
    getAllStudents,
    login,
};