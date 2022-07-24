import React, { Component } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Form, Input, Progress } from "antd";
import storageFirebase from "../../../utils/settings/firebaseConfig";
import { CourseService } from "../../../services/CourseService";
import { NavLink } from "react-router-dom";
import { openNotificationWithIcon } from "../../../components/Notification/Notification";
import { ERROR, SUCCESS } from "../../../utils/settings/config";
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

        try {
          await CourseService.createCourse(data);
          openNotificationWithIcon(
            SUCCESS,
            "Successfully created a new course",
            "success"
          );
        } catch (error) {
          openNotificationWithIcon(
            ERROR,
            "Sorry, something went wrong",
            "error"
          );
          console.log("error>>", error);
        }
      }
    );
  };
  render() {
    return (
      <div>
        <NavLink to="/admin/courses">
          <span className="!text-blue-400 ">back</span>
        </NavLink>
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
            <h3 className="text-4xl font-semibold mx-auto my-5">
              Create New Course
            </h3>

            <Form.Item label="Course's Name">
              <Input
                name="name"
                onChange={this.handleInput}
                value={this.state.name}
                placeholder="Input course' name"
              />
            </Form.Item>
            <Form.Item label="Course's Description">
              <Input
                name="description"
                onChange={this.handleInput}
                value={this.state.description}
                placeholder="Input course' description"
              />
            </Form.Item>

            <Form.Item label="Teacher">
              <Input
                type="number"
                onChange={this.handleInput}
                value={this.state.teacher_id}
                placeholder="Input teacher's code"
                name="teacher_id"
              />
            </Form.Item>

            <Form.Item label="Course's Price">
              <Input
                type="number"
                onChange={this.handleInput}
                value={this.state.price}
                name="price"
                placeholder="Input course' price"
              />
            </Form.Item>

            <Form.Item label="Course's Banner ">
              <input
                type="file"
                onChange={this.handleChangeFile}
                accept="image/*"
                name="url"
                placeholder="Choose file"
              />
              <br />
              {this.state.imgSrc ? (
                <img
                  style={{ width: 250, height: 200 }}
                  src={this.state.imgSrc}
                  alt="..."
                />
              ) : (
                <></>
              )}
            </Form.Item>
            <Progress
              percent={this.state.percent}
              style={{ marginLeft: 205, width: 600 }}
            />
            <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
              <button
                type="submit"
                className="bg-blue-700 text-white py-2 px-6"
              >
                Create new course
              </button>
            </Form.Item>
          </Form>
        </>
      </div>
    );
  }
}

export default AddCourse;
