import React, { Fragment, useEffect } from "react";
import { Button, Form, InputNumber, Table } from "antd";
import { useFormik } from "formik";
import { Input } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteLessonByIdAction,
  getAllLessonsAction,
} from "../../../redux/actions/LessonActions";

const lessonsDefault1 = [
  {
    id: 1,
    name: "testing lesson 1",
    description: "nothing",
    course_id: 1,
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-bad49.appspot.com/o/files%2FDandelion%20-%202719.mp4?alt=media&token=7773bee0-b17e-4595-9645-3b8daf6a9cc8",
  },
  {
    id: 2,
    name: "testing lesson 2",
    description: "nothing",
    course_id: 1,
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    id: 3,
    name: "testing lesson 3",
    description: "nothing",
    course_id: 1,
    video_link:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-bad49.appspot.com/o/files%2FDandelion%20-%202719.mp4?alt=media&token=7773bee0-b17e-4595-9645-3b8daf6a9cc8",
  },
  {
    id: 4,
    name: "testing lesson 4",
    description: "nothing",
    course_id: 1,
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
];

export default function Lessons(props) {
  const courseParams = JSON.parse(localStorage.getItem("courseParams"));
  const { lessonsDefault } = useSelector((state) => state.LessonReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLessonsAction(courseParams.id));
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

  const columns = [
    {
      title: "Mã bài học",
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
              src={courseParams.banner}
              alt={courseParams.banner}
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
      title: "Tên bài học",
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
      width: "15%",
    },

    {
      title: "Video bài học",
      dataIndex: "video_link",
      render: (text, lesson) => {
        return (
          <a href={lesson.video_link} target="_blank">
            {lesson.video_link.length > 40
              ? lesson.video_link.substr(0, 40) + " ..."
              : lesson.video_link}
          </a>
        );
      },
      width: "20%",
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
      width: "20%",
    },
    {
      title: "Hành động",
      dataIndex: "id",
      render: (text, lesson) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2  text-2xl"
              to={`/admin/courses/${courseParams.id}/lessons/${lesson.id}/edit`}
              onClick={() => {
                localStorage.setItem("lessonParams", JSON.stringify(lesson));
              }}
            >
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>
            <NavLink
              key={2}
              className=" mr-2  text-2xl"
              to={`/courses/${courseParams.id}/lessons/${lesson.id}`}
              onClick={() => {
                localStorage.setItem("lessonParams", JSON.stringify(lesson));
              }}
            >
              <EyeOutlined style={{ color: "green" }} />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={3}
              className="text-2xl"
              onClick={() => {
                //Gọi action xoá
                if (
                  window.confirm("Bạn có chắc muốn xoá bài học " + lesson.name)
                ) {
                  //Gọi action
                  console.log(lesson.id);
                  dispatch(deleteLessonByIdAction(lesson.id, courseParams.id));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
  ];
  const data = lessonsDefault;

  return (
    <div>
      <h1 className="gap-4 text-4xl">
        <span>Khóa học: </span>
        <span className="text-green-600 ">{courseParams.name}</span>
      </h1>
      <h3 className="text-4xl">Quản lý bài học</h3>
      <div className="flex justify-between">
        <Button
          className="mb-5"
          onClick={() => {
            props.history.push(`/admin/courses/${courseParams.id}/add-new`);
          }}
        >
          Thêm bài học
        </Button>
        <Button
          className="mb-5"
          onClick={() => {
            // dispatch(getAllLessonAction());
          }}
        >
          Reset
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
          placeholder="Nhập tên bài học "
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
