import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  deleteLessonByIdAction,
  getAllLessonsAction,
} from "../../../redux/actions/LessonActions";
import { getCourseDetailAction } from "../../../redux/actions/CourseAction";

export default function Lessons(props) {
  const { lessonsDefault } = useSelector((state) => state.LessonReducer);
  const { courseDetail } = useSelector((state) => state.CourseReducer);

  const dispatch = useDispatch();

  const { courseId } = useParams();
  useEffect(() => {
    dispatch(getCourseDetailAction(courseId));
    dispatch(getAllLessonsAction(courseId));
  }, []);

  const columns = [
    {
      title: "Lesson's ID",
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
              src={courseDetail.banner}
              alt={courseDetail.banner}
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
      title: "Lesson's Name",
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
      title: "Lesson's Video",
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
      title: "Lesson's Description",
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
      title: "Action",
      dataIndex: "id",
      render: (text, lesson) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2  text-2xl"
              to={`/admin/course/${courseId}/lesson/${lesson.id}/edit`}
              onClick={() => {
                localStorage.setItem("lessonParams", JSON.stringify(lesson));
              }}
            >
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>
            <NavLink
              key={2}
              className=" mr-2  text-2xl"
              to={`/course/${courseId}/lesson/${lesson.id}`}
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
                  window.confirm("Are you sure you want to delete this lesson?")
                ) {
                  //Gọi action
                  dispatch(deleteLessonByIdAction(lesson.id, courseDetail.id));
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
      <h1 className="gap-4 text-4xl flex ">
        <span>Course: </span>
        <span className="text-green-600 ">{courseDetail.name}</span>
      </h1>
      <h3 className="text-4xl">Lessons Management</h3>
      <div className="flex justify-between">
        <Button
          className="mb-5"
          onClick={() => {
            localStorage.setItem("courseParams", JSON.stringify(courseDetail));
            props.history.push(`/admin/course/${courseId}/add-new`);
          }}
        >
          Create New Lesson
        </Button>
        <Button
          className="mb-5"
          onClick={() => {
            dispatch(getAllLessonsAction(courseId));
          }}
        >
          Reset
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        rowKey={"id"}
        style={{ marginTop: 20 }}
      />
    </div>
  );
}
