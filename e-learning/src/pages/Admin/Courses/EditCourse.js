import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseByIdAction,
  updateCourseAction,
} from "../../../redux/actions/CourseAction";

const courseDetail = {
  id: 1,
  name: "Làm chủ tiếng nhật trong 1 ngày",
  description:
    "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
  banner:
    "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
  teacher_name: "Ngũ Duy Vinh",
  price: "1.000.000",
  listLessons: [
    {
      id: 1,
      name: "Bài 1 là đây",
      description: "Bài 1 là bài 1. Sau khi học xong bài 1 sẽ sang bài 2.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 2,
      name: "Bài 2 là đây",
      description: "Bài 2 là bài 2. Sau khi học xong bài 2 sẽ sang bài 3.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 3,
      name: "Bài 3 là đây",
      description: "Bài 3 là bài 3. Sau khi học xong bài 3 sẽ sang bài 4.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 4,
      name: "Bài 4 là đây",
      description: "Bài 4 là bài 4. Sau khi học xong bài 4 sẽ sang bài 5.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 5,
      name: "Bài 5 là đây",
      description: "Bài 5 là bài 5. Sau khi học xong bài 5 sẽ sang bài 6.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 6,
      name: "Bài 6 là đây",
      description: "Bài 6 là bài 6. Sau khi học xong bài 6 sẽ sang bài 7.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 7,
      name: "Bài 7 là đây",
      description: "Bài 7 là bài 7. Sau khi học xong bài 7 sẽ sang bài 8.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 8,
      name: "Bài 8 là đây",
      description: "Bài 8 là bài 8. Sau khi học xong bài 8 sẽ sang bài 9.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
  ],
};

const EditCourse = (props) => {
  // const { courseDetail } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();
  let { id } = props.match.params;
  useEffect(() => {
    // dispatch(getCourseByIdAction(id));
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
      console.log("body", body);
      console.log("values", values);
      // dispatch(updateCourseAction(body, id));
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
        <h3>Cập nhật thông tin khóa học </h3>
        <Form.Item label="Tên phim">
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

        <Form.Item label="Giá tiền">
          <InputNumber value={formik.values.price} disabled />
        </Form.Item>

        <Form.Item label="Banner">
          <img
            style={{ width: 150, height: 200 }}
            src={courseDetail.banner}
            alt={courseDetail.name}
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

export default EditCourse;
