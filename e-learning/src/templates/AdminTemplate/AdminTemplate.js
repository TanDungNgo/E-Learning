import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Layout, Menu, Breadcrumb, Dropdown, Space } from "antd";
import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { USER_LOGIN } from "../../utils/settings/config";
import { logoutAction } from "../../redux/actions/UserActions";
// import _ from "lodash";

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
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Redirect to="/" />;
  }

  if (userLogin.role !== "ADMIN") {
    alert("Bạn không có quyền truy cập vào trang này !");
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
      <NavLink to="/my-courses" className=" text-black">
        My Courses
      </NavLink>,
      2
    ),
    getItem(
      <NavLink to="/settings" className=" text-black">
        Settings
      </NavLink>,
      3
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
      4
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
          {userLogin.email.substr(0, 1).toUpperCase()}
        </span>
        <NavLink to="/profile" className="!text-white !font-bold">
          {userLogin.email}
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
                <div className="logo">
                  <img
                    src="https://jwchat.org/kaiwa/images/logo-big.png"
                    alt="logo"
                  />
                </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/users">Users</NavLink>
                  </Menu.Item>
                  <SubMenu key="sub1" icon={<FileOutlined />} title="Course">
                    <Menu.Item key="10" icon={<FileOutlined />}>
                      <NavLink to="/admin/courses">Course</NavLink>
                    </Menu.Item>
                    <Menu.Item key="11" icon={<FileOutlined />}>
                      <NavLink to="/admin/courses/add-new">Add new</NavLink>
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
                  Ant Design ©2018 Created by Ant UED
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

// import { Breadcrumb, Layout, Menu } from "antd";
// import { useState } from "react";
// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];

// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   return (
//     <Layout
//       style={{
//         minHeight: "100vh",
//       }}
//     >
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//       >
//         <div className="logo">
//           <img src="https://jwchat.org/kaiwa/images/logo-big.png" alt="logo" />
//         </div>
// <Menu
//   theme="dark"
//   defaultSelectedKeys={["1"]}
//   mode="inline"
//   items={items}
// />
//       </Sider>
//       <Layout className="site-layout">
//         <Header
//           className="site-layout-background"
//           style={{
//             padding: 0,
//           }}
//         />
//         <Content
//           style={{
//             margin: "0 16px",
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: "16px 0",
//             }}
//           >
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//           </Breadcrumb>
//           <div
//             className="site-layout-background"
//             style={{
//               padding: 24,
//               minHeight: 360,
//             }}
//           >
//             Bill is a cat.
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: "center",
//           }}
//         >
//           Ant Design ©2018 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;
