import React, { Fragment, useEffect } from "react";
import { Button, Form, Table } from "antd";
import { useFormik } from "formik";
import { Input } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getPendingCourseAction } from "../../../redux/actions/CourseAction";

import { CourseService } from "../../../services/CourseService";
import { searchCourseAction } from "../../../redux/actions/SearchAction";
import { ERROR, SUCCESS, WARNING } from "../../../utils/settings/config";
import { openNotificationWithIcon } from "../../../components/Notification/Notification";

export default function PendingCourse(props) {
  const { coursesDefault } = useSelector((state) => state.CourseReducer);
  const { Search } = Input;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPendingCourseAction());
  }, []);

  const formik = useFormik({
    initialValues: {
      searchTerm: "",
    },
    onSubmit: (values) => {
      dispatch(searchCourseAction(values.searchTerm));
    },
  });
  const Accept = async (id) => {
    try {
      await CourseService.AcceptCourse(id);
      openNotificationWithIcon(SUCCESS, " Approved course", "success");
      dispatch(getPendingCourseAction());
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
  const Reject = async (id) => {
    try {
      await CourseService.RejectCourse(id);
      openNotificationWithIcon(
        WARNING,
        "The course is not suitable and has been deleted",
        "warning"
      );
      dispatch(getPendingCourseAction());
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };

  const columns = [
    {
      title: "Course's ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      width: "10%",
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
      width: "20%",
    },
    {
      title: "Teacher Name",
      dataIndex: "teacher_name",
      render: (text, course) => {
        return <Fragment>{course.teacher_name}</Fragment>;
      },
      width: "15%",
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
      width: "30%",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (text, course) => {
        return (
          <Fragment>
            <span
              key={1}
              className=" mr-2  text-2xl"
              onClick={() => {
                Accept(course.id);
              }}
            >
              <CheckCircleFilled style={{ color: "green" }} />
            </span>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this course?")
                ) {
                  //Gọi action
                  Reject(course.id);
                }
              }}
            >
              <CloseCircleFilled style={{ color: "red" }} />
            </span>
          </Fragment>
        );
      },
      width: "10%",
    },
  ];
  const data = coursesDefault;

  return (
    <div>
      <h3 className="text-4xl">Approve Pending Course</h3>
      <div className="flex justify-between">
        <Button
          className="mb-5"
          onClick={() => {
            props.history.push("/admin/courses/add-new");
          }}
        >
          Create New Course
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
