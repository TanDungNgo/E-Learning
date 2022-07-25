import React, { Component } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Form, Input, Progress } from "antd";
import storageFirebase from "../../../utils/settings/firebaseConfig";
import { LessonService } from "../../../services/LessonService";
import { NavLink } from "react-router-dom";

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
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          this.setState({
            url: url,
          });
        });
        const data = new FormData();
        data.append("name", this.state.name);
        data.append("description", this.state.description);
        data.append("course_id", this.state.course_id);
        data.append("url", this.state.url);
        const res = await LessonService.createLesson(data);
        console.log("res", res);
      }
    );
  };
  render() {
    return (
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-lg">Create New Lesson </h1>
          <h1 className="flex justify-between items-center">
            <span>Course:</span>
            <span className="font-bold">{this.state.courseParams.name}</span>
          </h1>
          <img
            src={this.state.courseParams.banner}
            alt={this.state.courseParams.name}
            style={{ width: 500, height: 350 }}
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
          <Form.Item label="Lesson's Name">
            <Input
              name="name"
              onChange={this.handleInput}
              value={this.state.name}
              placeholder="Input lesson's name"
            />
          </Form.Item>
          <Form.Item label="Lesson's Description">
            <Input
              name="description"
              onChange={this.handleInput}
              value={this.state.description}
              placeholder="Input lesson's description"
            />
          </Form.Item>

          <Form.Item label="Lesson's Video">
            <input type="file" onChange={this.handleChangeFile} name="url" />
            <br />
          </Form.Item>
          <Progress
            percent={this.state.percent}
            style={{ marginLeft: 120, width: 600 }}
          />
          <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
            <button type="submit" className="bg-blue-700 text-white py-2 px-6">
              Create New Course
            </button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddLesson;
