import { useState } from "react";
import { useFormik } from "formik";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storageFirebase from "../../utils/settings/firebaseConfig";
// import { Form, Input, DatePicker, InputNumber, Switch } from "antd";
export const AddCourse = () => {
  // State to store uploaded file
  const [file, setFile] = useState("");

  const [imgSrc, setImgSrc] = useState("");

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storageFirebase, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

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

  // const handleChangeInputNumber = (name) => {
  //   return (value) => {
  //     formik.setFieldValue(name, value);
  //   };
  // };

  // const handleChangeFile = (e) => {
  //   //Lấy file ra từ e
  //   let file = e.target.files[0];
  //   if (
  //     file.type === "image/jpeg" ||
  //     file.type === "image/jpg" ||
  //     file.type === "image/png"
  //   ) {
  //     //Tạo đối tượng để đọc file
  //     let reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = (e) => {
  //       // console.log(e.target.result);
  //       setImgSrc(e.target.result); //Hình base 64
  //     };
  //     //Đem dữ liệu file lưu vào formik
  //     formik.setFieldValue("imageForm", file);
  //   }
  // };

  return (
    <div>
      <input type="file" onChange={handleChange} accept="/image/*" />
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent} "% done"</p>
    </div>
  );
};
