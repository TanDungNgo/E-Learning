import { useState } from "react";
import { useFormik } from "formik";
import { Form, Input, InputNumber } from "antd";
export const AddCourse = () => {
  const [imgSrc, setImgSrc] = useState("");

  const formik = useFormik({
    initialValues: {
      movieName: "",
      movieTrailer: "",
      movieDescription: "",
      movieRelease: "",
      movieLength: 0,
      movieStatus: false,
      movieEvaluate: 0,
      moviePrice: 0,
      imageForm: {},
    },
    onSubmit: (values) => {
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      // let formData = new FormData();
      // for (let key in values) {
      //   if (key !== "imageForm") {
      //     formData.append(key, values[key]);
      //   } else {
      //     formData.append("imageForm", values.imageForm, values.imageForm.name);
      //   }
      // }
      // //Gọi api gửi các giá trị formdata về backend xử lý
      // dispatch(createMovieAction(formData));
    },
  });

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
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
        setImgSrc(e.target.result); //Hình base 64
      };
      //Đem dữ liệu file lưu vào formik
      formik.setFieldValue("imageForm", file);
    }
  };

  return (
    <div>
      <>
        <Form
          onSubmitCapture={formik.handleSubmit}
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
          <h1>Thêm mới phim </h1>

          <Form.Item label="Tên phim">
            <Input
              name="movieName"
              onChange={formik.handleChange}
              placeholder="Nhập tên phim"
            />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input
              name="movieTrailer"
              onChange={formik.handleChange}
              placeholder="Nhập trailer"
            />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input
              name="movieDescription"
              onChange={formik.handleChange}
              placeholder="Nhập mô tả"
            />
          </Form.Item>
          {/* <Form.Item label="Ngày khởi chiếu">
            <DatePicker
              format={"YYYY-MM-DD"}
              onChange={handleChangeDatePicker}
            />
          </Form.Item> */}
          {/* <Form.Item label="Sắp chiếu">
            <Switch onChange={handleChangeSwitch("movieStatus")} />
          </Form.Item>

          <Form.Item label="Số sao">
            <InputNumber
              onChange={handleChangeInputNumber("movieEvaluate")}
              min={1}
              max={10}
            />
          </Form.Item> */}

          <Form.Item label="Giá phim">
            <InputNumber onChange={handleChangeInputNumber("moviePrice")} />
          </Form.Item>

          <Form.Item label="Thời lượng phim">
            <InputNumber onChange={handleChangeInputNumber("movieLength")} />
          </Form.Item>

          <Form.Item label="Poster">
            <input
              type="file"
              onChange={handleChangeFile}
              accept="image/png, image/jpeg,image/gif,image/png"
            />
            <br />
            <img style={{ width: 150, height: 200 }} src={imgSrc} alt="..." />
          </Form.Item>
          <Form.Item label="Tác vụ">
            <button type="submit" className="bg-blue-300 text-white p-2">
              Thêm phim
            </button>
          </Form.Item>
        </Form>
      </>
    </div>
  );
};
