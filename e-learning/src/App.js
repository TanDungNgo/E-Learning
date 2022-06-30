// import RecordView from "./components/RecordView";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import Course from "./pages/Admin/Courses/Course";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import { AddCourse } from "./pages/Courses/AddCourse";
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
      <Route path="/lesson" exact component={LessonDetail} />
      <HomeTemplate path="/" exact Component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <HomeTemplate path="/courses/:id" exact Component={CourseDetail} />
      <AdminTemplate path="/admin" exact Component={Dashboard} />
      <AdminTemplate
        path="/admin/courses/add-new"
        exact
        Component={AddCourse}
      />

      <AdminTemplate path="/admin/courses" exact Component={Course} />
    </Switch>
  );
}

export default App;