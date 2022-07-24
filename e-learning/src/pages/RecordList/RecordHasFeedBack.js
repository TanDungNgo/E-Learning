import React, { useState } from "react";
import { AudioComponent } from "../../components/AudioPlayer/AudioPlayer";
import { Form } from "antd";
import { useFormik } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendFeedbackAction } from "../../redux/actions/FeedbackAcions";
import { RecordService } from "../../services/RecordService";
import { getAllRecordsOfUserByLessonIdAction } from "../../redux/actions/RecordActions";
import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { SUCCESS } from "../../utils/settings/config";
const RecordHasFeedBack = (props) => {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.UserReducer);
  const [showFeedBack, setShowFeedBack] = useState(false);
  const { lesson, item } = props;
  const formik = useFormik({
    initialValues: {
      feedback: "",
    },
    onSubmit: (values) => {
      const feedbackForm = {
        student_id: item.user_id,
        teacher_id: userLogin.id,
        record_id: item.id,
        body: values.feedback,
      };
      dispatch(sendFeedbackAction(feedbackForm));
    },
  });
  const deleterecord = async (e, id) => {
    try {
      await RecordService.deleteRecord(id);
      openNotificationWithIcon(
        SUCCESS,
        "Deleted record successfully",
        "success"
      );
      dispatch(getAllRecordsOfUserByLessonIdAction(lesson.id, userLogin.id));
    } catch (error) {
      console.log("error>>", error);
    }
  };
  return (
    <Fragment>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="truncate py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {lesson.course_name}
        </th>
        <td className="truncate py-4 px-6">{lesson.name}</td>
        <td className="truncate py-4 px-6">
          {item.minute}:{item.second}
        </td>
        <td className="py-4 px-6">
          <div className="flex align-middle items-center">
            <div>
              <img
                className="object-cover rounded-full w-8 h-8"
                src="https://v1.tailwindcss.com/img/jonathan.jpg"
                alt="abc"
              />
            </div>
            <div>
              <span className="pl-2 text-sm font-semibold">
                {item.username}
              </span>
            </div>
          </div>
        </td>
        <td className="py-4 px-6">
          <AudioComponent record={item} />
          {showFeedBack && (
            <div className="pt-6">
              <Form
                labelCol={{
                  span: 2,
                }}
                wrapperCol={{
                  span: 30,
                }}
                layout="horizontal"
                onSubmitCapture={() => {
                  formik.handleSubmit();
                }}
              >
                <div style={{ border: "" }} className="w-full flex">
                  <Form.Item onChange={formik.handleChange}>
                    <div className="flex flex-wrap">
                      <div className="w-full">
                        <textarea
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="feedback"
                          type="text"
                          name="feedback"
                          placeholder="Your voice is so good!"
                        />
                      </div>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <button
                      type="submit"
                      className=" text-white bg-gradient-to-r ml-2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                      <i className="fa fa-paper-plane " />
                    </button>
                  </Form.Item>
                </div>
                {/* Feedback Box: Can phai doi thanh thong tin o day la cua giao vien, gom avatar giao vien, ten giao vien, loi nhan feedback */}
                {/* Neu da co feed back, hien thi feedback, neu chua co thi hien thi default */}
                {1 + 1 === 3 ? (
                  <div className="max-w-sm mx-auto flex p-3 bg-white rounded-lg border border-gray-300">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12"
                        src="https://v1.tailwindcss.com/img/jonathan.jpg"
                        alt="ChitChat Logo"
                      />
                    </div>
                    <div className="ml-6 pt-1">
                      <h4 className="text-xl text-gray-900 leading-tight">
                        {item.username}
                      </h4>
                      <p className="text-base text-gray-600 leading-normal">
                        You have a new message!
                      </p>
                    </div>
                  </div>
                ) : (
                  // <div className="max-w-sm mx-auto flex p-3 bg-white rounded-lg border border-gray-300">
                  //   <div className="ml-6 pt-1">
                  //     <p className="text-base text-gray-600 leading-normal">
                  //       Nothing here!
                  //     </p>
                  //   </div>
                  // </div>
                  <></>
                )}
              </Form>
            </div>
          )}
        </td>
        <td className="py-4 flex align-middle pl-6">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => {
              setShowFeedBack(!showFeedBack);
            }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => deleterecord(e, item.id)}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default RecordHasFeedBack;
