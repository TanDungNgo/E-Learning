import React, { Component } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Form, Input, Progress } from "antd";
import storageFirebase from "../../../utils/settings/firebaseConfig";

class AddLesson extends Component {
  state = {
    name: "",
    description: "",
    course_id: this.props.match.params.id,
    url: "",
    fileVideo: "",
    courseParams: JSON.parse(localStorage.getItem("courseParams")),
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
      fileVideo: file,
    });
  };
  // handleUpload = () => {};
  saveLesson = async (e) => {
    e.preventDefault();
    const storageRef = ref(
      storageFirebase,
      `/files/${this.state.fileVideo.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, this.state.fileVideo);

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
          // const body = {
          //   course_id: this.state.course_id,
          //   url: this.state.url,
          //   description: this.state.description,
          //   name: this.state.name,
          // };

          // console.log("body", body);

          const data = new FormData();
          data.append("name", this.state.name);
          data.append("description", this.state.description);
          data.append("course_id", this.state.course_id);
          data.append("url", this.state.url);
          // const res = await LessonService.createLesson("/add-lesson", data);
          // console.log("res", res);
        });
      }
    );
  };
  render() {
    return (
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-lg">Thêm bài học mới </h1>
          <h1 className="flex justify-between items-center">
            <span>Khóa học:</span>
            <span className="font-bold">{this.state.courseParams.name}</span>
          </h1>
          <img
            src={this.state.courseParams.banner}
            alt={this.state.courseParams.name}
            style={{ width: 600, height: 450 }}
          />
        </div>
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
          <Form.Item label="Tên bài học">
            <Input
              name="name"
              onChange={this.handleInput}
              value={this.state.name}
              placeholder="Nhập tên bài học"
            />
          </Form.Item>
          <Form.Item label="Mô tả bài học">
            <Input
              name="description"
              onChange={this.handleInput}
              value={this.state.description}
              placeholder="Nhập mô tả bài học"
            />
          </Form.Item>

          <Form.Item label="Video bài học">
            <input type="file" onChange={this.handleChangeFile} name="url" />
            <br />
          </Form.Item>
          <Progress
            percent={this.state.percent}
            style={{ marginLeft: 255, width: 600 }}
          />
          <Form.Item label="Tác vụ">
            <button type="submit" className="bg-blue-300 text-white p-2">
              Thêm bài học
            </button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddLesson;
