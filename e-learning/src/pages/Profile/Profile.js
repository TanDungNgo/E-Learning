import { NavLink, Redirect } from "react-router-dom";
import { EditFilled, ContactsTwoTone } from "@ant-design/icons";

import "./Profile.css";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { updateUserAction } from "../../redux/actions/UserActions";
import { Form } from "antd";
import { USER_LOGIN } from "../../utils/settings/config";

const Profile = (props) => {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  const [showEditAvatar, setShowEditAvatar] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      ...userLogin,
    },
    onSubmit: (values) => {
      dispatch(updateUserAction(values, props));
    },
  });

  return !userLogin ? (
    <Redirect to="/" />
  ) : (
    <>
      <div className="inline-block px-20 w-full bg-white bg-profile border-2 border-gray-300 rounded-lg">
        <Form
          labelCol={{
            span: 2,
          }}
          wrapperCol={{
            span: 24,
          }}
          layout="horizontal"
          onSubmitCapture={formik.handleSubmit}
        >
          <div style={{ border: "" }} className="w-full drop-shadow">
            <div className="flex justify-center">
              <div className="mt-2 inline-block border-2 border-sky-500 rounded-full mb-12 relative">
                <img
                  className="rounded-full w-28 h-28"
                  src={
                    userLogin.avatar
                      ? userLogin.avatar
                      : "https://nhathauxaydung24h.com/wp-content/uploads/2022/01/avatar-ngau-loi.jpg"
                  }
                  alt={userLogin.username}
                />
                <EditFilled
                  className="absolute drop-shadow-lg"
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    position: "absolute",
                    top: "80%",
                  }}
                  onClick={() => {
                    setShowEditAvatar(!showEditAvatar);
                  }}
                />
              </div>
            </div>
            {showEditAvatar ? (
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 8,
                    message: "Must be between 8 to 50 characters!",
                  },
                  {
                    max: 50,
                    message: "Must be between 8 to 50 characters!",
                  },
                ]}
                onChange={formik.handleChange}
              >
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="avatar"
                    >
                      Link your new avatar
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="avatar"
                      type="text"
                      name="avatar"
                      defaultValue={userLogin.avatar}
                      placeholder="Joe.png"
                    />
                  </div>
                </div>
              </Form.Item>
            ) : (
              <></>
            )}
            {userLogin.role === "teacher" ? (
              <>
                <div className="flex my-4 rounded-full">
                  <ContactsTwoTone
                    style={{
                      fontSize: "2rem",
                    }}
                    twoToneColor="#FF9D34"
                  />
                  <p className="mx-2 pt-2 uppercase text-gray-700 font-black font-mono">
                    teacher
                  </p>
                </div>
              </>
            ) : userLogin.role !== "admin" ? (
              <>
                <p className="text-gray-600 text-xs italic">
                  Want to be a teacher?{" "}
                  <NavLink to="/upgrade">Request now!</NavLink>
                </p>
              </>
            ) : (
              <></>
            )}
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                  whitespace: true,
                },
                {
                  max: 50,
                  message: "Must be between 6 to 50 characters!",
                },
              ]}
              onChange={formik.handleChange}
            >
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="firstname"
                    type="text"
                    name="firstname"
                    defaultValue={userLogin.firstname}
                    placeholder="Jane"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="lastname"
                    type="text"
                    name="lastname"
                    defaultValue={userLogin.lastname}
                  />
                </div>
              </div>
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 8,
                  message: "Must be between 8 to 50 characters!",
                },
                {
                  max: 50,
                  message: "Must be between 8 to 50 characters!",
                },
              ]}
              onChange={formik.handleChange}
            >
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="username"
                    type="text"
                    name="username"
                    defaultValue={userLogin.username}
                  />
                </div>
              </div>
            </Form.Item>

            <Form.Item
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="example@gmail.com"
                    onChange={formik.handleChange}
                    name="email"
                    defaultValue={userLogin.email}
                  />
                </div>
              </div>
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
              onChange={formik.handleChange}
            >
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="phone_number"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="phone_number"
                    type="number"
                    name="phone_number"
                    placeholder="+84..."
                    defaultValue={userLogin.phone_number}
                  />
                </div>
              </div>
            </Form.Item>
            <Form.Item>
              <div className="relative">
                <button
                  type="submit"
                  className="absolute right-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center bottom-4"
                >
                  Save
                </button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Profile;
