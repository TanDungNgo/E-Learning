import React, { Fragment, useEffect } from "react";
import { Button, Form, InputNumber, Table } from "antd";
import { useFormik } from "formik";
import { Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllCoursesAction } from "../../../redux/actions/CourseAction";

const courseDefault = [
  {
    id: 1,
    name: "Làm chủ tiếng nhật trong 1 ngày",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 1,
    price: "1.000.000",
  },
  {
    id: 2,
    name: "Làm chủ tiếng nhật trong 2 ngày",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 2,
    price: "2.000.000",
  },
  {
    id: 3,
    name: "Làm chủ tiếng nhật trong 3 ngày",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 3,
    price: "3.000.000",
  },
  {
    id: 4,
    name: "Làm chủ tiếng nhật trong 4 ngày",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 4,
    price: "4.000.000",
  },
  {
    id: 5,
    name: "Làm chủ tiếng nhật trong 1 tuần",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 5,
    price: "1.000.000",
  },
  {
    id: 6,
    name: "Kaiwa cùng giáo viên bản xứ",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 2,
    price: "1.000.000",
  },
  {
    id: 7,
    name: "Làm chủ tiếng nhật trong 2 tuần",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 1,
    price: "1.000.000",
  },
  {
    id: 8,
    name: "N3 full options",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 1,
    price: "1.000.000",
  },
  {
    id: 9,
    name: "Làm chủ tiếng nhật trong 1 ngày(part 2)",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 1,
    price: "1.000.000",
  },
  {
    id: 10,
    name: "Làm chủ tiếng nhật trong 2 ngày(part 2)",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 2,
    price: "2.000.000",
  },
  {
    id: 11,
    name: "Làm chủ tiếng nhật trong 3 ngày(part 2)",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 3,
    price: "3.000.000",
  },
  {
    id: 12,
    name: "Làm chủ tiếng nhật trong 4 ngày(part 2)",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 4,
    price: "4.000.000",
  },
  {
    id: 13,
    name: "Làm chủ tiếng nhật trong 1 tuần(part 2)",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 5,
    price: "1.000.000",
  },
  {
    id: 14,
    name: "Kaiwa cùng giáo viên bản xứ(part 2)",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 2,
    price: "1.000.000",
  },
  {
    id: 15,
    name: "Làm chủ tiếng nhật trong 2 tuần(part 2)",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 1,
    price: "1.000.000",
  },
  {
    id: 16,
    name: "N3 full options (part 2)",
    description:
      "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
    banner:
      "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
    teacher_name: 1,
    price: "1.000.000",
  },
];

export default function Course(props) {
  // const { coursesDefault } = useSelector((state) => state.courseReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoursesAction());
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      mincourseEvaluate: 0,
      maxcourseEvaluate: 10,
    },
    // onSubmit: (values) => {
    //   dispatch(
    //     getAllcourseAction(
    //       values.name,
    //       values.mincourseEvaluate,
    //       values.maxcourseEvaluate
    //     )
    //   );
    // },
    onReset: (values) => {},
  });

  const columns = [
    {
      title: "Mã khóa học",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Banner",
      dataIndex: "banner",
      render: (text, course, index) => {
        return (
          <Fragment>
            <img
              src={course.banner}
              alt={course.banner}
              style={{ width: 100, height: 80 }}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên khóa học",
      dataIndex: "name",
      sorter: (a, b) => {
        let nameA = a.name.toLowerCase().trim();
        let nameB = b.name.toLowerCase().trim();
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Mô tả",
      dataIndex: "description",

      render: (text, course) => {
        return (
          <Fragment>
            {course.description.length > 80
              ? course.description.substr(0, 80) + " ..."
              : course.description}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Hành động",
      dataIndex: "id",
      render: (text, course) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2  text-2xl"
              to={`/admin/courses/edit/${course.id}`}
            >
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                //Gọi action xoá
                if (
                  window.confirm("Bạn có chắc muốn xoá phim " + course.name)
                ) {
                  //Gọi action
                  // dispatch(deleteCourseByIdAction(course.id));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>

            <NavLink
              key={3}
              className=" mr-2 text-2xl"
              to={`/admin/courses/showtime/${course.id}/${course.name}`}
              onClick={() => {
                localStorage.setItem("courseParams", JSON.stringify(course));
              }}
            >
              <CalendarOutlined style={{ color: "green" }} />
            </NavLink>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = courseDefault;

  return (
    <div>
      <h3 className="text-4xl">Quản lý khóa học</h3>
      <div className="flex justify-between">
        <Button
          className="mb-5"
          onClick={() => {
            props.history.push("/admin/courses/add-new");
          }}
        >
          Thêm khóa học
        </Button>
        <Button
          className="mb-5"
          onClick={() => {
            // dispatch(getAllCourseAction());
          }}
        >
          Reset
        </Button>
      </div>

      <Form onSubmitCapture={formik.handleSubmit}>
        <Input
          style={{ width: "45%" }}
          onChange={formik.handleChange}
          placeholder="Nhập tên giáo viên"
        />
        <Input
          name="name"
          onChange={formik.handleChange}
          placeholder="Nhập tên khóa học "
          style={{
            width: "45%",
          }}
        />
        <button
          style={{
            width: "10%",
          }}
          className="p-1 bg-blue-500 rounded-sm"
          type="submit"
        >
          Search
        </button>
      </Form>

      <Table
        columns={columns}
        dataSource={data}
        rowKey={"id"}
        style={{ marginTop: 20 }}
      />
    </div>
  );
}
