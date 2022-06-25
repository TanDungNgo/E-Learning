import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentsAction } from "../../../redux/actions/UserActions";

export const StudentProfile = () => {
  const dispatch = useDispatch();
  // Lấy thông tin từ kho state.UserReducer về sử dụng useSelector
  // Cú pháp destructoring
  const { listStudents } = useSelector((state) => state.UserReducer)
  console.log("UserLogin", listStudents);
  useEffect(() => {
    dispatch(getAllStudentsAction());
  }, []);
  return <div>StudentProfile</div>;
};
