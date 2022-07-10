// import RecordView from "./components/RecordView";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import AddCourse from "./pages/Admin/Courses/AddCourse";
import Course from "./pages/Admin/Courses/Course";
import EditCourse from "./pages/Admin/Courses/EditCourse";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AddLesson from "./pages/Admin/Lesson/AddLesson";
import EditLesson from "./pages/Admin/Lesson/EditLesson";
import Lessons from "./pages/Admin/Lesson/Lesson";
import { CourseDetail } from "./pages/Courses/CourseDetail";
import { Home } from "./pages/Home/Home";
import { LessonDetail } from "./pages/Lesson/LessonDetail";
import { Login } from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

export const history = createBrowserHistory();
function App() {
  return (
    <Switch>
      {/* <HomeTemplate path="/" exact Component={Home} /> */}
      <HomeTemplate path="/" exact Component={VideoPlayer} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <AdminTemplate
        path="/admin/courses/:id/add-new"
        exact
        Component={AddLesson}
      />
      <AdminTemplate
        path="/admin/courses/:id/lessons"
        exact
        Component={Lessons}
      />
       <AdminTemplate
        path="/admin/courses/:courseId/lessons/:lessonId/edit"
        exact
        Component={EditLesson}
      />
      <HomeTemplate path="/courses/:id" exact Component={CourseDetail} />
      <AdminTemplate path="/admin" exact Component={Dashboard} />
      <AdminTemplate
        path="/admin/courses/add-new"
        exact
        Component={AddCourse}
      />
      <AdminTemplate path="/admin/courses/:id" exact Component={EditCourse} />
      <HomeTemplate
        path="/courses/:courseId/lessons/:lessonId"
        exact
        Component={LessonDetail}
      />
      <AdminTemplate path="/admin/courses" exact Component={Course} />
    </Switch>
  );
}

export default App;
