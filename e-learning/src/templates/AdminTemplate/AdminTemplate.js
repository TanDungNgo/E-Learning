import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Layout, Menu, Breadcrumb, Dropdown, Space } from "antd";
import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { logoE_LearningVuong, USER_LOGIN } from "../../utils/settings/config";
import { logoutAction } from "../../redux/actions/UserActions";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = (props) => {
  const dispatch = useDispatch();
  const { Component, ...restProps } = props;
  const { userLogin } = useSelector((state) => state.UserReducer);

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Please Login !");
    return <Redirect to="/" />;
  }

  if (userLogin.role !== "admin") {
    alert("You can not access this page!");
    return <Redirect to="/" />;
  }

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem(
      <NavLink to="/profile" className=" text-black">
        Profile
      </NavLink>,
      1
    ),

    getItem(
      <NavLink
        className="font-bold hover:!text-red-600 duration-500"
        to="/login"
        onClick={() => {
          dispatch(logoutAction());
        }}
      >
        LOGOUT
      </NavLink>,
      2
    ),
  ];

  const dropdownHeader = () => (
    <Dropdown
      overlay={<Menu theme="light" defaultSelectedKeys={["1"]} items={items} />}
    >
      <Space>
        <span
          style={{
            width: 50,
            height: 50,
          }}
          className="text-2xl ml-5 rounded-full bg-red-200 flex justify-center items-center"
        >
          {userLogin.username.substr(0, 1).toUpperCase()}
        </span>
        <NavLink to="/profile">
          <span className="!text-white !font-bold"> {userLogin.username}</span>
        </NavLink>
      </Space>
    </Dropdown>
  );

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div
                  className="logo cursor-pointer"
                  onClick={() => {
                    propsRoute.history.push("/");
                  }}
                >
                  <img src={logoE_LearningVuong} alt="logo" />
                </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <SubMenu key="sub0" icon={<UserOutlined />} title="User">
                    <Menu.Item key="1" icon={<UserOutlined />}>
                      <NavLink to="/admin/users">Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                      <NavLink to="/admin/user-request">
                        Teacher Request
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub1" icon={<FileOutlined />} title="Course">
                    <Menu.Item key="10" icon={<FileOutlined />}>
                      <NavLink to="/admin/courses">Course</NavLink>
                    </Menu.Item>
                    <Menu.Item key="11" icon={<FileOutlined />}>
                      <NavLink to="/admin/courses/add-new">Add new</NavLink>
                    </Menu.Item>
                    <Menu.Item key="12" icon={<FileOutlined />}>
                      <NavLink to="/admin/pending-courses">
                        Pending Course
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                >
                  <div className="text-right pr-5">{dropdownHeader()}</div>
                </Header>
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: "85vh" }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  Sun* ©2022 Created by 500 Server Error
                </Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};

export default AdminTemplate;
