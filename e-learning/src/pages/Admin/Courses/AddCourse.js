import React, { Component } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Form, Input, Progress } from "antd";
import storageFirebase from "../../../utils/settings/firebaseConfig";
import { CourseService } from "../../../services/CourseService";
// import axios from "axios";

class AddCourse extends Component {
  state = {
    name: "",
    description: "",
    course_id: this.props.match.params.id,
    fileImage: "",
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
      fileImage: file,
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
      `/files/${this.state.fileImage.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, this.state.fileImage);

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

      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        this.setState({
          url: url,
        });

        const data = new FormData();
        data.append("name", this.state.name);
        data.append("description", this.state.description);
        data.append("url", this.state.url);
        data.append("teacher_id", this.state.teacher_id);
        data.append("price", this.state.price);
        // const res = await axios.post("/courses", data);

        // const result = await CourseService.createCourse(data);
        // console.log("result", result);
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
                type="number"
                onChange={this.handleInput}
                value={this.state.teacher_id}
                name="teacher_id"
              />
            </Form.Item>

            <Form.Item label="Giá khóa học">
              <Input
                type="number"
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
