import React from "react";
import StudentList from "../../Student/StudentList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUser } from "../../../redux/actions/UserActions";
const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const users = useSelector((state) => state.UserReducer.allUser);
  return (
    <>
      <StudentList
        studentControl={true}
        listStudents={users}
        userControl={true}
      />
    </>
  );
};

export default Users;
