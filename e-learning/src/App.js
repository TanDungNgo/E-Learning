import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import AddCourse from "./pages/Admin/Courses/AddCourse";
import Course from "./pages/Admin/Courses/Course";
import EditCourse from "./pages/Admin/Courses/EditCourse";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AddLesson from "./pages/Admin/Lesson/AddLesson";
import EditLesson from "./pages/Admin/Lesson/EditLesson";
import Lessons from "./pages/Admin/Lesson/Lesson";
import { CourseDetailUser } from "./pages/Courses/CourseDetailUser";
import CreateCourse from "./pages/CreateCourse/CreateCourse";
import CreateLesson from "./pages/CreateLesson/CreateLesson";
import { Home } from "./pages/Home/Home";
import { LessonDetailUser } from "./pages/Lesson/LessonDetailUser";
import ListCourse from "./pages/ListCourse/ListCourse";
import ListCreatedCourse from "./pages/ListCreatedCourse/ListCreatedCourse";
import { Login } from "./pages/Login/Login";
import MyAssignedCourse from "./pages/Profile/MyAssignedCourse";
import Profile from "./pages/Profile/Profile";
import Upgrade from "./pages/Profile/Upgrade";
import RecordList from "./pages/RecordList/RecordList";
import Register from "./pages/Register/Register";
import Test from "./pages/test/Test";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { ProfileTemplate } from "./templates/ProfileTemplate/SideBar/ProfileTemplate";

export const history = createBrowserHistory();
function App() {
  return (
    <Switch>
      <HomeTemplate absoluteHeader={true} path="/" exact Component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <ProfileTemplate path="/profile" exact Component={Profile} />
      <ProfileTemplate path="/upgrade" exact Component={Upgrade} />
      <ProfileTemplate
        path="/my-assigned-courses"
        exact
        Component={MyAssignedCourse}
      />
      <AdminTemplate
        path="/admin/courses/:id/add-new"
        exact
        Component={AddLesson}
      />
      <AdminTemplate
        path="/admin/courses/:courseId/lessons"
        exact
        Component={Lessons}
      />
      <AdminTemplate
        path="/admin/courses/:courseId/lessons/:lessonId/edit"
        exact
        Component={EditLesson}
      />
      <HomeTemplate path="/course/:id" exact Component={CourseDetailUser} />
      <HomeTemplate
        path="/course/:courseId/lesson/:lessonId"
        exact
        Component={LessonDetailUser}
      />
      <AdminTemplate path="/admin" exact Component={Dashboard} />
      <ProfileTemplate path="/add-new/course" exact Component={CreateCourse} />
      <ProfileTemplate path="/enrolled-course" exact Component={ListCourse} />
      <ProfileTemplate
        path="/created-course"
        exact
        Component={ListCreatedCourse}
      />
      <ProfileTemplate
        path="/course/:id/add-new/lesson"
        exact
        Component={CreateLesson}
      />
      <ProfileTemplate path="/my-record" exact Component={RecordList} />
      <AdminTemplate
        path="/admin/courses/add-new"
        exact
        Component={AddCourse}
      />
      <AdminTemplate path="/admin/courses/:id" exact Component={EditCourse} />
      <HomeTemplate
        path="/courses/:courseId/lessons/:lessonId"
        exact
        Component={LessonDetailUser}
      />
      <AdminTemplate path="/admin/courses" exact Component={Course} />
      <HomeTemplate path="/test" exact Component={Test} />
    </Switch>
  );
}

export default App;
