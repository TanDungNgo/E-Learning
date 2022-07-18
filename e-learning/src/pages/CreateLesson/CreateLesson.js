import React, { Component } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Form, Progress } from "antd";
import { LessonService } from "../../services/LessonService";
import storageFirebase from "../../utils/settings/firebaseConfig";
import { LessonDetail } from "../Lesson/LessonDetail";
import { LessonDetailUser } from "../Lesson/LessonDetailUser";
import { DemoLessonDetailUser } from "./DemoLessonDetailUser";

class CreateLesson extends Component {
  state = {
    name: "Lesson 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    course_id: this.props.match.params.id,
    url: "",
    fileVideo: "",
    // courseParams: JSON.parse(localStorage.getItem("courseParams")),
    courseParams: {
      name: "Course 1",
      banner: "https://i.ytimg.com/vi/2Gg6Seob5Mg/maxresdefault.jpg",
    },
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
          // const body = {
          //   course_id: this.state.course_id,
          //   url: this.state.url,
          //   description: this.state.description,
          //   name: this.state.name,
          // };

          // console.log("body", body);
        });
        const data = new FormData();
        data.append("name", this.state.name);
        data.append("description", this.state.description);
        data.append("course_id", this.state.course_id);
        data.append("url", this.state.url);
        console.log(this.state);
        console.log(data);
        const res = await LessonService.createLesson(data);
        console.log("res", res);
      }
    );
  };
  render() {
    return (
      <>
        <div className="mb-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-white text-gray-700 border drop-shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-hard-drive mr-2"
          >
            <line x1="22" y1="12" x2="2" y2="12"></line>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
            <line x1="6" y1="16" x2="6.01" y2="16"></line>
            <line x1="10" y1="16" x2="10.01" y2="16"></line>
          </svg>
          New Lesson
        </div>
        <div className="relative">
          <div className="z-50 h-screen">
            <DemoLessonDetailUser
              courseData={this.state.courseParams}
              lessonData={this.state}
            />
          </div>
          <div className="mt-12 w-full">
            <Form
              onSubmitCapture={this.saveLesson}
              labelCol={{
                span: 20,
              }}
              wrapperCol={{
                span: 20,
              }}
              initialValues={{
                size: "default",
              }}
              size="default"
            >
              <Form.Item>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Link your new name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="name"
                      type="text"
                      name="name"
                      onChange={this.handleInput}
                      value={this.state.name}
                      placeholder="100"
                    />
                  </div>
                </div>
              </Form.Item>
              <Form.Item>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="description"
                    >
                      Link your new description
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="description"
                      type="text"
                      name="description"
                      onChange={this.handleInput}
                      value={this.state.description}
                      placeholder="100"
                    />
                  </div>
                </div>
              </Form.Item>

              <Form.Item>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="url"
                    >
                      Link your new url
                    </label>
                    <input
                      className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100"
                      id="url"
                      type="file"
                      name="url"
                      onChange={this.handleChangeFile}
                      placeholder="100"
                    />
                  </div>
                </div>
              </Form.Item>
              <Form.Item>
                <div className="flex items-center space-x-6">
                  <button
                    type="submit"
                    className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
                  >
                    Create
                  </button>
                  <Progress
                    percent={this.state.percent}
                    style={{ width: 600 }}
                  />
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateLesson;
