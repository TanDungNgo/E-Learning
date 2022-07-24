import React, { Fragment, useEffect } from "react";
import { Button, Form, Table, Input } from "antd";
import { useFormik } from "formik";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteCourseByIdAction,
  getAllCoursesAction,
} from "../../../redux/actions/CourseAction";
import { searchCourseAction } from "../../../redux/actions/SearchAction";

export default function Course(props) {
  const { coursesDefault } = useSelector((state) => state.CourseReducer);
  const { Search } = Input;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoursesAction());
  }, []);

  const formik = useFormik({
    initialValues: {
      searchTerm: "",
    },

    onSubmit: (values) => {
      dispatch(searchCourseAction(values.searchTerm));
    },
  });

  const columns = [
    {
      title: "Course's ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Banner",
      dataIndex: "banner",
      render: (text, course, index) => {
        return (
          <Fragment>
            <img
              src={course.banner}
              alt={course.banner}
              style={{ width: 100, height: 80 }}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Course's Name",
      dataIndex: "name",
      sorter: (a, b) => {
        let nameA = a.name.toLowerCase().trim();
        let nameB = b.name.toLowerCase().trim();
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Course's Description",
      dataIndex: "description",

      render: (text, course) => {
        return (
          <Fragment>
            {course.description.length > 80
              ? course.description.substr(0, 80) + " ..."
              : course.description}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Actions",
      dataIndex: "id",
      render: (text, course) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2  text-2xl"
              to={`/admin/courses/${course.id}`}
              onClick={() => {
                localStorage.setItem("courseParams", JSON.stringify(course));
              }}
            >
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                //Gọi action xoá
                if (
                  window.confirm("Are you sure you want to delete this course?")
                ) {
                  //Gọi action
                  dispatch(deleteCourseByIdAction(course.id));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>

            <NavLink
              key={3}
              className=" mr-2 text-2xl"
              to={`/admin/courses/${course.id}/lessons`}
              onClick={() => {
                localStorage.setItem("courseParams", JSON.stringify(course));
              }}
            >
              <CalendarOutlined style={{ color: "green" }} />
            </NavLink>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = coursesDefault;

  return (
    <div>
      <h3 className="text-4xl">Courses Management</h3>
      <div className="flex justify-between">
        <Button
          className="mb-5"
          onClick={() => {
            props.history.push("/admin/courses/add-new");
          }}
        >
          Create New Course
        </Button>
        <Button
          className="mb-5"
          onClick={() => {
            dispatch(getAllCoursesAction());
          }}
        >
          Reset
        </Button>
      </div>

      <Form onSubmitCapture={formik.handleSubmit}>
        <Search
          placeholder="Input course'name"
          enterButton="Search"
          size="large"
          name="searchTerm"
          onChange={formik.handleChange}
          onSearch={formik.handleSubmit}
        />
      </Form>

      <Table
        columns={columns}
        dataSource={data}
        rowKey={"id"}
        style={{ marginTop: 20 }}
      />
    </div>
  );
}
