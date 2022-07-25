import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import AddCourse from "./pages/Admin/Courses/AddCourse";
import Course from "./pages/Admin/Courses/Course";
import EditCourse from "./pages/Admin/Courses/EditCourse";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AddLesson from "./pages/Admin/Lesson/AddLesson";
import EditLesson from "./pages/Admin/Lesson/EditLesson";
import Lessons from "./pages/Admin/Lesson/Lesson";
import AllCourses from "./pages/AllCourses/AllCourses";
import { CourseDetailUser } from "./pages/Courses/CourseDetailUser";
import CreateCourse from "./pages/CreateCourse/CreateCourse";
import CreateLesson from "./pages/CreateLesson/CreateLesson";
import { Home } from "./pages/Home/Home";
import { LessonDetailUser } from "./pages/Lesson/LessonDetailUser";
import ListCourse from "./pages/ListCourse/ListCourse";
import ListCreatedCourse from "./pages/ListCreatedCourse/ListCreatedCourse";
import { Login } from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Upgrade from "./pages/Profile/Upgrade";
import RecordList from "./pages/RecordList/RecordList";
import Register from "./pages/Register/Register";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { ProfileTemplate } from "./templates/ProfileTemplate/SideBar/ProfileTemplate";
import UserNotify from "./pages/Notification/UserNotify";
import Users from "./pages/Admin/Users/Users";
import UpgradeTeacher from "./pages/Admin/UserRequests/UpgradeTeacher";
import PendingCourse from "./pages/Admin/Courses/PendingCourse";
export const history = createBrowserHistory();
function App() {
  return (
    <Switch>
      <HomeTemplate absoluteHeader={true} path="/" exact Component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <ProfileTemplate path="/profile" exact Component={Profile} />
      <ProfileTemplate path="/upgrade" exact Component={Upgrade} />
      <HomeTemplate path="/all-courses" exact Component={AllCourses} />
      <AdminTemplate
        path="/admin/course/:id/add-new"
        exact
        Component={AddLesson}
      />
      <AdminTemplate
        path="/admin/courses/:courseId/lessons"
        exact
        Component={Lessons}
      />
      <AdminTemplate
        path="/admin/course/:courseId/lesson/:lessonId/edit"
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
      <AdminTemplate path="/admin/users" exact Component={Users} />
      <AdminTemplate
        path="/admin/user-request"
        exact
        Component={UpgradeTeacher}
      />

      <AdminTemplate
        path="/admin/pending-courses"
        exact
        Component={PendingCourse}
      />

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
      <AdminTemplate path="/admin/courses" exact Component={Course} />
      <ProfileTemplate path="/my-notification" exact Component={UserNotify} />
    </Switch>
  );
}

export default App;
