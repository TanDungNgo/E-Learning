import React, { useEffect } from "react";
import { Form, Input, InputNumber } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseDetailAction,
  updateCourseAction,
} from "../../../redux/actions/CourseAction";

const EditCourse = (props) => {
  const { courseDetail } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();
  let { id } = props.match.params;
  useEffect(() => {
    dispatch(getCourseDetailAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: courseDetail.name,
      description: courseDetail.description,
      banner: courseDetail.banner,
      price: courseDetail.price,
    },

    onSubmit: (values) => {
      const body = {
        name: values.name,
        description: values.description,
      };
      dispatch(updateCourseAction(body, id));
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
        <h3 className="text-4xl font-semibold mx-auto my-5">Update Course </h3>
        <Form.Item label="Course's Name">
          <Input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Input course's name"
          />
        </Form.Item>

        <Form.Item label="Course's Description">
          <Input
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            placeholder="Input course's description"
          />
        </Form.Item>

        <Form.Item label="Course's Price">
          <InputNumber value={formik.values.price} disabled />
        </Form.Item>

        <Form.Item label="Course's Banner">
          <img
            style={{ width: 300, height: 200 }}
            src={courseDetail.banner}
            alt={courseDetail.name}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
          <button type="submit" className="bg-blue-700 text-white py-2 px-6">
            Update
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditCourse;
