import React, { Fragment, useEffect } from "react";
import { Button, Form, InputNumber, Table } from "antd";
import { useFormik } from "formik";
import { Input } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteCourseByIdAction,
  getPendingCourseAction,
} from "../../../redux/actions/CourseAction";

import { CourseService } from "../../../services/CourseService";

export default function PendingCourse(props) {
  const { coursesDefault } = useSelector((state) => state.CourseReducer);

  console.log("coursesDefault", coursesDefault);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPendingCourseAction());
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      mincourseEvaluate: 0,
      maxcourseEvaluate: 10,
    },
    // onSubmit: (values) => {
    //   dispatch(
    //     getAllcourseAction(
    //       values.name,
    //       values.mincourseEvaluate,
    //       values.maxcourseEvaluate
    //     )
    //   );
    // },
    onReset: (values) => {},
  });
  const Accept = async (id) => {
    try {
      const res = await CourseService.AcceptCourse(id).then((res) => {
        console.log("res", res);
      });
      dispatch(getPendingCourseAction());
    } catch (error) {
      console.log("error>>", error);
    }
  }
  const Reject = async (id) => {
    try {
      const res = await CourseService.RejectCourse(id).then((res) => {
        console.log("res", res);
      });
      dispatch(getPendingCourseAction());
    } catch (error) {
      console.log("error>>", error);
    }
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      width: "5%",
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
      title: "Tên khóa học",
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
      title: "Teacher Name",
      dataIndex: "teacher_name",
      render: (text, course) => {
        return (
          <Fragment>
              {course.teacher_name}
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Mô tả",
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
      title: "Phê duyệt",
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
              <CheckCircleFilled style={{color: "green"}}/>
            </span>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                Reject(course.id);
              }}
            >
              <CloseCircleFilled style={{ color: "red" }}/>
            </span>
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
      <h3 className="text-4xl">Approve Pending Course</h3>
      <div className="flex justify-between">
        <Button
          className="mb-5"
          onClick={() => {
            props.history.push("/admin/courses/add-new");
          }}
        >
          Thêm khóa học
        </Button>
        <Button
          className="mb-5"
          onClick={() => {
            // dispatch(getAllCoursesAction());
          }}
        >
          Accept All
        </Button>
        <Button
          className="mb-5"
          onClick={() => {
            // dispatch(getAllCoursesAction());
          }}
        >
          Reject All
        </Button>
      </div>

      <Form onSubmitCapture={formik.handleSubmit}>
        <Input
          style={{ width: "45%" }}
          onChange={formik.handleChange}
          placeholder="Nhập tên giáo viên"
        />
        <Input
          name="name"
          onChange={formik.handleChange}
          placeholder="Nhập tên khóa học "
          style={{
            width: "45%",
          }}
        />
        <button
          style={{
            width: "10%",
          }}
          className="p-1 bg-blue-500 rounded-sm"
          type="submit"
        >
          Search
        </button>
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

