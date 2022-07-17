import { Checkbox, Form, Input } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerAction } from "../../redux/actions/UserActions";
import { Footer } from "./../../templates/HomeTemplate/Footer/Footer";

const bgAuth =
  "https://luanvanviet.com/wp-content/uploads/2020/03/hinh-anh-quan-ly-giao-duc-la-gi-2.jpg";

const Register = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      phone_number: "",
      password: "",
      passwordAgain: "",
    },
    onSubmit: (values) => {
      dispatch(registerAction(values, props));
    },
  });

  return (
    <>
      <div
        className="w-full "
        style={{
          height: "100vh",
          backgroundImage: `url(${bgAuth}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            width: 900,
            height: "fit-content",
            borderRadius: 6,
          }}
        >
          <h1 className="mx-auto text-5xl text-center my-5">
            Thông tin đăng ký
          </h1>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            onSubmitCapture={formik.handleSubmit}
          >
            <div className="p-10">
              <Form.Item label="Fullname" required style={{ marginBottom: 0 }}>
                <Form.Item
                  name="firstname"
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
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                    marginBottom: 10,
                  }}
                >
                  <Input
                    name="firstname"
                    placeholder="Input your first name"
                    onChange={formik.handleChange}
                  />
                </Form.Item>
                <Form.Item
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                      whitespace: true,
                    },
                    {
                      max: 50,
                      message: "Must be between 6 to 50 characters!",
                    },
                  ]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                    margin: "0 0 0 16px",
                    marginBottom: 10,
                  }}
                >
                  <Input
                    name="lastname"
                    placeholder="Input your last name"
                    onChange={formik.handleChange}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item
                name="username"
                label="Username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                    whitespace: true,
                  },
                  {
                    min: 6,
                    message: "Must be between 6 to 50 characters!",
                  },
                  {
                    max: 50,
                    message: "Must be between 6 to 50 characters!",
                  },
                ]}
                style={{ marginBottom: 10 }}
              >
                <Input
                  name="username"
                  onChange={formik.handleChange}
                  placeholder="Input your username"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
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
                hasFeedback
                onChange={formik.handleChange}
              >
                <Input.Password
                  placeholder="Input your password"
                  name="password"
                />
              </Form.Item>

              <Form.Item
                name="passwordAgain"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  {
                    min: 8,
                    message: "Must be between 8 to 50 characters!",
                  },
                  {
                    max: 50,
                    message: "Must be between 8 to 50 characters!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
                style={{ marginBottom: 10 }}
                onChange={formik.handleChange}
              >
                <Input.Password
                  placeholder="Input your confirm password"
                  name="passwordAgain"
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
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
                style={{ marginBottom: 10 }}
              >
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  placeholder="Input your email"
                />
              </Form.Item>

              <Form.Item
                name="phone_number"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
                onChange={formik.handleChange}
              >
                <Input
                  name="phone_number"
                  placeholder="Input your number phone"
                />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
                style={{ marginLeft: 140 }}
              >
                <Checkbox>
                  I have read the <a href="abc">agreement</a>
                </Checkbox>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
                <button
                  type="submit"
                  className="bg-green-600 w-full rounded-none p-2 text-white font-bold border-none"
                >
                  Register
                </button>
                <NavLink to="/login" className="text-xs">
                  Bạn đã có tài khoản?
                </NavLink>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
