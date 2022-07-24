import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import {
  getLessonByIdAction,
  updateLessonAction,
} from "../../../redux/actions/LessonActions";
import { NavLink } from "react-router-dom";

const EditLesson = (props) => {
  const { lesson } = useSelector((state) => state.LessonReducer);
  const dispatch = useDispatch();
  let { lessonId, courseId } = props.match.params;
  useEffect(() => {
    dispatch(getLessonByIdAction(lessonId));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: lesson.name,
      description: lesson.description,
      course_id: courseId,
    },

    onSubmit: (values) => {
      const body = {
        name: values.name,
        description: values.description,
        course_id: courseId,
      };

      dispatch(updateLessonAction(body, lessonId, courseId));
    },
  });

  return (
    <>
      <NavLink to={`/admin/courses/${courseId}/lessons`}>
        <span className="!text-blue-400 ">back</span>
      </NavLink>
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
        <h3 className="text-4xl font-semibold mx-auto my-5">Update Lesson</h3>
        <Form.Item label="Lesson's Name">
          <Input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Input lesson's name"
          />
        </Form.Item>
        <Form.Item label="Lesson's Description">
          <Input
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            placeholder="Input lesson's description"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
          <button type="submit" className="bg-blue-700 text-white py-2 px-6">
            Update Lesson
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditLesson;
