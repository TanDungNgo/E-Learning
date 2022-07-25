import React from "react";
import { EditFilled, ContactsTwoTone } from "@ant-design/icons";

import "./Profile.css";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { requestToBecomeTeacher } from "../../redux/actions/UserActions";
import { Form } from "antd";
import { USER_LOGIN } from "../../utils/settings/config";

const Upgrade = (props) => {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      ...userLogin,
      role: "teacher",
      user_id: userLogin.id,
    },
    onSubmit: (values) => {
      dispatch(requestToBecomeTeacher(values, props));
    },
  });

  return (
    <>
      {userLogin.role === "teacher" ? (
        <>
          <div className="flex my-4">
            <ContactsTwoTone
              style={{
                fontSize: "2rem",
              }}
            />
            <p className="mx-2 pt-2 uppercase text-gray-700 font-black font-mono">
              TEACHER
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="inline-block px-40 w-full">
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
              <div style={{ border: "" }} className="w-full">
                <div className="flex justify-center">
                  <div className="inline-block border-2 border-sky-500 rounded-full mb-12 relative">
                    <img
                      className="rounded-full w-32 h-32"
                      src={userLogin.avatar}
                      alt="abc"
                    />
                    <EditFilled
                      className="absolute drop-shadow-lg"
                      style={{
                        color: "white",
                        fontSize: "2rem",
                        position: "absolute",
                        top: "80%",
                      }}
                    />
                  </div>
                </div>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Need a video!",
                    },
                  ]}
                  onChange={formik.handleChange}
                >
                  <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="video_link"
                      >
                        Link to your self-introduction video
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="video_link"
                        type="text"
                        name="video_link"
                        placeholder="www..."
                      />
                      {/* <p className="text-gray-600 text-xs italic">We don't required a confirm password so carefull with your new one</p> */}
                    </div>
                  </div>
                </Form.Item>
                <Form.Item>
                  <div className="relative">
                    <button
                      type="submit"
                      className="absolute right-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Send
                    </button>
                  </div>
                </Form.Item>
              </div>
            </Form>
          </div>
        </>
      )}
    </>
  );
};

export default Upgrade;
