import React from "react";
import CourseCard from "../../components/MultipleItems/CourseCard";
import "./ListCourse.css";

const courseFake = {
  banner:
    "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-bad49.appspot.com/o/files%2F7-8.png?alt=media&token=8d6e9694-b128-4400-8e0c-218fdb7a7c09",
  created_at: "2022-07-16 14:44:14",
  description: "dasdasdas; dsadasd; asdasdasdas; asdasdasdasdas",
  id: 1,
  name: "mamamamamma asdasdas",
  price: 1000,
  status: "pending",
  teacher_id: 1,
  teacher_name: "Minh Bùi",
  updated_at: "2022-07-16 14:44:14",
};

const ListCourse = () => {
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
        Enrolled Course
      </div>
      <div className="grid grid-cols-3 gap-4 background-list-courses p-5 rounded-lg drop-shadow">
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
        <CourseCard course={courseFake} />
      </div>
    </>
  );
};

export default ListCourse;
