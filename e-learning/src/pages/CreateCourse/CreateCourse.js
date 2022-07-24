import React, { Component } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Form, Progress } from "antd";
import { CourseService } from "../../services/CourseService";
import storageFirebase from "../../utils/settings/firebaseConfig";
import DemoCourseDetailUser from "./DemoCourseDetailUser";
import { USER_LOGIN } from "../../utils/settings/config";
// import axios from "axios";

class CreateCourse extends Component {
  userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

  state = {
    name: "",
    description: "",
    course_id: this.props.match.params.id,
    fileImage: "",
    teacher_id: this.userLogin.id,
    price: "50",
    url: "",
    showName: false,
    showDes: false,
    showImg: false,
  };

  someFunction = () => {
    console.log("click");
  };

  toggleName = () => {
    console.log("Name:");
    this.setState({ showName: !this.state.showName });
  };

  toggleDescription = () => {
    console.log("Des:");
    this.setState({ showDes: !this.state.showDes });
  };

  toggleImg = () => {
    console.log("Img:");
    this.setState({ showImg: !this.state.showImg });
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

        await CourseService.createCourse(data);
      }
    );
  };

  render() {
    return (
      <>
        <div className="mb-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-white text-gray-700 border drop-shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          New Course
        </div>
        <div className="relative h-80 mb-5">
          <DemoCourseDetailUser
            DemoData
            toggleImg={this.toggleImg}
            toggleName={this.toggleName}
            toggleDescription={this.toggleDescription}
            name={this.state.name}
            description={this.state.description}
            imgSrc={this.state.imgSrc}
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
          {this.state.showName && (
            <Form.Item>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="name"
                  >
                    Course Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    name="name"
                    onChange={this.handleInput}
                    value={this.state.name}
                    placeholder="Name for your new course"
                  />
                  {/* <p className="text-gray-600 text-xs italic">We don't required a confirm password so carefull with your new one</p> */}
                </div>
              </div>
            </Form.Item>
          )}
          {this.state.showDes && (
            <Form.Item>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="description"
                  >
                    Some description about your course
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="description"
                    type="text"
                    name="description"
                    onChange={this.handleInput}
                    value={this.state.description}
                    placeholder="description 1; description 2; description 3..."
                  />
                  {/* <p className="text-gray-600 text-xs italic">We don't required a confirm password so carefull with your new one</p> */}
                </div>
              </div>
            </Form.Item>
          )}
          {false && (
            <Form.Item>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="price"
                  >
                    Price of the course
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="price"
                    type="number"
                    name="price"
                    onChange={this.handleInput}
                    value={this.state.price}
                    placeholder="100"
                  />
                  {/* <p className="text-gray-600 text-xs italic">We don't required a confirm password so carefull with your new one</p> */}
                </div>
              </div>
            </Form.Item>
          )}

          {this.state.showImg && (
            <Form.Item>
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  {this.state.imgSrc ? (
                    <img
                      style={{ width: 100, height: 100 }}
                      src={this.state.imgSrc}
                      alt="..."
                    />
                  ) : (
                    <img
                      style={{ width: 100, height: 100, objectFit: "cover" }}
                      src="https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg?t=st=1657900968~exp=1657901568~hmac=22baf484ec3e00aea87efd5727e71509a5086f22ea8481f86137782d74196097&w=900"
                      alt="..."
                    />
                  )}
                </div>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100"
                    onChange={this.handleChangeFile}
                    accept="image/*"
                    name="url"
                  />
                </label>
                <Progress percent={this.state.percent} style={{ width: 600 }} />
              </div>
            </Form.Item>
          )}
          <Form.Item>
            <button
              type="submit"
              className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
            >
              Create
            </button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default CreateCourse;
