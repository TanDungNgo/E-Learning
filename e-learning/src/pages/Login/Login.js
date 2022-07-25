import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { loginAction } from "../../redux/actions/UserActions";
import { USER_LOGIN, WARNING } from "../../utils/settings/config";

export const Login = (props) => {
  if (localStorage.getItem(USER_LOGIN)) {
    openNotificationWithIcon(WARNING, "You are logged in", "warning");
    props.history.push("/");
  }
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .max(50, "Must be between 6 to 50 characters")
        .min(6, "Must be between 6 to 50 characters")
        .required("Required!!!"),
      password: Yup.string()
        .max(50, "Must be between 6 to 50 characters")
        .min(6, "Must be between 6 to 50 characters")
        .required("Required!!!"),
    }),
    onSubmit: (values) => {
      const body = {
        email: values.email,
        password: values.password,
      };

      dispatch(loginAction(body, props));
    },
  });

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="abc"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="  text-black text-center text-6xl font-bold">
                WELCOME TO KAIWA
              </h1>
              <div className="mb-6 form-group">
                <label className="form-check-label inline-block text-xl  text-black">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Nhập email"
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-600">{formik.errors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label className="form-check-label inline-block text-xl text-black">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Nhập Password"
                  onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="text-red-600">{formik.errors.password}</p>
                )}
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white  transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    defaultChecked
                  />
                  <label className="form-check-label inline-block text-gray-800">
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-500 ease-in-out w-full hover:scale-95"
              >
                Login
              </button>
              <NavLink to="/register">
                <span className="text-blue-600">
                  You don't have an account, Register now?
                </span>
              </NavLink>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <a
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-500 ease-in-out w-full flex justify-center items-center mb-3 hover:text-white  "
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <span className="hover:scale-90 duration-500 flex justify-around items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                  <span>Continue with Facebook</span>
                </span>
              </a>
              <a
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-500 ease-in-out w-full flex justify-center items-center hover:text-white "
                style={{ backgroundColor: "rgb(219 68 55)" }}
                href="#!"
                role="button"
              >
                <span className="hover:scale-90 duration-500 flex justify-around items-center">
                  <i
                    className="fa fa-google mr-2 "
                    style={{ fontSize: "large" }}
                  />
                  <span>Continue with Google</span>
                </span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
