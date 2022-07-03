import React, { Component, useEffect, useState } from "react";
import { useFormik } from "formik";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storageFirebase from "../../../utils/settings/firebaseConfig";
import { Form, Input, Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GET_COURSE_URL } from "../../../redux/types/CourseTypes";

class AddCourse extends Component {
  state = {
    name: "",
    description: "",
    course_id: this.props.match.params.id,
    fileImgae: "",
    teacher_id: "",
    price: "",
    url: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleChangeFile = (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    this.setState({
      fileImgae: file,
    });
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      //Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        this.setState({ imgSrc: e.target.result }); //Hình base 64
      };
    }
  };
  // handleUpload = () => {};
  saveLesson = async (e) => {
    e.preventDefault();
    const storageRef = ref(
      storageFirebase,
      `/files/${this.state.fileImgae.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, this.state.fileImgae);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        this.setState({
          percent: percent,
        });
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          this.setState({
            url: url,
          });
          console.log(this.state.url);
          const body = {
            teacher_id: this.state.teacher_id,
            banner: this.state.url,
            price: this.state.price,
            description: this.state.description,
            name: this.state.name,
          };

          
          // await Cour.post("http://127.0.0.1:8000/api/add-lesson", data);

          
    // const data = new FormData();
    // data.append("name", this.state.name);
    // data.append("description", this.state.description);
    // data.append("course_id", this.state.course_id);
    // data.append("url", this.state.url);
    // const res = await axios.post("http://127.0.0.1:8000/api/add-lesson", data);
    // if (res.data.status === 200) {
    //   this.props.history.push(`/show-course/${this.state.course_id}`);
    //   this.setState({
    //     name: "",
    //     description: "",
    //   });
    // } else {
    //   this.setState({
    //     error_list: res.data.validate_err,
    //   });
    // }


        });
      }
    );


  };
  render() {
    return (
      <div>
        <>
          <Form
            onSubmitCapture={this.saveLesson}
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
                onChange={this.handleInput}
                value={this.state.name}
                placeholder="Nhập tên khóa học"
              />
            </Form.Item>
            <Form.Item label="Mô tả khóa học">
              <Input
                name="description"
                onChange={this.handleInput}
                value={this.state.description}
                placeholder="Nhập mô tả khóa học"
              />
            </Form.Item>

            <Form.Item label="Giáo viên dạy">
              <Input
                onChange={this.handleInput}
                value={this.state.teacher_id}
                name="teacher_id"
              />
            </Form.Item>

            <Form.Item label="Giá khóa học">
              <Input
                onChange={this.handleInput}
                value={this.state.price}
                name="price"
              />
            </Form.Item>

            <Form.Item label="Banner khóa học">
              <input
                type="file"
                onChange={this.handleChangeFile}
                accept="/image/*"
                name="url"
              />
              <br />
              <img
                style={{ width: 250, height: 200 }}
                src={this.state.imgSrc}
                alt="..."
              />
            </Form.Item>
            <Progress
              percent={this.state.percent}
              style={{ marginLeft: 205, width: 600 }}
            />
            <Form.Item label="Tác vụ">
              <button type="submit" className="bg-blue-300 text-white p-2">
                Thêm khóa học
              </button>
            </Form.Item>
          </Form>
        </>
      </div>
    );
  }
}

export default AddCourse;
