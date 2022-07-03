import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storageFirebase from "../../../utils/settings/firebaseConfig";
import { Form, Input, InputNumber, Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GET_COURSE_URL } from "../../../redux/types/CourseTypes";

export const AddCourse = () => {
  const [imgSrc, setImgSrc] = useState("");

  const { courseUrl } = useSelector((state) => state.CourseReducer);
  const [urlFirebase, setUrlFirebase] = useState("");
  const dispatch = useDispatch();
  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      url: "",
      teacher_id: "",
      price: 0,
    },
    onSubmit: async (values) => {
      const storageRef = ref(storageFirebase, `/files/${urlFirebase.name}`);
      const uploadTask = uploadBytesResumable(storageRef, urlFirebase);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err)
      );
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      await dispatch({
        type: GET_COURSE_URL,
        value: url,
      });
      const body = {
        link: courseUrl,
      };
      // setLink(courseUrl);
      // formik.setFieldValue("url", courseUrl);
      // console.log(values);
      // console.log("courseUrl", courseUrl);
      console.log("body", body);
    },
  });

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleFileAndUpload = async (e) => {
    let file = e.target.files[0];
    setUrlFirebase(file);
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      //Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result); //Hình base 64
      };
    }

    // link = url;
  };

  useEffect(() => {
    // window.scroll(0, 0);
  }, []);
  return (
    <div>
      <>
        <Form
          onSubmitCapture={formik.handleSubmit}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          initialValues={{
            size: "default",
          }}
          size="default"
        >
          <h1>Thêm khóa học mới </h1>

          <Form.Item label="Tên khóa học">
            <Input
              name="name"
              onChange={formik.handleChange}
              placeholder="Nhập tên khóa học"
            />
          </Form.Item>
          <Form.Item label="Mô tả khóa học">
            <Input
              name="description"
              onChange={formik.handleChange}
              placeholder="Nhập mô tả khóa học"
            />
          </Form.Item>

          <Form.Item label="Giáo viên dạy">
            <InputNumber onChange={handleChangeInputNumber("teacher_id")} />
          </Form.Item>

          <Form.Item label="Giá khóa học">
            <InputNumber onChange={handleChangeInputNumber("price")} />
          </Form.Item>

          <Form.Item label="Banner khóa học">
            <input
              type="file"
              onChange={handleFileAndUpload}
              accept="/image/*"
              name="url"
            />
            <br />
            <img style={{ width: 250, height: 200 }} src={imgSrc} alt="..." />
          </Form.Item>
          <Progress percent={percent} style={{ marginLeft: 205, width: 600 }} />
          <Form.Item label="Tác vụ">
            <button type="submit" className="bg-blue-300 text-white p-2">
              Thêm khóa học
            </button>
          </Form.Item>
        </Form>
      </>
    </div>
  );
};
