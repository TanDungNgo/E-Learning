import React from 'react'
import { Footer } from '../../templates/HomeTemplate/Footer/Footer'
import { Header } from '../../templates/HomeTemplate/Header/Header'
import { NavLink } from "react-router-dom";
import { BellFilled, SettingFilled, CreditCardFilled, EditFilled, ContactsTwoTone } from "@ant-design/icons";

import './Profile.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { registerAction, updateUserAction } from '../../redux/actions/UserActions';
import { Checkbox, Form, Input, Select } from "antd";
import { USER_LOGIN } from '../../utils/settings/config';
import SideBar from '../../templates/ProfileTemplate/SideBar/SideBar';

const Profile = (props) => {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  const [showEditAvatar,setShowEditAvatar] = useState(false)
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
        ...userLogin
    },
    onSubmit: (values) => {
      console.log("values", values);
      // alert("hello");
      dispatch(updateUserAction(values, props));
    },
  });

  return (
    <>
        <div class="inline-block px-40 w-full">
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
                <div className='flex justify-center'>
                        <div className='inline-block border-2 border-sky-500 rounded-full mb-12 relative'>
                            <img 
                                class="rounded-full w-32 h-32"
                                src={userLogin.avatar || 'https://nhathauxaydung24h.com/wp-content/uploads/2022/01/avatar-ngau-loi.jpg'}
                            />
                            <EditFilled className='absolute drop-shadow-lg'  style={{
                                                                    color: 'white',
                                                                    fontSize: '2rem',
                                                                    position: "absolute",
                                                                    top: "80%",
                                                                    
                                                                    }}
                                                                    onClick={()=> {
                                                                        setShowEditAvatar(!showEditAvatar);
                                                                    }}
                                                                    />
                        </div>
                </div>
                {
                    showEditAvatar
                    ?
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
            <div class="flex flex-wrap -mx-3 mb-3">
                <div class="w-full px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="avatar">
                        Link your new avatar
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="avatar"
                        type="text"
                        name='avatar'
                        defaultValue={userLogin.avatar}
                        placeholder="Joemama"/>
                    {/* <p class="text-gray-600 text-xs italic">We don't required a confirm password so carefull with your new one</p> */}
                </div>
            </div>

                </Form.Item>
                    :
                    <></>
                }
                {
                    userLogin.role == "teacher" 
                    ? 
                    <>
                        <div className='flex my-4'>
                            <ContactsTwoTone style={{
                                                                fontSize: '2rem',                                                            
                                                                }}/>
                            <p class="mx-2 pt-2 uppercase text-gray-700 font-black font-mono">TEACHER</p>
                        </div>
                    </> 
                    :
                    <>
                    <p class="text-gray-600 text-xs italic">Want to be a teacher? <NavLink to="/upgrade">Request now!</NavLink></p>
                    </>
                }
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
            <div class="flex flex-wrap -mx-3 mb-3">
                <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="firstname">
                        First Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="firstname"
                        type="text"
                        name='firstname'
                        defaultValue={userLogin.firstname}
                        placeholder="Jane"/>
                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> border-red-500*/}
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="lastname">
                        Last Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="lastname"
                        type="text"
                        name='lastname'
                        defaultValue={userLogin.lastname}
                        placeholder="Doe"/>
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
            <div class="flex flex-wrap -mx-3 mb-3">
                <div class="w-full px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="username">
                        Username
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="username"
                        type="text"
                        name='username'
                        defaultValue={userLogin.username}
                        placeholder="Joemama"/>
                    {/* <p class="text-gray-600 text-xs italic">We don't required a confirm password so carefull with your new one</p> */}
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
                <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-email">
                            Email
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            placeholder=""
                            onChange={formik.handleChange}
                            name="email"
                            defaultValue={userLogin.email}
                            />
                        {/* <p class="text-gray-600 text-xs italic">We don't required a confirm password so carefull with your new one</p> */}
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
            <div class="flex flex-wrap -mx-3 mb-3">
                <div class="w-full px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="phone_number">
                        Phone
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="phone_number"
                        type="number"
                        name="phone_number"
                        placeholder="+84..."
                        defaultValue={userLogin.phone_number}
                        />
                    {/* <p class="text-gray-600 text-xs italic">We don't required a confirm password so carefull with your new one</p> */}
                </div>
            </div>

                </Form.Item>
                <Form.Item>
                    <div className='relative'>
                        <button type="submit" className="absolute right-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Save
                        </button>
                    </div>
                </Form.Item>
            </div>
            </Form>
        </div>
    </>
  )
}

export default Profile