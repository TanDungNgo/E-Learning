import React, { useState } from "react";
import { useFormik } from "formik";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Form, Input, Progress } from "antd";
import storageFirebase from "../../utils/settings/firebaseConfig";

export const AddLesson = (props) => {
  const [urlFirebase, setUrlFirebase] = useState("");
  const [link, setLink] = useState("");
  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  const handleChangeVideo = (e) => {
    let file = e.target.files[0];
    setUrlFirebase(file);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      course_id: props.match.params.id,
      url: "",
    },
    onSubmit: (values) => {
      console.log("urlFirebase", urlFirebase);

      const storageRef = ref(storageFirebase, `/files/${urlFirebase.name}`);

      const uploadTask = uploadBytesResumable(storageRef, urlFirebase);

      // setIsLoading(true);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          console.log("url", link);
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setLink(url);
            console.log("link", link);
            formik.setFieldValue("url", link);
            // Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
            // const formData = new FormData();
            // formData.append("name", values.name);
            // formData.append("description", values.description);
            // formData.append("course_id", values.course_id);
            // formData.append("url", values.url);
            // //Gọi api gửi các giá trị formdata về backend xử lý
            //   dispatch(createLessonAction(formData));
            console.log("values", values);
          });
        }
      );
    },
  });

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
          <h1>Thêm bài học mới </h1>

          <Form.Item label="Tên bài học">
            <Input
              name="name"
              onChange={formik.handleChange}
              placeholder="Nhập tên bài học"
            />
          </Form.Item>
          <Form.Item label="Mô tả bài học">
            <Input
              name="description"
              onChange={formik.handleChange}
              placeholder="Nhập mô tả bài học"
            />
          </Form.Item>

          <Form.Item label="Video bài giảng">
            <input type="file" onChange={handleChangeVideo} name="url" />
            <br />
          </Form.Item>
          <Progress percent={percent} style={{ marginLeft: 255, width: 600 }} />

          <Form.Item label="Tác vụ">
            <button type="submit" className="bg-blue-300 text-white p-2">
              Thêm bài học
            </button>
          </Form.Item>
        </Form>
      </>
    </div>
  );
};
