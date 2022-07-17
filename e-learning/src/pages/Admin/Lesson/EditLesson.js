import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import {
  getLessonByIdAction,
  updateLessonAction,
} from "../../../redux/actions/LessonActions";

const EditLesson = (props) => {
  const lessonParams = JSON.parse(localStorage.getItem("lessonParams"));
  // const { lesson } = useSelector((state) => state.LessonReducer);
  // const dispatch = useDispatch();
  let { lessonId, courseId } = props.match.params;
  // useEffect(() => {
  //   dispatch(getLessonByIdAction(lessonId));
  // }, []);

  const formik = useFormik({
    enableReinitialize: true,
    // initialValues: {
    //   name: lesson.name,
    //   description: lesson.description,
    //   course_id: courseId,
    // },

    initialValues: {
      name: lessonParams.name,
      description: lessonParams.description,
      course_id: courseId,
    },

    onSubmit: (values) => {
      const body = {
        name: values.name,
        description: values.description,
        course_id: courseId,
      };

      alert("name : " + body.name);
      // dispatch(updateLessonAction(body, lessonId, courseId));
    },
  });

  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "default",
        }}
        size="default"
      >
        <h3>Cập nhật thông tin bài học </h3>
        <Form.Item label="Tên bài học">
          <Input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Form.Item>

        <Form.Item label="Mô tả">
          <Input
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Form.Item>

        <Form.Item label="Button">
          <button type="submit" className="bg-blue-300 text-white p-2">
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditLesson;
