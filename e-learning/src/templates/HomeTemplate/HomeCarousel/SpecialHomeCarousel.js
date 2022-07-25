import React from "react";
import "./HomeCarousel.css";
import { PlayCircleTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { searchCourseAction } from "../../../redux/actions/SearchAction";
const backgroundStyle = {
  height: "600px",
  color: "#fff",
  textAlign: "center",
  background:
    "url('https://img.freepik.com/premium-photo/portrait-asian-teacher-holding-tablet-front-empty-classroom-university-isolated-background_43157-3966.jpg?w=1380')",
};

const textStyle = {
  color: "#1c1f2c",
  fontFamily: "'Fredoka One', cursive",
  marginBottom: "0.5rem",
  textAlign: "left",
};

const desStyle = {
  marginBottom: "0.3rem",
};

export const SpecialHomeCarousel = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      searchTerm: "",
    },

    onSubmit: (values) => {
      dispatch(searchCourseAction(values.searchTerm));
    },
  });
  return (
    <div style={backgroundStyle} className="pt-52">
      <div className="px-28 grid overflow-hidden grid-cols-2 grid-rows-1 gap-5">
        <div className="">
          <div className="grid overflow-hidden grid-cols-1 grid-rows-4 gap-5">
            <div className="box row-span-2 font-sans">
              <p style={textStyle} className="text-4xl">
                Anytime, anywhere
              </p>
              <p style={textStyle} className="text-4xl">
                Learn on your schedule
              </p>
              <p style={textStyle} className="text-4xl">
                from any device
              </p>
            </div>
            <div className="box">
              <p
                style={desStyle}
                className="text-gray-500 text-left font-medium"
              >
                We believe everyone has the capcity to be creative.
              </p>
              <p
                style={desStyle}
                className="text-gray-500 text-left font-medium"
              >
                <span className="text-gray-800 font-semibold">Educate</span> is
                a place where people develop their own potential.
              </p>
            </div>
            <div className="box">
              <form className="pr-12" onSubmit={formik.handleSubmit}>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 h-14"
                    placeholder="Search Mockups, Logos..."
                    name="searchTerm"
                    onChange={formik.handleChange}
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="object-scale-down flex items-center ">
          <div className="rounded-2xl border-8 border-slate-50 relative">
            <img
              src="https://img.freepik.com/free-photo/young-asia-businessman-using-computer-laptop-talk-colleagues-about-plan-video-call-meeting-while-working-from-home_7861-2757.jpg?w=1060&t=st=1657399456~exp=1657400056~hmac=67cdbc27aa72dffa16baf7c23a5e2481dc4b4b9d03f5fe720dd5c2dfff8cb3c1"
              alt="abc"
              className="w-96"
            ></img>
            <PlayCircleTwoTone
              style={{
                fontSize: "50px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
              twoToneColor="#ffa068"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
